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
		filename = '',
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
			ContentDisposition: `attachment; filename="${filename}"`,
			ContentLength: buffer.byteLength,
			ContentType: 'application/pdf',
			Key: `generated-product-config/${filename}`,
		};

		s3.upload(uploadParams, (error, data) => {
			res.status(200).json({
				error,
				data,
			});
		});
	});
	await browser.close();
};

export default savePdf;
