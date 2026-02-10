import type {
	IAuthenticateGeneric,
	// ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PaymentasiaApi implements ICredentialType {
	name = 'paymentasiaApi';

	displayName = 'Payment Asia API';

	// Link to your community node's README
	documentationUrl = 'https://merchant.pa-sys.com/services/online-payments/api-documents';

	// Icon for the credentials page
	icon = 'file:palogo.svg' as const;

	properties: INodeProperties[] = [
		{
			displayName:
				'<a href="https://application.pa-sys.com/knMDz9YbO0" target="_blank">Click here to start Payment Asia onboarding</a>',
			name: 'notice',
			type: 'notice',
			default: '',
		},
		{
			displayName: 'API 金鑰',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
		// {
		// 	displayName: 'Merchant Secret',
		// 	name: 'merchantSecret',
		// 	type: 'string',
		// 	// typeOptions: { password: true },
		// 	required: true,
		// 	default: '',
		// },
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-KEY': '={{$credentials.apiKey}}',
			},
		},
	};
}
