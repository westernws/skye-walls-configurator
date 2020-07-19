import { parse } from 'uri-parser';
import { addToUrl } from '~/util/addToUrl';

const serializeQueryKeys = (query, encode = false) => {
	return Object.entries(query).map((entry) => {
		return [
			encode ? encodeURIComponent(entry[0]) : entry[0],
			encode ? encodeURIComponent(entry[1]) : entry[1],
		].join('=');
	}).join('&');
};

export default function pardotFormHandler(req, res) {
	const { formName } = req.query;
	const parsedReqUrl = parse(req.url);
	const {
		firstName,
		lastName,
		email,
		zipCode,
	} = parsedReqUrl.queryKey;
	let loc = `${req.headers.referer}`;
	const parsedLoc = parse(loc);

	switch (formName) {
	case 'emailListForm':
		if (parsedReqUrl.queryKey.errors) {
			const query = {};

			if (firstName) {
				query.firstName = firstName;
			}
			if (lastName) {
				query.lastName = lastName;
			}
			if (email) {
				query.email = email;
			}
			if (zipCode) {
				query.zipCode = zipCode;
			}
			const locQuery = {
				...parsedLoc.queryKey,
				...query,
				formError: formName,
			};
			loc = addToUrl(loc, serializeQueryKeys(locQuery));
			loc += `#${formName}`;
		}
		res.writeHead(302, { Location: loc });
		res.end();
		break;
	default:
		res.writeHead(302, { Location: '/' });
		break;
	}
}
