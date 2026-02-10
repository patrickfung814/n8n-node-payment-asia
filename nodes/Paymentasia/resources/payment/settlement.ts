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
				method: 'GET',
				url: '=https://gateway.pa-sys.com/payment/v3/settlement',
			},
			send: {
				type: 'body',
				property: 'settlement_date',
				value: '={{ $parameter.settlement_date.split("T")[0] }}',
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
				routing: {
					send: {
						type: 'body',
						property: 'page',
						value: '={{ String($value) }}',
					},
				},
			},
		],
	},
];
