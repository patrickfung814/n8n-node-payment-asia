import { type INodeProperties } from 'n8n-workflow';

const showOnlyForPaymentQuery = {
	operation: ['paymentQuery'],
	resource: ['payment'],
};

/**
 * Properties for Payment Query operation
 * Based on: https://docs.paymentasia.com/reference/payment-query
 * Endpoint: GET /payment/v3/query/{merchant_reference}
 */
export const paymentQueryDescription: INodeProperties[] = [
	{
		displayName: 'Merchant Reference',
		name: 'merchantReference',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForPaymentQuery,
		},
		description: 'The merchant reference ID to query (your order ID or payment reference)',
		routing: {
			request: {
				url: '=/payment/v3/query/{{$parameter.merchantReference}}',
			},
		},
	},
];
