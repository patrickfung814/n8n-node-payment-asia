import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { paymentDescription } from './resources/payment';

export class Paymentasia implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Paymentasia',
		name: 'paymentasia',
		icon: {
			light: 'file:palogo.svg',
			dark: 'file:palogo.dark.svg',
		},
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Paymentasia API',
		defaults: {
			name: 'Paymentasia',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'paymentasiaApi', required: true }],
		requestDefaults: {
			baseURL: 'https://gateway.pa-sys.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Payment',
						value: 'payment',
						description: 'Payment operations including creation, queries, settlements, and refunds',
					},
				],
				default: 'payment',
			},
			...paymentDescription,
		],
	};
}
