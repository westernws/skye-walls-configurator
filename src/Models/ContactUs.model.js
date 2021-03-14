import { types } from 'mobx-state-tree';
import mapKeys from 'lodash/mapKeys';
import pick from 'lodash/pick';

import { ProductModel } from '~/Models/Product.model';

export const ContactUsModel = types
	.model({
		id: types.refinement(types.identifier, identifier => identifier.indexOf('ContactUsModel_') === 0),
		recordType: '0122J000000ccPB',
		oid: '00D50000000cwoW',
		country: 'United States',
		company: '[[Unknown]]',
		industry: 'Skye Walls',
		webtoLead: '1',
		selectedOptions: '',
		// 'retURL': 'https://build.skyewallsbywws.local',
		debug: 0,
		debugEmail: '',
		firstName: 'Test firstname',
		lastName: 'Test lastname',
		email: 'test@example.com',
		state: 'Minnesota',
		phone: '6125551234',
		city: 'Test city',
		emailOptIn: true,
		// firstName: '',
		// lastName: '',
		// email: '',
		// state: '',
		// phone: '',
		// city: '',
		configuredProduct: types.maybeNull(types.reference(ProductModel)),
	})
	.views(self => ({
		get comments() {
			const {
				configuredProduct: {
					selectedOptions: configuredProductOptions = '',
				} = {},
				selectedOptions = '',
			} = self;

			return selectedOptions || configuredProductOptions;
		},
		get hiddenFields() {
			return pick(self, [
				'recordType',
				'oid',
				'country',
				'company',
				'webtoLead',
				'comments',
				'industry',
			]);
		},
		get debugFields() {
			return pick(self, [
				'debug',
				'debugEmail',
			]);
		},
		get visibleFields() {
			return pick(self, [
				'firstName',
				'lastName',
				'email',
				'state',
				'phone',
				'city',
				'emailOptIn',
			]);
		},
		get salesforceKeysMap() {
			return {
				comments: '00N5000000A5zaM',
				webtoLead: 'Created_By_WebTo_Lead__c',
				firstName: 'first_name',
				lastName: 'last_name',
			};
		},
		get emailOptOut() {
			return !self.emailOptIn;
		},
		get payload() {
			const fields = {
				...self.hiddenFields,
				...self.visibleFields,
			};
			const {
				emailOptIn,
				...result
			} = fields;

			return {
				...result,
				emailOptOut: self.emailOptOut,
			};
		},
		get payloadWithDebug() {
			return { ...self.payload, ...self.debugFields };
		},
	}))
	.actions(self => ({
		mapKeysToSalesforce(obj) {
			return mapKeys(obj, (val, key) => self.salesforceKeysMap[key] || key);
		},
		setConfiguredProduct(productModelId) {
			self.configuredProduct = productModelId;
		},
		setField(name, value) {
			self[name] = value;
		},
	}));
