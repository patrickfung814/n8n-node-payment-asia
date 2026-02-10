import type { INodeProperties } from 'n8n-workflow';
import { paymentCreateDescription } from './createPayment';
import { paymentQueryDescription } from './paymentQuery';
import { settlementDescription } from './settlement';
import { initiateRefundDescription } from './initiateRefund';
import { refundQueryDescription } from './refundQuery';
import { directCreditCardDescription } from './directCreditCard';

const showOnlyForPayment = {
	resource: ['payment'],
};

/**
 * Payment resource operations for Paymentasia API
 * Handles payment creation, queries, settlements, and refunds
 */
export const paymentDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForPayment,
		},
		options: [
			{
				name: 'Create Payment',
				value: 'createPayment',
				action: 'Create a payment',
				description: 'Create a new payment transaction',
				routing: {
					request: {
						method: 'POST',
						url: '/payment/v3/request',
					},
				},
			},
			{
				name: 'Payment Query',
				value: 'paymentQuery',
				action: 'Query a payment',
				description: 'Get payment details by merchant reference',
				routing: {
					request: {
						method: 'GET',
						// URL will be set dynamically in paymentQuery.ts based on user input
					},
				},
			},
			{
				name: 'Settlement',
				value: 'settlement',
				action: 'Get settlement transactions',
				description: 'Retrieve settlement transactions for a specific date',
				routing: {
					request: {
						method: 'GET',
						url: '/payment/v3/settlement',
					},
				},
			},
			// {
			// 	name: 'Initiate Refund',
			// 	value: 'initiateRefund',
			// 	action: 'Initiate a refund',
			// 	description: 'Create a refund for a payment',
			// 	routing: {
			// 		request: {
			// 			method: 'POST',
			// 			url: '/payment/v3/refund',
			// 		},
			// 	},
			// },
			// {
			// 	name: 'Refund Query',
			// 	value: 'refundQuery',
			// 	action: 'Query a refund',
			// 	description: 'Get refund details by request reference',
			// 	routing: {
			// 		request: {
			// 			method: 'GET',
			// 			// URL will be set dynamically in refundQuery.ts based on user input
			// 		},
			// 	},
			// },
			{
				name: 'Direct Credit Card Payment',
				value: 'directCreditCard',
				action: 'Create direct credit card payment',
				description: 'Create payment with direct credit card details (requires PCI compliance)',
				routing: {
					request: {
						method: 'POST',
						url: '/payment/v3/direct/',
					},
				},
			},
		],
		default: 'createPayment',
	},
	...paymentCreateDescription,
	...paymentQueryDescription,
	...settlementDescription,
	...initiateRefundDescription,
	...refundQueryDescription,
	...directCreditCardDescription,
];
