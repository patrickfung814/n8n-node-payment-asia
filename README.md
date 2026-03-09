# n8n-nodes-paymentasia

This is an n8n community node for interacting with the Payment Asia API.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Payment Asia](https://www.paymentasia.com/) is a payment gateway service supporting multiple payment methods.

## Table of Contents

- [Installation](#installation)
- [Credentials](#credentials)
- [Operations](#operations)
- [Usage](#usage)
- [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### Community Node Installation

1. Go to **Settings** > **Community Nodes**
2. Select **Install**
3. Enter `n8n-nodes-paymentasia` in the **Enter npm package name** field
4. Click **Install**

### Manual Installation

To install manually, run:

```bash
npm install n8n-nodes-paymentasia
```

## Credentials

To use this node, you need a Payment Asia API key.

1. [Sign up for a Payment Asia account](https://application.pa-sys.com/knMDz9YbO0)
2. Obtain your API key from the Payment Asia merchant portal
3. In n8n, create new credentials of type **Payment Asia API**
4. Enter your API key

## Operations

This node supports the following operations on the **Payment** resource:

### Create Payment

Create a new payment transaction with the following fields:

- **Amount** (required): Payment amount in smallest currency unit
- **Currency** (required): Three-letter ISO currency code (e.g., HKD, USD)
- **Merchant Reference** (required): Unique identifier for the order in your system
- **Payment Method** (required): Choose from Alipay, Credit Card, CUP, FPS, Octopus, PayMe, UserDefine, WeChat Pay
- **Return URL**: URL to redirect customer after payment
- **Customer Email**: Customer email address
- **Customer First Name / Last Name**: Customer name
- **Notify URL**: For receiving datafeed after payment
- **Subject**: The name or keywords of the order
- **Additional Fields**: Customer address, country, postal code, state, language

### Payment Query

Query payment details by merchant reference.

### Settlement

Retrieve settlement transactions for a specific date.

### Direct Credit Card Payment

Create a payment with direct credit card details. **Note: Requires PCI compliance.**

## Usage

1. Add the **Paymentasia** node to your workflow
2. Configure credentials with your Payment Asia API key
3. Select the **Resource** (Payment)
4. Select the **Operation** (Create Payment, Payment Query, Settlement, or Direct Credit Card Payment)
5. Fill in the required fields based on the selected operation

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Payment Asia API Documentation](https://merchant.pa-sys.com/services/online-payments/api-documents)

## License

[MIT](LICENSE)
