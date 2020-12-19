import chromium from 'chrome-aws-lambda';

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
		console.log('snapshot save-pdf', snapshot);
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
		res.writeHead(200, {
			'Content-Type': 'application/pdf',
			'Content-Description': 'File Transfer',
			'Content-Transfer-Encoding': 'binary',
			'Access-Control-Expose-Headers': 'Content-Disposition',
			'Content-Disposition': 'attachment; filename="example-file.pdf',
		});
		res.end(buffer);
	});
	await browser.close();
};

export default savePdf;

export const config = {
	api: {
		bodyParser: {
			sizeLimit: '1mb',
		},
	},
};
