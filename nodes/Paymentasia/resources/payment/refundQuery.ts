import type { INodeProperties } from 'n8n-workflow';

const showOnlyForRefundQuery = {
	operation: ['refundQuery'],
	resource: ['payment'],
};

/**
 * Properties for Refund Query operation
 * Based on: https://docs.paymentasia.com/reference/refund-query
 * Endpoint: GET /payment/v3/refund-query/{request_reference}
 */
export const refundQueryDescription: INodeProperties[] = [
	{
		displayName: 'Request Reference',
		name: 'requestReference',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForRefundQuery,
		},
		description: 'The request reference ID to query (your refund reference)',
		routing: {
			request: {
				url: '=/payment/v3/refund-query/{{$parameter.requestReference}}',
			},
		},
	},
];
