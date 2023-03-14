## Activecampaign Typescript SDK

A fully typed Activecampaign node.js SDK. Updated as of March 2023.

### Usage

```
yarn add activecampaign-sdk
```

```typescript
import { ActiveCampaign, DefaultActiveCampaign } from 'activecampaign-sdk';

const client = new ActiveCampaign({
    BASE: 'https://your-account-name.api-us1.com/api/3',
    HEADERS: { 'Api-Token': 'your-api-token' },
}).default;
```

### Motivations

* Activecampaign isn't able to provide a working node.js SDK, even less with proper typescript definitions.
* I wish this didn't exist

### About this SDK

This SDK has been generated using the [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) module with the following command :

`npx openapi-typescript-codegen --input openapidescription.json --output ./src/core/activecampaign/sdk -c node --name ActiveCampaign --exportModels false --postfix ActiveCampaign`

You can find the latest OpenAPI definitions file can be downloaded here : https://dash.readme.com/api/v1/api-registry/[hash]. The latest hash is available in [their documentation](https://developers.activecampaign.com/reference/overview) when viewing the node.js examples.
