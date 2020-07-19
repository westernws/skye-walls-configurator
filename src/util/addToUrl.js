import { parse } from 'uri-parser';

export const addToUrl = (str, add) => {
	const parsedUrl = parse(str);

	if (!add) {
		return str;
	}
	if ((/\?/).test(str)) {
		if (parsedUrl?.anchor?.length) {
			return `${str.split('#')[0]}&${add}#${parsedUrl.anchor}`;
		}
		return `${str}&${add}`;
	}
	if (parsedUrl?.anchor?.length) {
		return `${str.split('#')[0]}?${add}#${parsedUrl.anchor}`;
	}
	return `${str}?${add}`;
};
