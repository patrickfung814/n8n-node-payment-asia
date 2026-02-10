import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDirectCreditCard = {
	operation: ['directCreditCard'],
	resource: ['payment'],
};

/**
 * Properties for Direct Integration - Credit Card Create Payment operation
 * Based on: https://docs.paymentasia.com/reference/payment-3
 * This is for direct credit card processing where card details are provided
 */
export const directCreditCardDescription: INodeProperties[] = [
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: showOnlyForDirectCreditCard,
		},
		description: 'e.g. 10000.00, 100.00, 1.00. (length 24)',
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
			show: showOnlyForDirectCreditCard,
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
			show: showOnlyForDirectCreditCard,
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
		displayName: 'Notify URL',
		name: 'notify_url',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForDirectCreditCard,
		},
		description: 'For receiving datafeed after payment. (length 255)',
		routing: {
			send: {
				type: 'body',
				property: 'notify_url',
			},
		},
	},
	{
		displayName: 'Return URL',
		name: 'return_url',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForDirectCreditCard,
		},
		description: 'Customer will be redirected back to URL provided.(length 255)',
		routing: {
			send: {
				type: 'body',
				property: 'return_url',
			},
		},
	},
	{
		displayName: 'Customer Address',
		name: 'customer_address',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForDirectCreditCard,
		},
		description: 'Required if network is choosing a Credit Card. (length 255)',
		routing: {
			send: {
				type: 'body',
				property: 'customer_address',
			},
		},
	},
	{
		displayName: 'Customer Country',
		name: 'customer_country',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForDirectCreditCard,
		},
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
		displayName: 'Customer Email',
		name: 'customerEmail',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForDirectCreditCard,
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
		displayName: 'Card Holder Name',
		name: 'card_holder_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForDirectCreditCard,
		},
		description: 'Name of the card holder',
		routing: {
			send: {
				type: 'body',
				property: 'card_holder_name',
			},
		},
	},

	{
		displayName: 'Customer IP',
		name: 'customer_ip',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForDirectCreditCard,
		},
		description: 'Customer IP address',
		routing: {
			send: {
				type: 'body',
				property: 'customer_ip',
			},
		},
	},
	{
		displayName: 'Customer Phone',
		name: 'customerPhone',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForDirectCreditCard,
		},
		description: 'Customer phone number',
		routing: {
			send: {
				type: 'body',
				property: 'customer_phone',
			},
		},
	},

	{
		displayName: 'Card Number',
		name: 'cardNumber',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForDirectCreditCard,
		},
		description: 'Credit card number ',
		routing: {
			send: {
				type: 'body',
				property: 'card_number',
			},
		},
	},

	{
		displayName: 'Card Expiry Year',
		name: 'cardExpiryYear',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForDirectCreditCard,
		},
		description: 'Card expiry year (YYYY format, e.g., 2025)',
		routing: {
			send: {
				type: 'body',
				property: 'card_expiry_year',
			},
		},
	},
	{
		displayName: 'Card Expiry Month',
		name: 'cardExpiryMonth',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForDirectCreditCard,
		},
		description: 'Card expiry month (MM format, e.g., 01 for January)',
		routing: {
			send: {
				type: 'body',
				property: 'card_expiry_month',
			},
		},
	},
	{
		displayName: 'CVV',
		name: 'cvv',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForDirectCreditCard,
		},
		description: 'Card verification value (3 or 4 digits)',
		routing: {
			send: {
				type: 'body',
				property: 'cvv',
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
			show: showOnlyForDirectCreditCard,
		},
		options: [
			{
				displayName: 'Customer Name',
				name: 'network',
				type: 'options',
				options: [
					{
						name: 'CUP',
						value: 'CUP',
					},
					{
						name: 'CreditCard',
						value: 'CreditCard',
					},
				],
				default: '',
				description: 'Customer name',
				routing: {
					send: {
						type: 'body',
						property: 'network',
					},
				},
			},
		],
	},
];
