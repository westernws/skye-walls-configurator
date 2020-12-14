import puppeteer from 'puppeteer';

const savePdf = async (req, res) => {
	const browser = await puppeteer.launch({
		headless: true,
		args: ['—no-sandbox', '—disable-setuid-sandbox'],
	});
	const page = await browser.newPage();

	// console.log('req.body.snapshot.id', req.body.snapshot.id);
	// console.log('res', res);
	await page.goto(`http://buildlocal.skyewallsbywws.com${req.body.link}`, { waitUntil: 'networkidle2' });
	await page.setViewport({ width: 500, height: 500 });
	await page.emulateMediaType('screen');
	const url = await page.evaluate(({ productName, selectedOptionGroups }) => {
		app.page.setProduct(app.getProductByName(productName)); // eslint-disable-line no-undef
		selectedOptionGroups.forEach(({ optionGroupName, optionName }) => {
			app.page.product.setOption(optionGroupName, optionName); // eslint-disable-line no-undef
		});
		return {
			productName,
			selectedOptionGroups,
		};
	}, req.body);
	console.log('url', url);
	// await page.goto(`http://buildlocal.skyewallsbywws.com${url}`, { waitUntil: 'networkidle2' });
	// const pdf = await page.pdf({
	// 	path: path.join(process.env.PWD, 'tmp/pdf', 'test2.pdf'),
	// 	format: 'Letter',
	// 	printBackground: true,
	// 	landscape: true,
	// 	scale: 0.75,
	// });
	await browser.close();

	// res.status(200);
	// res.status(200).send(pdf);
	// return pdf;
	res.status(200).json({ foo: 'bar' });
};

export default savePdf;

// import { parse } from 'uri-parser';
// import { addToUrl } from '~/util/addToUrl';
//
// const serializeQueryKeys = (query, encode = false) => {
// 	return Object.entries(query).map((entry) => {
// 		return [
// 			encode ? encodeURIComponent(entry[0]) : entry[0],
// 			encode ? encodeURIComponent(entry[1]) : entry[1],
// 		].join('=');
// 	}).join('&');
// };
//
// export default function pardotFormHandler(req, res) {
// 	const { formName } = req.query;
// 	const parsedReqUrl = parse(req.url);
// 	const {
// 		firstName,
// 		lastName,
// 		email,
// 		zipCode,
// 	} = parsedReqUrl.queryKey;
// 	let loc = `${req.headers.referer}`;
// 	const parsedLoc = parse(loc);
//
// 	switch (formName) {
// 		case 'emailListForm':
// 			if (parsedReqUrl.queryKey.errors) {
// 				const query = {};
//
// 				if (firstName) {
// 					query.firstName = firstName;
// 				}
// 				if (lastName) {
// 					query.lastName = lastName;
// 				}
// 				if (email) {
// 					query.email = email;
// 				}
// 				if (zipCode) {
// 					query.zipCode = zipCode;
// 				}
// 				const locQuery = {
// 					...parsedLoc.queryKey,
// 					...query,
// 					formError: formName,
// 				};
// 				loc = addToUrl(loc, serializeQueryKeys(locQuery));
// 				loc += `#${formName}`;
// 			}
// 			res.writeHead(302, { Location: loc });
// 			res.end();
// 			break;
// 		default:
// 			res.writeHead(302, { Location: '/' });
// 			break;
// 	}
// }
