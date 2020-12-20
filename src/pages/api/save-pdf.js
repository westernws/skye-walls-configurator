import chromium from 'chrome-aws-lambda';
import aws from 'aws-sdk';

import {
	ACCESS_KEY_ID, BUCKET_NAME, REGION, SECRET_ACCESS_KEY,
} from '~/global.constants';

const savePdf = async (req, res) => {
	const browser = await chromium.puppeteer.launch({
		args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
		defaultViewport: chromium.defaultViewport,
		executablePath: await chromium.executablePath,
		headless: true,
		ignoreHTTPSErrors: true,
	});
	const page = await browser.newPage();
	const protocol = req.headers.host.includes('buildlocal') ? 'http' : 'https';
	const {
		link = '',
		snapshot = '',
	} = req.body;
	const url = `${protocol}://${req.headers.host + link}`;

	await page.setRequestInterception(true);
	page.on('request', (request) => {
		const {
			_resourceType = '',
		} = request;

		if (_resourceType !== 'document') {
			request.continue();
			return;
		}
		request.continue({
			method: 'POST',
			postData: snapshot,
		});
	});
	await page.goto(url, { waitUntil: 'networkidle2' });
	await page.setViewport({ width: 500, height: 500 });
	await page.emulateMediaType('screen');
	await page.pdf({
		format: 'Letter',
		printBackground: true,
		landscape: true,
		scale: 0.75,
	}).then((buffer) => {
		aws.config.update({
			accessKeyId: ACCESS_KEY_ID,
			secretAccessKey: SECRET_ACCESS_KEY,
			region: REGION,
			signatureVersion: 'v4',
		});
		const s3 = new aws.S3();
		const uploadParams = {
			ACL: 'public-read',
			Body: buffer,
			Bucket: BUCKET_NAME,
			ContentLength: buffer.byteLength,
			ContentType: 'application/pdf',
			Key: 'generated-product-config/product.pdf',
		};

		s3.upload(uploadParams, (error, data) => {
			res.status(200).json({
				error,
				data,
			});
		});
		// res.writeHead(200, {
		// 	'Content-Type': 'application/pdf',
		// 	'Content-Description': 'File Transfer',
		// 	'Content-Transfer-Encoding': 'binary',
		// 	'Access-Control-Expose-Headers': 'Content-Disposition',
		// 	'Content-Disposition': 'attachment; filename="example-file.pdf',
		// });
		// res.end(buffer);
	});
	await browser.close();
};

export default savePdf;

export const config = {
	api: {
		bodyParser: {
			sizeLimit: '50mb',
		},
	},
};
