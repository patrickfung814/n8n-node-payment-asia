import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSettlement = {
	operation: ['settlement'],
	resource: ['payment'],
};

/**
 * Properties for Transactions Settlement operation
 * Based on: https://docs.paymentasia.com/reference/settlement-1
 */
export const settlementDescription: INodeProperties[] = [
	{
		displayName: 'Settlement Date',
		name: 'settlement_date',
		type: 'dateTime',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForSettlement,
		},
		description: 'Date for which to retrieve settlement transactions (YYYY-MM-DD format)',
		routing: {
			request: {
				// Skip normal routing - we'll make manual request in output.postReceive
				skipSslCertificateValidation: '={{ null }}',
			},
			output: {
				postReceive: [
					// Manual HTTP request to support GET with body (non-standard)
					async function (this, items, _responseData) {
						const axios = require('axios');
						const results = [];

						for (let i = 0; i < items.length; i++) {
							const date = this.getNodeParameter('settlement_date', i) as string;
							const additionalFields = this.getNodeParameter('additionalFields', i, {}) as any;

							// Build request body
							const body: any = {
								settlement_date: date.split('T')[0], // YYYY-MM-DD format
							};

							if (additionalFields.page !== undefined) {
								body.page = String(additionalFields.page);
							}

							// Get credentials
							const credentials = await this.getCredentials('paymentasiaApi');

							// Manual axios request with GET + body (non-standard but required by API)
							try {
								const response = await axios({
									method: 'GET',
									url: 'https://gateway.pa-sys.com/payment/v3/settlement',
									headers: {
										'X-API-KEY': credentials.apiKey as string,
										Accept: 'application/json',
										'Content-Type': 'application/json',
									},
									data: body, // axios allows data with GET
								});

								results.push({ json: response.data });
							} catch (error: any) {
								if (error.response) {
									throw new Error(
										`Settlement API Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`,
									);
								}
								throw error;
							}
						}

						return results;
					},
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForSettlement,
		},
		options: [
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				description: 'Page number for pagination',
			},
		],
	},
];
