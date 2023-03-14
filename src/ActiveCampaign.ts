/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { NodeHttpRequest } from './core/NodeHttpRequest';

import { DefaultActiveCampaign } from './services/DefaultActiveCampaign';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ActiveCampaign {
    public readonly default: DefaultActiveCampaign;

    public readonly request: BaseHttpRequest;

    constructor(
        config?: Partial<OpenAPIConfig>,
        HttpRequest: HttpRequestConstructor = NodeHttpRequest,
    ) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://youraccountname.api-us1.com/api/3',
            VERSION: config?.VERSION ?? 'unknown',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.default = new DefaultActiveCampaign(this.request);
    }
}
