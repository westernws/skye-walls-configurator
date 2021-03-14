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
	const hiddenFields = {
		'recordType': '0122J000000ccPB',
		'oid': '00D50000000cwoW',
		'country': 'United States',
		'company': '[[Unknown]]',
		'Created_By_WebTo_Lead__c': '1',
		// Comments
		'00N5000000A5zaM': 'Product config test',
		// 'retURL': 'https://build.skyewallsbywws.local',
	};
	const debugFields = {
		// debug: 1,
		// debugEmail: '',
	};
	const visibleFields = {
		first_name: 'Test first_name',
		last_name: 'Test last_name',
		email: 'test@example.com',
		state: 'Minnesota',
		phone: '6125551234',
		city: 'Test city',
		industry: 'Skye Walls',
	};
	const payload = { ...hiddenFields, ...debugFields, ...visibleFields };
	const result = await axios.post('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', serializePayload(payload));

	res.status(result.status).json({ success: true });
}
