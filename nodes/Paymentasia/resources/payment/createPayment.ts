import type { INodeProperties } from 'n8n-workflow';

const showOnlyForPaymentCreate = {
	operation: ['createPayment'],
	resource: ['payment'],
};

/**
 * Properties for Create Payment operation
 * Based on: https://docs.paymentasia.com/reference/payment
 */
export const paymentCreateDescription: INodeProperties[] = [
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: showOnlyForPaymentCreate,
		},
		description: 'Payment amount in the smallest currency unit (e.g., cents for USD)',
		routing: {
			send: {
				type: 'body',
				property: 'amount',
				preSend: [
					// Add logging to see the actual request being made
					async function (this, requestOptions) {
						return requestOptions;
					},
				],
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
			show: showOnlyForPaymentCreate,
		},
		description: 'Three-letter ISO currency code (e.g., HKD, USD, EUR)',
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
		required: true,
		displayOptions: {
			show: showOnlyForPaymentCreate,
		},
		description: 'Unique identifier for the order in your system',
		routing: {
			send: {
				type: 'body',
				property: 'merchant_reference',
			},
		},
	},
	{
		displayName: 'Payment Method',
		name: 'network',
		type: 'options',
		options: [
			{ name: 'Credit Card', value: 'CreditCard' },
			{ name: 'FPS', value: 'Fps' },
			{ name: 'Alipay', value: 'Alipay' },
			{ name: 'WeChat Pay', value: 'Wechat' },
			{ name: 'PayMe', value: 'PayMe' },
			{ name: 'CUP', value: 'CUP' },
			{ name: 'Octopus', value: 'Octopus' },
			{ name: 'UserDefine', value: 'UserDefine' },
		],
		default: 'UserDefine',
		required: true,
		displayOptions: {
			show: showOnlyForPaymentCreate,
		},
		description: 'Payment method to use for the transaction',
		routing: {
			send: {
				type: 'body',
				property: 'network',
			},
		},
	},
	{
		displayName: 'Return URL',
		name: 'returnUrl',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForPaymentCreate,
		},
		description: 'URL to redirect the customer after payment completion',
		routing: {
			send: {
				type: 'body',
				property: 'return_url',
			},
		},
	},
	// {
	// 	displayName: 'Customer IP',
	// 	name: 'customer_ip',
	// 	type: 'string',
	// 	default: '',
	// 	displayOptions: {
	// 		show: showOnlyForPaymentCreate,
	// 	},
	// 	description: 'Customer IP address',
	// 	routing: {
	// 		send: {
	// 			type: 'body',
	// 			property: 'customer_ip',
	// 		},
	// 	},
	// },
	{
		displayName: 'Customer First Name',
		name: 'customer_first_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForPaymentCreate,
		},
		description: 'Customer first name',
		routing: {
			send: {
				type: 'body',
				property: 'customer_first_name',
			},
		},
	},
	{
		displayName: 'Customer Last Name',
		name: 'customer_last_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForPaymentCreate,
		},
		description: 'Customer last name',
		routing: {
			send: {
				type: 'body',
				property: 'customer_last_name',
			},
		},
	},
	{
		displayName: 'Customer Email',
		name: 'customer_email',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForPaymentCreate,
		},
		description: 'Customer email address',
		routing: {
			send: {
				type: 'body',
				property: 'customer_email',
			},
		},
	},

	{
		displayName: 'Notify URL',
		name: 'notify_url',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForPaymentCreate,
		},
		description: 'For receiving datafeed after payment',
		routing: {
			send: {
				type: 'body',
				property: 'notify_url',
			},
		},
	},

	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForPaymentCreate,
		},
		description: 'The name or keywords of the order.',
		routing: {
			send: {
				type: 'body',
				property: 'subject',
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
			show: showOnlyForPaymentCreate,
		},
		options: [
			{
				displayName: 'Customer Address',
				name: 'customer_address',
				type: 'string',
				default: '',
				description: 'Customer address',
				routing: {
					send: {
						type: 'body',
						property: 'customer_address',
					},
				},
			},
			{
				displayName: 'Customer State',
				name: 'customer_state',
				type: 'string',
				default: '',
				description: 'Customer state',
				routing: {
					send: {
						type: 'body',
						property: 'customer_state',
					},
				},
			},
			{
				displayName: 'Customer Country',
				name: 'customer_country',
				type: 'string',
				default: '',
				description:
					'ISO ALPHA-2 Code, e.g. HK, TW, US. Required if network is choosing a Credit Card. (length 2)',
				routing: {
					send: {
						type: 'body',
						property: 'customer_country',
					},
				},
			},
			{
				displayName: 'Customer Postal Code',
				name: 'customer_postal_code',
				type: 'string',
				default: '',
				description: 'Required if network is choosing a Credit Card. (length 64)',
				routing: {
					send: {
						type: 'body',
						property: 'customer_postal_code',
					},
				},
			},
			{
				displayName: 'Language',
				name: 'lang',
				type: 'options',
				options: [
					{ name: 'zh-tw', value: 'zh-tw' },
					{ name: 'zh-cn', value: 'zh-cn' },
					{ name: 'en', value: 'en' },
				],
				default: '',
				description: 'Required if network is choosing a Credit Card. (length 64)',
				routing: {
					send: {
						type: 'body',
						property: 'lang',
					},
				},
			},
		],
	},
];
