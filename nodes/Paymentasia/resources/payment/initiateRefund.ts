import type { INodeProperties } from 'n8n-workflow';

const showOnlyForRefund = {
	operation: ['initiateRefund'],
	resource: ['payment'],
};

/**
 * Properties for Initiate Refund operation
 * Based on: https://docs.paymentasia.com/reference/payment-refund-1
 */
export const initiateRefundDescription: INodeProperties[] = [
	// {
	// 	displayName: 'Payment ID',
	// 	name: 'paymentId',
	// 	type: 'string',
	// 	default: '',
	// 	required: true,
	// 	displayOptions: {
	// 		show: showOnlyForRefund,
	// 	},
	// 	description: 'The Payment ID to refund',
	// 	routing: {
	// 		send: {
	// 			type: 'body',
	// 			property: 'payment_id',
	// 		},
	// 	},
	// },
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: showOnlyForRefund,
		},
		description: '10000.00, 100.00, 1.00. (length 24).',
		routing: {
			send: {
				type: 'body',
				property: 'amount',
			},
		},
	},
	{
		displayName: 'Currency',
		name: 'currency',
		type: 'string',
		default: 'HKD',
		required: true,
		displayOptions: {
			show: showOnlyForRefund,
		},
		description:
			'For CreditCard support HKD and USD For other channel only support HKD. (length 3).',
		routing: {
			send: {
				type: 'body',
				property: 'currency',
			},
		},
	},

	{
		displayName: 'Merchant Reference',
		name: 'merchant_reference',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForRefund,
		},
		description:
			'Must be unique across payment request. Only accept alphanumeric characters(0-9) , (a-z), (A-Z), "_" and "-". (length 36)',
		routing: {
			send: {
				type: 'body',
				property: 'merchant_reference',
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
			show: showOnlyForRefund,
		},
		options: [
			{
				displayName: 'Refund Reference',
				name: 'refundReference',
				type: 'string',
				default: '',
				description: 'Your internal reference ID for the refund',
				routing: {
					send: {
						type: 'body',
						property: 'refund_reference',
					},
				},
			},
			{
				displayName: 'Notify Customer',
				name: 'notifyCustomer',
				type: 'boolean',
				default: false,
				description: 'Whether to send refund notification to the customer',
				routing: {
					send: {
						type: 'body',
						property: 'notify_customer',
					},
				},
			},
			{
				displayName: 'Metadata',
				name: 'metadata',
				type: 'json',
				default: '{}',
				description: 'Additional metadata as JSON object',
				routing: {
					send: {
						type: 'body',
						property: 'metadata',
						preSend: [
							// Parse JSON string to object
							async function (this, requestOptions) {
								const metadata = this.getNodeParameter('additionalFields.metadata') as string;
								if (metadata) {
									try {
										const body = requestOptions.body as Record<string, unknown>;
										body.metadata = JSON.parse(metadata);
									} catch {
										throw new Error('Invalid JSON in metadata field');
									}
								}
								return requestOptions;
							},
						],
					},
				},
			},
		],
	},
];
