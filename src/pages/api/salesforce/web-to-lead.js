import axios from 'axios';

const serializePayload = (query, encode = false) => {
	return Object.entries(query).map((entry) => {
		return [
			encode ? encodeURIComponent(entry[0]) : entry[0],
			encode ? encodeURIComponent(entry[1]) : entry[1],
		].join('=');
	}).join('&');
};

export default async function salesForceFormHandler(req, res) {
	const { body: payload = null } = req;
	const json = {};
	let status = 200;

	if (!payload) {
		json.success = false;
		json.error = 'No form data found to send to Salesforce.';
		status = 412;
		return res.status(status).json(json);
	}
	const result = await axios.post('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', serializePayload(payload));

	status = result.status;
	json.success = status === 200;

	return res.status(status).json(json);
}
