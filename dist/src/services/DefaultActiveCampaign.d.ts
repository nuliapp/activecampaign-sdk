import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class DefaultActiveCampaign {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Create a webhook
     * Create a new webhook
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createWebhook(requestBody?: {
        webhook?: {
            /**
             * A name (or label) to give this webhook.
             */
            name: string;
            /**
             * The URL where the webhook will send the POST request when the event occurs. Note that for https endpoints, we only can send webhooks on port 443, the default https port.
             */
            url: string;
            /**
             * The [event(s)](#section-events) that will trigger the webhook to fire.
             */
            events: Array<string>;
            /**
             * The [source(s)](#section-sources) causing an event to occur.
             */
            sources: Array<string>;
            /**
             * The id of a list associated with an event. If set, only events happening on this list id will trigger the webhook. This parameter has no effect on the following webhook events:     "subscriber_note",    "contact_tag_added",    "contact_tag_removed",    "contact_task_add",    "list_add",    "sms_sent",    "sms_reply",    "sms_unsub",    "deal_add",    "deal_update",    "deal_note_add",    "deal_pipeline_add",    "deal_stage_add",    "deal_task_add",    "deal_tasktype_add",    "deal_task_complete",    "account_add",    "account_update",    "account_contact_add",    "account_contact_update",
             */
            listid?: number;
        };
    }): CancelablePromise<{
        webhook?: {
            cdate?: string;
            listid?: string;
            name?: string;
            url?: string;
            events?: Array<string>;
            sources?: Array<string>;
            links?: any[];
            id?: string;
        };
    }>;
    /**
     * List all webhooks
     * List all existing webhooks
     * @param filtersName Filter by webhook name
     * @param filtersUrl Filter by webhook url
     * @param filtersListid Filter by webhook's associated list
     * @returns any 200
     * @throws ApiError
     */
    getAListOfWebhooks(filtersName?: string, filtersUrl?: string, filtersListid?: string): CancelablePromise<any>;
    /**
     * Create an order
     * Create a new e-commerce order resource.
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createOrder(requestBody?: {
        ecomOrder?: {
            /**
             * The id of the order in the external service. ONLY REQUIRED IF EXTERNALCHECKOUTID NOT INCLUDED.
             */
            externalid: string;
            /**
             * The id of the cart in the external service. ONLY REQUIRED IF EXTERNALID IS NOT INCLUDED.
             */
            externalcheckoutid: string;
            /**
             * The order source code. 0 - historical, 1 - real-time. Only real-time orders (source = 1) will show up on your Ecommerce Dashboard and trigger the “Makes a purchase” automation start, abandoned cart actions, customer conversions, or revenue attributions.
             */
            source: number;
            /**
             * The email address of the customer who placed the order.
             */
            email: string;
            /**
             * ecomOrder.orderProducts.description
             */
            orderProducts?: {
                /**
                 * The name of the product
                 */
                name: string;
                /**
                 * The price of the product, in cents. (i.e. $456.78 => 45678). Must be greater than or equal to zero.
                 */
                price: number;
                /**
                 * The quantity ordered.
                 */
                quantity: number;
                /**
                 * The id of the product in the external service.
                 */
                externalid: string;
                /**
                 * The category of the product.
                 */
                category?: string;
                /**
                 * The SKU for the product
                 */
                sku?: string;
                /**
                 * The description of the product
                 */
                description?: string;
                /**
                 * An Image URL that displays an image of the product
                 */
                imageUrl?: string;
                /**
                 * A URL linking to the product in your store
                 */
                productUrl?: string;
            };
            /**
             * The total price of the order in cents, including tax and shipping charges. (i.e. $456.78 => 45678). Must be greater than or equal to zero.
             */
            totalPrice: number;
            /**
             * The total shipping amount in cents for the order
             */
            shippingAmount?: number;
            /**
             * The total tax amount for the order in cents
             */
            taxAmount?: number;
            /**
             * The total discount amount for the order in cents
             */
            discountAmount?: number;
            /**
             * The currency of the order (3-digit ISO code, e.g., 'USD').
             */
            currency: string;
            /**
             * The id of the connection from which this order originated.
             */
            connectionid: number;
            /**
             * The id of the customer associated with this order.
             */
            customerid: number;
            /**
             * The URL for the order in the external service.
             */
            orderUrl?: string;
            /**
             * The date the order was placed.
             */
            externalCreatedDate: string;
            /**
             * The date the order was updated.
             */
            externalUpdatedDate?: string;
            /**
             * The date the cart was abandoned. REQUIRED ONLY IF INCLUDING EXTERNALCHECKOUTID.
             */
            abandonedDate: string;
            /**
             * The shipping method of the order.
             */
            shippingMethod?: string;
            /**
             * The order number. This can be different than the externalid.
             */
            orderNumber?: string;
            orderDiscounts?: {
                /**
                 * The discount code or name of the discount
                 */
                name?: string;
                /**
                 * The type of discount, either 'order' for discount on the order, or 'shipping' for free shipping.
                 */
                type?: string;
                /**
                 * The amount of the discount in cents.
                 */
                discountAmount?: number;
            };
        };
    }): CancelablePromise<{
        connections?: Array<{
            service?: string;
            externalid?: string;
            name?: string;
            isInternal?: string;
            connectionType?: string;
            status?: string;
            syncStatus?: string;
            sync_request_time?: any;
            sync_start_time?: any;
            lastSync?: any;
            logoUrl?: string;
            linkUrl?: string;
            cdate?: string;
            udate?: string;
            credentialExpiration?: any;
            links?: {
                options?: string;
                customers?: string;
            };
            id?: string;
            serviceName?: string;
        }>;
        ecomOrderProducts?: Array<{
            externalid?: string;
            name?: string;
            price?: number;
            quantity?: number;
            category?: string;
            sku?: string;
            description?: string;
            imageUrl?: string;
            productUrl?: string;
        }>;
        ecomOrderDiscounts?: Array<{
            name?: string;
            type?: string;
            orderid?: string;
            discountAmount?: string;
            id?: string;
            createdDate?: string;
            updatedDate?: string;
        }>;
        ecomOrder?: {
            externalid?: string;
            source?: string;
            email?: string;
            currency?: string;
            connectionid?: string;
            customerid?: string;
            orderUrl?: string;
            shippingMethod?: string;
            totalPrice?: number;
            shippingAmount?: number;
            taxAmount?: number;
            discountAmount?: number;
            externalCreatedDate?: string;
            totalProducts?: number;
            createdDate?: string;
            updatedDate?: string;
            state?: number;
            connection?: string;
            orderProducts?: Array<string>;
            orderDiscounts?: Array<string>;
            customer?: string;
            orderDate?: string;
            tstamp?: string;
            links?: {
                connection?: string;
                customer?: string;
                orderProducts?: string;
                orderDiscounts?: string;
                orderActivities?: string;
            };
            id?: string;
        };
    }>;
    /**
     * List all orders
     * List all existing e-commerce order resources.
     * @param filtersConnectionid Filter by the connection id. Must be greater than 0.
     * @param filtersExternalid Filter by the external id of the order.
     * @param filtersExternalcheckoutid Filter by the external checkout id
     * @param filtersEmail Filter by the customer email address.
     * @param filtersState Filter by the state of the order. 0 = Pending, 1 = Completed, 2 = Abandoned, 3 = Recovered, 4 = Waiting (Customer checked out but payment is not yet completed)
     * @param filtersCustomerid Filter by the customer id
     * @param filtersExternalCreatedDate Filter by the external created date
     * @param ordersConnectionid Order by connection ID. Accepted values are ASC or DESC.
     * @param ordersExternalid Order by external ID. Accepted values are ASC or DESC.
     * @param ordersExternalcheckoutid Order by external checkout ID. Accepted values are ASC or DESC.
     * @param ordersEmail Order by email. Accepted values are ASC or DESC.
     * @param ordersState Order by state. Accepted values are ASC or DESC.
     * @param ordersCustomerid Order by customer ID. Accepted values are ASC or DESC.
     * @param ordersExternalCreatedDate Order by external created date. Accepted values are ASC or DESC.
     * @returns any 200
     * @throws ApiError
     */
    listAllOrders(filtersConnectionid?: number, filtersExternalid?: number, filtersExternalcheckoutid?: string, filtersEmail?: string, filtersState?: number, filtersCustomerid?: string, filtersExternalCreatedDate?: string, ordersConnectionid?: number, ordersExternalid?: number, ordersExternalcheckoutid?: string, ordersEmail?: string, ordersState?: number, ordersCustomerid?: string, ordersExternalCreatedDate?: string): CancelablePromise<any>;
    /**
     * Delete an order
     * Delete an existing e-commerce order resource.
     * @param ecomOrderId The id of the order to delete.
     * @returns any 200
     * @throws ApiError
     */
    deleteOrder(ecomOrderId: number): CancelablePromise<any>;
    /**
     * Retrieve an order
     * Retrieve an existing e-commerce order resource.
     * @param ecomOrderId The id of the order to retrieve.
     * @returns any 200
     * @throws ApiError
     */
    getOrder(ecomOrderId: number): CancelablePromise<{
        ecomOrder?: {
            customerid?: string;
            connectionid?: string;
            state?: string;
            source?: string;
            externalid?: string;
            externalcheckoutid?: any;
            orderNumber?: string;
            email?: string;
            totalPrice?: string;
            discountAmount?: string;
            shippingAmount?: string;
            taxAmount?: string;
            totalProducts?: string;
            currency?: string;
            shippingMethod?: string;
            orderUrl?: string;
            externalCreatedDate?: string;
            externalUpdatedDate?: string;
            abandonedDate?: any;
            createdDate?: string;
            updatedDate?: string;
            orderDate?: string;
            tstamp?: string;
            links?: {
                connection?: string;
                customer?: string;
                orderProducts?: string;
                orderDiscounts?: string;
                orderActivities?: string;
            };
            id?: string;
            connection?: string;
            customer?: string;
        };
    }>;
    /**
     * Retrieve a connection
     * Retrieve an existing connection resource.
     * @param id The id of the connection to retrieve
     * @returns any 200
     * @throws ApiError
     */
    getConnection(id: string): CancelablePromise<{
        connection?: {
            isInternal?: number;
            service?: string;
            externalid?: string;
            name?: string;
            logoUrl?: string;
            linkUrl?: string;
            cdate?: string;
            udate?: string;
            links?: {
                customers?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Delete a connection
     * Delete an existing connection resource.
     * @param id The id of the connection to delete.
     * @returns any 200
     * @throws ApiError
     */
    deleteConnection(id: string): CancelablePromise<any>;
    /**
     * Update a connection
     * Update an existing connection resource.
     * @param id The id of the connection to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateConnection(id: string, requestBody?: {
        connection?: {
            /**
             * The name of the service.
             */
            service?: string;
            /**
             * The id of the account in the external service.
             */
            externalid?: string;
            /**
             * The name associated with the account in the external service.
             */
            name?: string;
            /**
             * The URL to a logo image for the third-party service.
             */
            logoUrl?: string;
            /**
             * The link to the third-party integrator's site.
             */
            linkUrl?: string;
            /**
             * The status of the connection (0 = error; 1 = connected)
             */
            status?: number;
            /**
             * The status of a sync triggered on the connection (0 = sync stopped; 1 = sync running).
             */
            syncStatus?: number;
        };
    }): CancelablePromise<{
        connection?: {
            service?: string;
            externalid?: string;
            name?: string;
            isInternal?: string;
            status?: string;
            syncStatus?: string;
            logoUrl?: string;
            linkUrl?: string;
            cdate?: string;
            udate?: string;
            links?: {
                customers?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Retrieve a customer
     * Retrieve an existing e-commerce customer resource.
     * @param id The id of the customer to retrieve
     * @returns any 200
     * @throws ApiError
     */
    getCustomer(id: string): CancelablePromise<{
        ecomCustomer?: {
            connectionid?: string;
            externalid?: string;
            email?: string;
            totalRevenue?: string;
            totalOrders?: string;
            totalProducts?: string;
            avgRevenuePerOrder?: string;
            avgProductCategory?: string;
            tstamp?: string;
            acceptsMarketing?: string;
            links?: {
                connection?: string;
                orders?: string;
            };
            id?: string;
            connection?: string;
        };
    }>;
    /**
     * Update a customer
     * Update an existing e-commerce customer resource.
     * @param id The id of the customer to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateCustomer(id: string, requestBody?: {
        ecomCustomer?: {
            /**
             * The id of the customer in the external service.
             */
            externalid?: string;
            /**
             * The id of the connection object for the service where the customer originates.
             */
            connectionid?: string;
            /**
             * The email address of the customer.
             */
            email?: string;
            /**
             * Indication of whether customer has opt-ed in to marketing communications. 0 = not opted-in, 1 = opted-in. A value of 0 means the contact will match the "Has not opted in to marketing" segment condition and a value of 1 means the contact will match the "Has opted in to marketing" segment condition.
             */
            acceptsMarketing?: string;
        };
    }): CancelablePromise<{
        ecomCustomer?: {
            connectionid?: string;
            externalid?: string;
            email?: string;
            totalRevenue?: string;
            totalOrders?: string;
            totalProducts?: string;
            avgRevenuePerOrder?: string;
            avgProductCategory?: string;
            tstamp?: string;
            links?: {
                connection?: string;
                orders?: string;
            };
            id?: string;
            connection?: string;
        };
    }>;
    /**
     * Delete a customer
     * Delete an existing e-commerce customer resource.
     * @param id The id of the customer to delete.
     * @returns any 200
     * @throws ApiError
     */
    deleteCustomer(id: string): CancelablePromise<any>;
    /**
     * Create a customer
     * Create a new e-commerce customer resource.
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createCustomer(requestBody?: {
        ecomCustomer?: {
            /**
             * The id of the connection object for the service where the customer originates.
             */
            connectionid: string;
            /**
             * The id of the customer in the external service.
             */
            externalid: string;
            /**
             * The email address of the customer.
             */
            email: string;
            /**
             * Indication of whether customer has opt-ed in to marketing communications. 0 = not opted-in, 1 = opted-in. A value of 0 means the contact will match the "Has not opted in to marketing" segment condition and a value of 1 means the contact will match the "Has opted in to marketing" segment condition.
             */
            acceptsMarketing?: string;
        };
    }): CancelablePromise<{
        ecomCustomer?: {
            connectionid?: string;
            externalid?: string;
            email?: string;
            links?: {
                connection?: string;
                orders?: string;
            };
            id?: string;
            connection?: string;
        };
    }>;
    /**
     * List all customers
     * List all e-commerce customer resources.
     * @param filtersEmail Filter by the email address of a customer.
     * @param filtersExternalid Filter by the id of the customer in the external service.
     * @param filtersConnectionid Filter by the id of the connection object for the service where the customer originates.
     * @returns any 200
     * @throws ApiError
     */
    listAllCustomers(filtersEmail?: string, filtersExternalid?: string, filtersConnectionid?: string): CancelablePromise<{
        ecomCustomers?: Array<{
            connectionid?: string;
            externalid?: string;
            email?: string;
            totalRevenue?: string;
            totalOrders?: string;
            totalProducts?: string;
            avgRevenuePerOrder?: string;
            avgProductCategory?: string;
            tstamp?: string;
            links?: {
                connection?: string;
                orders?: string;
            };
            id?: string;
            connection?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * List all webhook events
     * List all available webhook events
     * @returns any 200
     * @throws ApiError
     */
    getAListOfWebhookEvents(): CancelablePromise<{
        webhookEvents?: Array<string>;
        meta?: {
            total?: number;
        };
    }>;
    /**
     * Retrieve a webhook
     * Retrieve an existing webhook
     * @param id
     * @returns any 200
     * @throws ApiError
     */
    getWebhook(id: number): CancelablePromise<{
        webhook?: {
            cdate?: string;
            listid?: string;
            name?: string;
            url?: string;
            events?: Array<string>;
            sources?: Array<string>;
            links?: any[];
            id?: string;
        };
    }>;
    /**
     * Update a webhook
     * Update an existing webhook
     * @param id The webhook id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateWebhook(id: number, requestBody?: {
        webhook?: {
            /**
             * A name (or label) to give the webhook.
             */
            name?: string;
            /**
             * The URL where the webhook will send the POST request when the event occurs.
             */
            url?: string;
            /**
             * The The [event(s)](#section-events) that will trigger the webhook to fire. that will trigger the webhook to fire.
             */
            events?: Array<string>;
            /**
             * The [source(s)](#section-sources) causing an event to occur.
             */
            sources?: Array<string>;
            /**
             * The id of a list associated with an event (required for some events).
             */
            listid?: number;
        };
    }): CancelablePromise<{
        webhook?: {
            cdate?: string;
            listid?: string;
            name?: string;
            url?: string;
            events?: Array<string>;
            sources?: Array<string>;
            links?: any[];
            id?: string;
        };
    }>;
    /**
     * Delete a webhook
     * Delete an existing webhook
     * @param id The webhook id
     * @returns any 200
     * @throws ApiError
     */
    deleteWebhook(id: number): CancelablePromise<any>;
    /**
     * List all connections
     * List all existing connection resources.
     * @param filtersService Filter by the external service name.
     * @param filtersExternalid Filter by the external id associated with a connection.
     * @returns any 200
     * @throws ApiError
     */
    listAllConnections(filtersService?: string, filtersExternalid?: string): CancelablePromise<{
        connections?: Array<{
            service?: string;
            externalid?: string;
            name?: string;
            isInternal?: string;
            status?: string;
            syncStatus?: string;
            lastSync?: string;
            logoUrl?: string;
            linkUrl?: string;
            cdate?: string;
            udate?: string;
            links?: {
                customers?: string;
            };
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Create a connection
     * Create a new connection resource.
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createConnection(requestBody?: {
        connection?: {
            /**
             * The name of the service.
             */
            service: string;
            /**
             * The id of the account in the external service.
             */
            externalid: string;
            /**
             * The name associated with the account in the external service. Often this will be a company name (e.g., 'My Toystore, Inc.').
             */
            name: string;
            /**
             * The URL to a logo image for the external service.
             */
            logoUrl: string;
            /**
             * The URL to a page where the integration with the external service can be managed in the third-party's website.
             */
            linkUrl: string;
        };
    }): CancelablePromise<{
        connection?: {
            isInternal?: number;
            service?: string;
            externalid?: string;
            name?: string;
            logoUrl?: string;
            linkUrl?: string;
            cdate?: string;
            udate?: string;
            links?: {
                customers?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Retrieve a branding
     * Retrieve an existing branding resource
     * @param id
     * @returns any 200
     * @throws ApiError
     */
    getBranding(id?: number): CancelablePromise<{
        branding?: {
            groupid?: string;
            siteName?: string;
            siteLogo?: string;
            siteLogoSmall?: string;
            headerTextValue?: string;
            headerHtmlValue?: string;
            footerTextValue?: string;
            footerHtmlValue?: string;
            copyright?: string;
            version?: string;
            license?: string;
            links?: string;
            help?: string;
            adminTemplateHtm?: string;
            adminTemplateCss?: string;
            publicTemplateHtm?: string;
            publicTemplateCss?: string;
            favicon?: any;
            id?: string;
        };
    }>;
    /**
     * Update a branding
     * Update an existing branding resource
     * @param id Branding ID
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateBranding(id?: number, requestBody?: {
        branding?: {
            /**
             * The group ID. This value will always be 3.
             */
            groupid?: number;
            /**
             * Title of software. Example: 'ActiveCampaign Email Marketing'
             */
            siteName?: string;
            siteLogo?: string;
            /**
             * URL of small logo. Small logos appear in the header of the admin panel.
             */
            siteLogoSmall?: string;
            /**
             * Content of non-removable header. Example: text header content
             */
            headerTextValue?: string;
            /**
             * Content of non-removable header. Example: <p>header content here</p>
             */
            headerHtmlValue?: string;
            /**
             * Content of non-removeable footer. Example: text footer content
             */
            footerTextValue?: string;
            /**
             * Content of non-removeable footer. Example: <p>footer content here</p>
             */
            footerHtmlValue?: string;
            /**
             * unknown
             */
            copyright?: boolean;
            /**
             * unknown
             */
            version?: boolean;
            /**
             * unknown
             */
            license?: boolean;
            /**
             * External links. To enable (which is the default) exclude this parameter entirely. To disable (remove our branding), just pass this parameter with any value.
             */
            links?: boolean;
            help?: string;
            /**
             * The actual HTML template (ONLY AVAILABLE FOR CERTAIN PLANS)
             */
            adminTemplateHtm?: string;
            /**
             * The actual CSS. Example: test color: green; (ONLY AVAILABLE FOR CERTAIN PLANS)
             */
            adminTemplateCss?: string;
            /**
             * The actual HTML template (ONLY AVAILABLE FOR CERTAIN PLANS)
             */
            publicTemplateHtm?: string;
            /**
             * The actual CSS. Example: test color: green; (ONLY AVAILABLE FOR CERTAIN PLANS)
             */
            publicTemplateCss?: string;
            /**
             * URL of the favicon.
             */
            favicon?: string;
        };
    }): CancelablePromise<{
        branding?: {
            groupid?: string;
            siteName?: string;
            siteLogo?: string;
            siteLogoSmall?: string;
            headerTextValue?: string;
            headerHtmlValue?: string;
            footerTextValue?: string;
            footerHtmlValue?: string;
            copyright?: string;
            version?: string;
            license?: string;
            links?: string;
            help?: string;
            adminTemplateHtm?: string;
            adminTemplateCss?: string;
            publicTemplateHtm?: string;
            publicTemplateCss?: string;
            favicon?: any;
            id?: string;
        };
    }>;
    /**
     * List all brandings
     * List all existing branding resources
     * @param apiKey ActiveCampaign API key
     * @returns any 200
     * @throws ApiError
     */
    brandings(apiKey?: string): CancelablePromise<{
        brandings?: Array<{
            groupid?: string;
            siteName?: string;
            siteLogo?: string;
            siteLogoSmall?: string;
            headerTextValue?: string;
            headerHtmlValue?: string;
            footerTextValue?: string;
            footerHtmlValue?: string;
            copyright?: string;
            version?: string;
            license?: string;
            links?: string;
            help?: string;
            adminTemplateHtm?: string;
            adminTemplateCss?: string;
            publicTemplateHtm?: string;
            publicTemplateCss?: string;
            favicon?: any;
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * List all users
     * List all existing users
     * @returns any 200
     * @throws ApiError
     */
    listAllUsers(): CancelablePromise<{
        users?: Array<{
            username?: string;
            firstName?: string;
            lastName?: string;
            email?: string;
            phone?: string;
            signature?: any;
            links?: {
                lists?: string;
                userGroup?: string;
                dealGroupTotals?: string;
                dealGroupUsers?: string;
                configs?: string;
            };
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Create a user
     * Create a new user
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createUser(requestBody?: {
        user?: {
            /**
             * Username
             */
            username?: string;
            /**
             * Email address
             */
            email?: string;
            /**
             * First name
             */
            firstName?: string;
            /**
             * Last name
             */
            lastName?: string;
            /**
             * Group ID
             */
            group?: number;
            /**
             * Plain text password
             */
            password?: string;
        };
    }): CancelablePromise<{
        user?: {
            username?: string;
            email?: string;
            firstName?: string;
            lastName?: string;
            lang?: string;
            localZoneid?: string;
            cdate?: string;
            udate?: string;
            links?: {
                lists?: string;
                userGroup?: string;
                dealGroupTotals?: string;
                dealGroupUsers?: string;
                configs?: string;
                dealConnection?: string;
                userConversationsPermission?: string;
                seatUser?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Delete a user
     * Delete an existing user
     * @param id ID of the user you wish to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteUser(id: number): CancelablePromise<any>;
    /**
     * Update a user
     * Update an existing user
     * @param id ID of the user
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateUser(id: number, requestBody?: {
        user?: {
            /**
             * Username. Username cannot be changed!
             */
            username?: string;
            /**
             * Password. Example: 'newpassword'
             */
            password?: string;
            /**
             * Email address of the user. Example: 'test@example.com'
             */
            email?: string;
            /**
             * First name of the user. Example: 'FirstName'
             */
            firstName?: string;
            /**
             * Last name of the user. Example: 'LastName'
             */
            lastName?: string;
            /**
             * Assign to Groups
             */
            group?: number;
        };
    }): CancelablePromise<{
        userGroups?: Array<{
            userid?: string;
            groupid?: string;
            links?: {
                group?: string;
                user?: string;
            };
            id?: string;
            group?: string;
            user?: string;
        }>;
        user?: {
            username?: string;
            firstName?: string;
            lastName?: string;
            email?: string;
            phone?: string;
            signature?: string;
            userGroup?: string;
            links?: {
                lists?: string;
                userGroup?: string;
                dealGroupTotals?: string;
                dealGroupUsers?: string;
                configs?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Retrieve a user
     * Retrieve an existing user
     * @param id ID of the user you want to view
     * @returns any 200
     * @throws ApiError
     */
    getUser(id: number): CancelablePromise<{
        user?: {
            username?: string;
            firstName?: string;
            lastName?: string;
            email?: string;
            phone?: string;
            signature?: any;
            links?: {
                lists?: string;
                userGroup?: string;
                dealGroupTotals?: string;
                dealGroupUsers?: string;
                configs?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Retrieve a user by email
     * Retrieve an existing user by looking up their email address
     * @param email Email address of the user you want to view
     * @returns any 200
     * @throws ApiError
     */
    getUserEmail(email: string): CancelablePromise<{
        user?: {
            username?: string;
            firstName?: string;
            lastName?: string;
            email?: string;
            phone?: string;
            signature?: any;
            links?: {
                lists?: string;
                userGroup?: string;
                dealGroupTotals?: string;
                dealGroupUsers?: string;
                configs?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Retrieve a user by username
     * Retrieve an existing user by looking up their username
     * @param username Username of the user you want to view
     * @returns any 200
     * @throws ApiError
     */
    getUserUsername(username: string): CancelablePromise<{
        user?: {
            username?: string;
            firstName?: string;
            lastName?: string;
            email?: string;
            phone?: string;
            signature?: any;
            links?: {
                lists?: string;
                userGroup?: string;
                dealGroupTotals?: string;
                dealGroupUsers?: string;
                configs?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Retrieve logged-in user
     * Retrieve the logged-in user
     * @returns any 200
     * @throws ApiError
     */
    getUserLoggedin(): CancelablePromise<{
        user?: {
            username?: string;
            firstName?: string;
            lastName?: string;
            email?: string;
            phone?: string;
            signature?: any;
            links?: {
                lists?: string;
                userGroup?: string;
                dealGroupTotals?: string;
                dealGroupUsers?: string;
                configs?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Delete a task
     * Delete an existing task
     * @param id The task id
     * @returns any 200
     * @throws ApiError
     */
    deleteTask(id: number): CancelablePromise<any>;
    /**
     * Retrieve a task
     * Retrieve an existing task
     * @param id The ID of the task
     * @returns any 201
     * @throws ApiError
     */
    getTask(id: number): CancelablePromise<{
        dealTask?: {
            relid?: string;
            reltype?: string;
            dealTasktype?: string;
            user?: string;
            assignee?: string;
            automation?: any;
            cdate?: string;
            duedate?: string;
            edate?: string;
            duration?: string;
            status?: string;
            title?: string;
            note?: string;
            donedate?: any;
            doneAutomation?: any;
            udate?: string;
            owner?: {
                type?: string;
                id?: string;
            };
            id?: string;
            outcomeId?: number;
            outcomeInfo?: string;
            links?: {
                activities?: string;
                automation?: string;
                dealTasktype?: string;
                doneAutomation?: string;
                notes?: string;
                owner?: string;
                taskNotifications?: string;
                user?: string;
                assignee?: string;
            };
        };
    }>;
    /**
     * Update a task
     * Update an existing task
     * @param id The ID of the task
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    updateTask(id: number, requestBody?: {
        dealTask?: {
            /**
             * The title to be assigned to the task
             */
            title?: string;
            /**
             * The name of the relating object. Valid values are `contact` or `deal`. (see relationships table)
             */
            ownerType?: string;
            /**
             * The id of the relational object for this task
             */
            relid?: number;
            /**
             * Task status means complete or incomplete. 1 is complete and 0 is incomplete.
             */
            status?: number;
            /**
             * The content describing the task
             */
            note?: string;
            /**
             * Due date of the task
             */
            duedate?: string;
            /**
             * The type of the task based on the available Task Types in the account
             */
            dealTasktype?: number;
            /**
             * The id of an user the task will be assigned to
             */
            assignee?: number;
            /**
             * Task outcome's id is required at the time of task being completed.
             */
            outcomeId?: number;
            /**
             * More information about task completion with the outcome selection.
             */
            outcomeInfo?: string;
        };
    }): CancelablePromise<any>;
    /**
     * Create a task
     * Create a new task
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createTask(requestBody?: {
        dealTask?: {
            /**
             * The title to be assigned to the task
             */
            title?: string;
            /**
             * The name of the relating object. Valid values are `contact` or `deal`. (see relationships table)
             */
            ownerType?: string;
            /**
             * The id of the relational object for this task
             */
            relid: number;
            /**
             * Task status means complete or incomplete. 1 is complete and 0 is incomplete.
             */
            status?: number;
            /**
             * The content describing the task
             */
            note?: string;
            /**
             * Due date of the task
             */
            duedate: string;
            /**
             * The type of the task based on the available Task Types in the account
             */
            dealTasktype: number;
            /**
             * The id of an user the task will be assigned to
             */
            assignee?: number;
            /**
             * Id of an automation that will be triggered when the task is created.
             */
            triggerAutomationOnCreate?: number;
            /**
             * Id of an automation that will be triggered when the task is completed.
             */
            doneAutomation?: number;
        };
    }): CancelablePromise<any>;
    /**
     * List all tasks
     * Retrieve a list of existing tasks
     * @param filtersTitle The title to be assigned to the task
     * @param filtersReltype The name of the relating object (see relationships table)
     * @param filtersRelid The id of the relational object for this task
     * @param filtersStatus Task status means complete or incomplete. 1 is complete and 0 is incomplete.
     * @param filtersNote The content describing the task
     * @param filtersDuedate Due date of the task
     * @param filtersDTasktypeid The type of the task based on the available Task Types in the account
     * @param filtersUserid User ID this task belongs to
     * @param filtersDueAfter Filter deal tasks that are due after a specific date
     * @param fitlersDueBefore Filter deal tasks that are due before a specific date
     * @param filtersDuedateRange Filter deal tasks that are due between specific date range
     * @param filtersAssigneeUserid The id of the user a task is assigned to
     * @param filtersOutcomeId The id of a task outcome that the task belongs to.
     * @returns any 201
     * @throws ApiError
     */
    listAllTasks(filtersTitle?: string, filtersReltype?: string, filtersRelid?: number, filtersStatus?: number, filtersNote?: string, filtersDuedate?: string, filtersDTasktypeid?: number, filtersUserid?: number, filtersDueAfter?: string, fitlersDueBefore?: string, filtersDuedateRange?: string, filtersAssigneeUserid?: number, filtersOutcomeId?: number): CancelablePromise<{
        dealTasks?: Array<{
            id?: string;
            duedate?: string;
            edate?: string;
            status?: number;
            title?: any;
            note?: string;
            relid?: string;
            reltype?: string;
            dealTasktype?: string;
            cdate?: string;
            udate?: string;
            automation?: any;
            doneAutomation?: any;
            user?: string;
            assignee?: string;
            owner?: {
                type?: string;
                id?: string;
            };
            outcomeId?: any;
            outcomeInfo?: any;
            links?: {
                activities?: string;
                automation?: string;
                dealTasktype?: string;
                doneAutomation?: string;
                notes?: string;
                owner?: string;
                taskNotifications?: string;
                user?: string;
                assignee?: string;
            };
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Retrieve a deal
     * Retrieve an existing deal
     * @param id The Deal's id
     * @returns any 200
     * @throws ApiError
     */
    retrieveADeal(id: number): CancelablePromise<{
        deal?: {
            id?: string;
            isDisabled?: boolean;
            title?: string;
        };
    }>;
    /**
     * Delete a deal
     * Delete an existing deal
     * @param id The Deal's id
     * @returns any 200
     * @throws ApiError
     */
    deleteADeal(id: number): CancelablePromise<any>;
    /**
     * Update a deal
     * Update an existing deal
     * @param id The Deal's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateADealNew(id: number, requestBody?: {
        /**
         * deal.description
         */
        deal?: {
            /**
             * Deal's title.
             */
            title?: string;
            /**
             * Deal's description
             */
            description?: string;
            /**
             * Deal's account id
             */
            account?: string;
            /**
             * Deal's primary contact id.
             */
            contact?: string;
            /**
             * Deal's value in cents. (i.e. $456.78 => 45678). Must be greater than or equal to zero.
             */
            value?: number;
            /**
             * Deal's currency in 3-digit ISO format, lowercased.
             */
            currency?: string;
            /**
             * Deal's pipeline id. Deal's stage or `deal.stage` should belong to `deal.group`.
             */
            group?: string;
            /**
             * Deal's stage id. `deal.stage` should belong to Deal's pipeline or `deal.group`.
             */
            stage?: string;
            /**
             * Deal's owner id.
             */
            owner?: string;
            /**
             * Deal's percentage.
             */
            percent?: number;
            /**
             * Deal's status (0="open", 1="won", or 2="lost")
             */
            status?: number;
            /**
             * Deal's custom field values `{customFieldId: string, fieldValue: string, fieldCurrency?:string}[]`
             */
            fields?: Array<{
                /**
                 * Field ID, ID of the Custom Field Meta Data
                 */
                customFieldId: number;
                /**
                 * Updated field value. For `currency` field, this needs to be in cents not dollars (or 100 x Base Unit).
                 */
                fieldValue: string;
                /**
                 * Required only for the `currency` field type. The three letter currency code for the currency value
                 */
                fieldCurrency?: string;
            }>;
        };
    }): CancelablePromise<any>;
    /**
     * List all deals
     * Retrieve all existing deals
     * @param filtersSearch Search text to use with `search_field` parameter.
     * @param filtersSearchField Field to search for. See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values).
     * @param filtersTitle Filter by deal's title
     * @param filtersStage Filter by deal's stage
     * @param filtersGroup Filter by deal's pipeline
     * @param filtersStatus Filter by deal's status.  See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values)
     * @param filtersOwner Filter by deal's owner
     * @param filtersNextdateRange Filter by deal's tasks due dates. See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values)
     * @param filtersTag Filter by tag names associated with deal's primary contact. See [available values](https://developers.activecampaign.com/reference/deal#deals-parameters-available-values).
     * @param filtersTasktype Filter by deals that have tasks with given type
     * @param filtersCreatedBefore Returns deals that are created less than given date
     * @param filtersCreatedAfter Returns deals that are created greater than or equal to given date
     * @param filtersUpdatedBefore Returns deals that are updated less than given date
     * @param filtersUpdatedAfter Returns deals that are updated greater than or equal to given date
     * @param filtersOrganization Filter by deal's primary contact's organization's id
     * @param filtersMinimumValue In USD with dollar portion. Returns deals whose values are greater than or equal to given value
     * @param filtersMaximumValue In USD with dollar portion. Returns deals whose values are less than or equal to given value
     * @param filtersScoreGreaterThan In a format of `<score_id>:<score_value>`. Returns deals whose score value is greater than given value
     * @param filtersScoreLessThan In a format of `<score_id>:<score_value>`. Returns deals whose score value is less than given value
     * @param filtersScore In a format of `<score_id>:<score_value>`. Returns deals whose score value is equal to given value
     * @param ordersTitle Order by deal's title.
     * @param ordersValue Order by deal's value.
     * @param ordersCdate Order by deal's created date.
     * @param ordersContactName Order by deal's primary contact's first name.
     * @param ordersContactOrgname Order by deal's primary contact's organization name.
     * @param ordersNextAction Order by deal's next task's due date first. Then append deals with no next task. Lastly append deals with overdue tasks. If dates are the same, order by deal's id.
     * @returns any 200
     * @throws ApiError
     */
    listAllDeals(filtersSearch?: string, filtersSearchField?: string, filtersTitle?: string, filtersStage?: number, filtersGroup?: number, filtersStatus?: number, filtersOwner?: number, filtersNextdateRange?: string, filtersTag?: string, filtersTasktype?: string, filtersCreatedBefore?: string, filtersCreatedAfter?: string, filtersUpdatedBefore?: string, filtersUpdatedAfter?: string, filtersOrganization?: number, filtersMinimumValue?: number, filtersMaximumValue?: number, filtersScoreGreaterThan?: string, filtersScoreLessThan?: string, filtersScore?: string, ordersTitle?: string, ordersValue?: string, ordersCdate?: string, ordersContactName?: string, ordersContactOrgname?: string, ordersNextAction?: string): CancelablePromise<{
        deals?: Array<{
            owner?: string;
            contact?: string;
            organization?: string;
            group?: string;
            stage?: string;
            title?: string;
            description?: string;
            percent?: string;
            cdate?: string;
            mdate?: string;
            nextdate?: any;
            nexttaskid?: any;
            value?: string;
            currency?: string;
            winProbability?: number;
            winProbabilityMdate?: string;
            status?: string;
            activitycount?: string;
            nextdealid?: string;
            edate?: string;
            links?: {
                dealActivities?: string;
                contact?: string;
                contactDeals?: string;
                group?: string;
                nextTask?: string;
                notes?: string;
                account?: string;
                customerAccount?: string;
                organization?: string;
                owner?: string;
                scoreValues?: string;
                stage?: string;
                tasks?: string;
                dealCustomFieldData?: string;
            };
            id?: string;
            isDisabled?: boolean;
            account?: string;
            customerAccount?: string;
        }>;
        meta?: {
            currencies?: {
                USD?: {
                    currency?: string;
                    total?: string;
                    value?: string;
                };
            };
            total?: number;
        };
    }>;
    /**
     * Create a deal
     * Create a new deal
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createADealNew(requestBody?: {
        /**
         * deal.description
         */
        deal?: {
            /**
             * Deal's title.
             */
            title: string;
            /**
             * Deal's description
             */
            description?: string;
            /**
             * Deal’s account id
             */
            account?: string;
            /**
             * Deal's primary contact's id.
             */
            contact?: string;
            /**
             * Deal's value in cents. (i.e. $456.78 => 45678). Must be greater than or equal to zero.
             */
            value: number;
            /**
             * Deal's currency in 3-digit ISO format, lowercased.
             */
            currency: string;
            /**
             * Deal's pipeline id. Required if `deal.stage` is not provided. If `deal.group` is not provided, the stage's pipeline will be assigned to the deal automatically.
             */
            group: string;
            /**
             * Deal's stage id. Required if `deal.group` is not provided. If `deal.stage` is not provided, the deal will be assigned with the first stage in the pipeline provided in `deal.group`.
             */
            stage: string;
            /**
             * Deal's owner id. Required if pipeline's auto-assign option is disabled.
             */
            owner: string;
            /**
             * Deal's percentage.
             */
            percent?: number;
            /**
             * Deal's status. See [available values](#section-deals-parameters-available-values).
             */
            status?: number;
            /**
             * Deal's custom field values `{customFieldId: string, fieldValue: string, fieldCurrency?:string}[]`
             */
            fields?: Array<{
                /**
                 * Field ID, ID of the Custom Field Meta Data
                 */
                customFieldId: number;
                /**
                 * Updated field value. For `currency` field, this needs to be in cents not dollars (or 100 x Base Unit).
                 */
                fieldValue: string;
                /**
                 * Required only for the `currency` field type. The three letter currency code for the currency value
                 */
                fieldCurrency?: string;
            }>;
        };
    }): CancelablePromise<any>;
    /**
     * List all stages
     * Retrieve all existing stages
     * @param filtersTitle Filter by deal stages' titles. Any stages whose titles partial-match the filter value are returned
     * @param filtersDGroupid Filter by pipeline's id
     * @param ordersTitle Order by deal stage's title
     * @returns any 200
     * @throws ApiError
     */
    listAllDealStages(filtersTitle?: string, filtersDGroupid?: string, ordersTitle?: string): CancelablePromise<{
        dealStages?: Array<{
            cardRegion1?: string;
            cardRegion2?: string;
            cardRegion3?: string;
            cardRegion4?: string;
            cardRegion5?: string;
            cdate?: string;
            color?: string;
            dealOrder?: string;
            group?: string;
            id?: string;
            links?: {
                group?: string;
            };
            order?: string;
            title?: string;
            udate?: string;
            width?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Create a stage
     * Create a new stage for a pipeline
     * @param reorder Whether to reorder stages within the pipeline after creating a new deal stage. Can be one of `0` and `1`. If set to `1`, new order values will be assigned to all stages within the same pipeline. If deal stages with the same order exists, the stage with the highest `id` will be assigned with the lowest `order`
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createADealStage(reorder?: number, requestBody?: {
        dealStage?: {
            /**
             * Deal stage's title
             */
            title: string;
            /**
             * Deal stage's pipeline id
             */
            group: string;
            /**
             * Order of the deal stage. If more than one deal stage share the same order value, the order of those deal stages may not be always the same. If `dealStage.order` is not provided, the order is assigned with `(the highest order of deal stages within the same pipeline) + 1`
             */
            order?: number;
            /**
             * Option and direction to be used to sort deals in the deal stage. The option and direction should be delimited by a space. Direction can be either "ASC" or "DESC". See [available options](#section-deal-stage-parameters-available-values)
             */
            dealOrder?: string;
            /**
             * What to show in upper-left corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)
             */
            cardRegion1?: string;
            /**
             * What to show in upper-right corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)
             */
            cardRegion2?: string;
            /**
             * Whether to show the avatar in Deal Cards. Can be one of `show-avatar` and `hide-avatar`. If set to `show-avatar`, deal cards will show the avatars. If set to `hide-avatar`, deal cards will hide the avatars
             */
            cardRegion3?: string;
            /**
             * What to show next to the avatar in Deal Cards. See [available values](#section-deal-stage-parameters-available-values)
             */
            cardRegion4?: string;
            /**
             * What to show in lower-right corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)
             */
            cardRegion5?: string;
            /**
             * Deal Stage's color. 6-character HEX color code without the hashtag. e.g. "434343" to assign the hex color value "#434343"
             */
            color?: string;
            /**
             * Deal stage's width in pixels, without `px` unit
             */
            width?: number;
        };
    }): CancelablePromise<{
        dealStage?: {
            cardRegion1?: string;
            cardRegion2?: string;
            cardRegion3?: string;
            cardRegion4?: string;
            cardRegion5?: string;
            cdate?: string;
            color?: string;
            dealOrder?: string;
            group?: string;
            id?: string;
            links?: {
                group?: string;
            };
            order?: number;
            title?: string;
            udate?: string;
            width?: number;
        };
    }>;
    /**
     * Delete a pipeline
     * Delete an existing pipeline
     * @param id Pipeline's id
     * @returns any 200
     * @throws ApiError
     */
    deleteAPipeline(id: number): CancelablePromise<any>;
    /**
     * Retrieve a pipeline
     * Retrieve an existing pipeline
     * @param id Pipeline's id
     * @returns any 200
     * @throws ApiError
     */
    retrieveAPipeline(id: string): CancelablePromise<{
        dealGroup?: {
            allgroups?: string;
            allusers?: string;
            autoassign?: string;
            cdate?: string;
            currency?: string;
            id?: string;
            links?: {
                dealGroupGroups?: string;
                dealGroupUsers?: string;
                stages?: string;
            };
            stages?: Array<string>;
            title?: string;
            udate?: string;
        };
        dealStages?: Array<{
            cardRegion1?: string;
            cardRegion2?: string;
            cardRegion3?: string;
            cardRegion4?: string;
            cardRegion5?: string;
            cdate?: any;
            color?: string;
            dealOrder?: string;
            group?: string;
            id?: string;
            links?: {
                group?: string;
            };
            order?: string;
            title?: string;
            udate?: any;
            width?: string;
        }>;
    }>;
    /**
     * Update a pipeline
     * Update an existing pipeline
     * @param id Pipeline's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAPipeline(id: number, requestBody?: {
        dealGroup?: {
            /**
             * Pipeline's title
             */
            title?: string;
            /**
             * Default currency to assign to new deals that belong to this deal group.
             */
            currency?: string;
            /**
             * Whether all user groups have permission to manage this pipeline. Can be either `1` or `0`. If `1`, all user groups can manage this pipeline. If `0`, only user groups in `dealGroup.groups` parameter can manage this pipeline.
             */
            allgroups?: number;
            /**
             * Whether new deals get auto-assigned to all users. Can be either `1` or `0`. If `1`, new deals are auto-assigned to all users unless auto-assign is disabled. If `0`, new deals are auto-assigned to only the users in `dealGroup.users` parameter.
             */
            allusers?: number;
            /**
             * Deal auto-assign option. Can be one of `0`, `1`, and `2`. If `0`, auto-assign is disabled. If `1`, Round Robin method is used to auto-assign new deals. If `2`, deals are distributed based on deal values.
             */
            autoassign?: number;
            /**
             * List of user ids to auto-assign new deals to unless auto-assign option is disabled.
             */
            users?: Array<string>;
            /**
             * List of user group ids to allow managing this pipeline.
             */
            groups?: Array<string>;
        };
    }): CancelablePromise<{
        dealGroup?: {
            allgroups?: number;
            allusers?: number;
            autoassign?: number;
            cdate?: string;
            currency?: string;
            dealGroupGroups?: any[];
            dealGroupUsers?: Array<string>;
            id?: string;
            links?: {
                dealGroupGroups?: string;
                dealGroupUsers?: string;
                stages?: string;
            };
            title?: string;
            udate?: string;
        };
        dealGroupGroups?: any[];
        dealGroupUsers?: Array<{
            cdate?: any;
            dealGroup?: string;
            id?: string;
            links?: {
                dealGroup?: string;
                user?: string;
            };
            user?: string;
        }>;
    }>;
    /**
     * Create a pipeline
     * Create a new pipeline
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createAPipeline(requestBody?: {
        dealGroup?: {
            /**
             * Pipeline's title.
             */
            title: string;
            /**
             * Default currency to assign to new deals that belong to this deal group.
             */
            currency: string;
            /**
             * Whether all user groups have permission to manage this pipeline. Can be either `1` or `0`. If `1`, all user groups can manage this pipeline. If `0`, only user groups in `dealGroup.groups` parameter can manage this pipeline.
             */
            allgroups?: number;
            /**
             * Whether new deals get auto-assigned to all users. Can be either `1` or `0`. If `1`, new deals are auto-assigned to all users unless auto-assign is disabled. If `0`, new deals are auto-assigned to only the users in `dealGroup.users` parameter.
             */
            allusers?: number;
            /**
             * Deal auto-assign option. Can be one of `0`, `1`, and `2`. If `0`, auto-assign is disabled. If `1`, Round Robin method is used to auto-assign new deals. If `2`, deals are distributed based on deal values.
             */
            autoassign?: number;
            /**
             * List of user ids to auto-assign new deals to unless auto-assign option is disabled.
             */
            users?: Array<string>;
            /**
             * List of user group ids to allow managing this pipeline.
             */
            groups?: Array<string>;
        };
    }): CancelablePromise<{
        dealGroup?: {
            allgroups?: number;
            allusers?: number;
            autoassign?: number;
            cdate?: string;
            currency?: string;
            dealGroupGroups?: any[];
            dealGroupUsers?: Array<string>;
            id?: string;
            links?: {
                dealGroupGroups?: string;
                dealGroupUsers?: string;
                stages?: string;
            };
            stages?: Array<string>;
            title?: string;
            udate?: string;
        };
        dealGroupGroups?: any[];
        dealGroupUsers?: Array<{
            cdate?: any;
            dealGroup?: string;
            id?: string;
            links?: {
                dealGroup?: string;
                user?: string;
            };
            user?: string;
        }>;
        dealStages?: Array<{
            cardRegion1?: string;
            cardRegion2?: string;
            cardRegion3?: string;
            cardRegion4?: string;
            cardRegion5?: string;
            cdate?: any;
            color?: string;
            dealOrder?: string;
            group?: string;
            id?: string;
            links?: {
                group?: string;
            };
            order?: string;
            title?: string;
            udate?: any;
            width?: string;
        }>;
    }>;
    /**
     * List all pipelines
     * Retrieve all existing pipelines
     * @param filtersTitle Filter by pipeline's title. The filter matches any pipeline titles that contain the provided title (i.e. "Contact" matches all of "In Contact", "To Contact", and "Contact Pipeline").
     * @param filtersHaveStages Filter by whether pipelines have deal stages. Can be either `1` or `0`. If `1`, only pipelines with at least one stage will be returned.
     * @param ordersTitle Order by Pipeline's title
     * @param ordersPopular Order by number of deals each pipeline has. If pipelines have same number of deals, pipelines' created dates are used to determine the order.
     * @returns any 200
     * @throws ApiError
     */
    listAllPipelines(filtersTitle?: string, filtersHaveStages?: number, ordersTitle?: string, ordersPopular?: string): CancelablePromise<{
        dealGroups?: Array<{
            allgroups?: string;
            allusers?: string;
            autoassign?: string;
            cdate?: string;
            currency?: string;
            id?: string;
            links?: {
                dealGroupGroups?: string;
                dealGroupUsers?: string;
                stages?: string;
            };
            stages?: Array<string>;
            title?: string;
            udate?: string;
        }>;
        dealStages?: Array<{
            cardRegion1?: string;
            cardRegion2?: string;
            cardRegion3?: string;
            cardRegion4?: string;
            cardRegion5?: string;
            cdate?: string;
            color?: string;
            dealOrder?: string;
            group?: string;
            id?: string;
            links?: {
                group?: string;
            };
            order?: string;
            title?: string;
            udate?: string;
            width?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Delete a stage
     * Delete an existing stage
     * @param id Deal stage's id
     * @returns any 200
     * @throws ApiError
     */
    deleteADealStage(id: number): CancelablePromise<any>;
    /**
     * Retrieve a stage
     * Retrieve an existing stage
     * @param id Deal stage's id
     * @returns any 200
     * @throws ApiError
     */
    retrieveADealStage(id: number): CancelablePromise<{
        dealStage?: {
            cardRegion1?: string;
            cardRegion2?: string;
            cardRegion3?: string;
            cardRegion4?: string;
            cardRegion5?: string;
            cdate?: string;
            color?: string;
            dealOrder?: string;
            group?: string;
            id?: string;
            links?: {
                group?: string;
            };
            order?: string;
            title?: string;
            udate?: string;
            width?: string;
        };
    }>;
    /**
     * Update a stage
     * Update an existing stage
     * @param id Deal stage's id
     * @param reorder Whether to reorder stages within the pipeline after creating a new deal stage. Can be one of `0` and `1`. If set to `1`, new order values will be assigned to all stages within the same pipeline. If deal stages with the same order exists, the stage with the highest `id` will be assigned with the lowest `order`
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateADealStage(id: number, reorder?: number, requestBody?: {
        dealStage?: {
            /**
             * Deal stage's title
             */
            title?: string;
            /**
             * Deal stage's pipeline id
             */
            group?: string;
            /**
             * Order of the deal stage. If more than one deal stage share the same order value, the order of those deal stages may not be always the same
             */
            order?: number;
            /**
             * Option and direction to be used to sort deals in the deal stage. The option and direction should be delimited by a space. Direction can be either "ASC" or "DESC". See [available options](#section-deal-stage-parameters-available-values)
             */
            dealOrder?: string;
            /**
             * What to show in upper-left corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)
             */
            cardRegion1?: string;
            /**
             * What to show in upper-right corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)
             */
            cardRegion2?: string;
            /**
             * Whether to show the avatar in Deal Cards. Can be one of `show-avatar` and `hide-avatar`. If set to `show-avatar`, deal cards will show the avatars. If set to `hide-avatar`, deal cards will hide the avatars
             */
            cardRegion3?: string;
            /**
             * What to show next to the avatar in Deal Cards. See [available values](#section-deal-stage-parameters-available-values)
             */
            cardRegion4?: string;
            /**
             * What to show in lower-right corner of Deal Cards. See [available values](#section-deal-stage-parameters-available-values)
             */
            cardRegion5?: string;
            /**
             * Deal Stage's color. 6-character HEX color code without the hashtag. e.g. "434343" to assign the hex color value "#434343"
             */
            color?: string;
            /**
             * Deal stage's width in pixels, without `px` unit
             */
            width?: number;
        };
    }): CancelablePromise<{
        dealStage?: {
            cardRegion1?: string;
            cardRegion2?: string;
            cardRegion3?: string;
            cardRegion4?: string;
            cardRegion5?: string;
            cdate?: string;
            color?: string;
            dealOrder?: string;
            group?: string;
            id?: string;
            links?: {
                group?: string;
            };
            order?: number;
            title?: string;
            udate?: string;
            width?: number;
        };
    }>;
    /**
     * List all task types
     * Retrieve all existing task types
     * @returns any 200
     * @throws ApiError
     */
    listAllDealTaskTypes(): CancelablePromise<{
        dealTasktypes?: Array<{
            cdate?: any;
            defduration?: string;
            id?: string;
            links?: any[];
            status?: string;
            title?: string;
            udate?: any;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Create a task type
     * Create a new task type
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createADealTaskType(requestBody?: {
        dealTasktype?: {
            /**
             * Deal task type's title. The title should be unique among deal task types.
             */
            title: string;
            /**
             * 0 - Active status, 1 - Disabled status
             */
            status?: '0' | '1';
        };
    }): CancelablePromise<{
        dealTasktype?: {
            cdate?: string;
            defduration?: string;
            id?: string;
            links?: any[];
            status?: string;
            title?: string;
            udate?: string;
        };
    }>;
    /**
     * Retrieve a task type
     * Retrieve an existing task type
     * @param id Deal task type's id
     * @returns any 200
     * @throws ApiError
     */
    retrieveADealTaskType(id: number): CancelablePromise<{
        dealTasktype?: {
            cdate?: string;
            defduration?: string;
            id?: string;
            links?: any[];
            status?: string;
            title?: string;
            udate?: string;
        };
    }>;
    /**
     * Update a task type
     * Update an existing task type
     * @param id Deal task type's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateADealTaskType(id: number, requestBody?: {
        dealTasktype?: {
            /**
             * Deal task type's title. The title should be unique among deal task types.
             */
            title?: string;
            /**
             * 0 - Active status, 1 - Disabled status
             */
            status?: '0' | '1';
        };
    }): CancelablePromise<{
        dealTasktype?: {
            cdate?: string;
            defduration?: string;
            id?: string;
            links?: any[];
            status?: string;
            title?: string;
            udate?: string;
        };
    }>;
    /**
     * Delete a task type
     * Delete an existing task type
     * @param id Deal task type's id
     * @returns any 200
     * @throws ApiError
     */
    deleteADealTaskType(id: number): CancelablePromise<any>;
    /**
     * List all events (names only)
     * List the names of tracked events
     * @returns any 200
     * @throws ApiError
     */
    listAllEventTypes(): CancelablePromise<any>;
    /**
     * Create a new event (name only)
     * Create a new event tracking event (name only)
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createANewEventNameOnly(requestBody?: {
        eventTrackingEvent?: {
            /**
             * The name of the event
             */
            name: string;
        };
    }): CancelablePromise<{
        eventTrackingEvent?: {
            name?: string;
        };
    }>;
    /**
     * Retrieve Event Tracking Status
     * Get event tracking status (enabled or disabled)
     * @returns any 200
     * @throws ApiError
     */
    retrieveEventTrackingStatus(): CancelablePromise<any>;
    /**
     * Enable/disable
     * Enable or disable event tracking
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    enableDisableEventTracking(requestBody?: {
        eventTracking?: {
            /**
             * Whether event tracking should be enabled
             */
            enabled: boolean;
        };
    }): CancelablePromise<any>;
    /**
     * List, search, and filter contacts
     * Use this API endpoint to list all contacts, search contacts, or filter contacts by many criteria. For example, search for specific contacts by email, list, account.
     * @param ids Filter contacts by ID. Can be repeated for multiple IDs. Example: ids[]=1&ids[]=2&ids[]=42
     * @param email Email address of the contact you want to get
     * @param emailLike Filter contacts that contain the given value in the email address
     * @param exclude Exclude from the response the contact with the given ID
     * @param formid Filter contacts associated with the given form
     * @param idGreater Only include contacts with an ID greater than the given ID
     * @param idLess Only include contacts with an ID less than the given ID
     * @param listid Filter contacts associated with the given list
     * @param organization (Deprecated) Please use Account-Contact end points. Filter contacts associated with the given organization ID
     * @param search Filter contacts that match the given value in the contact names, organization, phone or email
     * @param segmentid Return only contacts that match a list segment (this param initially returns segment information, when it is run a second time it will return contacts that match the segment)
     * @param seriesid Filter contacts associated with the given automation
     * @param status See [available values](#section-contact-parameters-available-values)
     * @param tagid Filter contacts associated with the given tag
     * @param filtersCreatedBefore Filter contacts that were created prior to this date
     * @param filtersCreatedAfter Filter contacts that were created after this date
     * @param filtersUpdatedBefore Filter contacts that were updated before this date
     * @param filtersUpdatedAfter Filter contacts that were updated after this date
     * @param waitid Filter by contacts in the wait queue of an automation block
     * @param ordersCdate Order contacts by creation date
     * @param ordersEmail Order contacts by email
     * @param ordersFirstName Order contacts by first name
     * @param ordersLastName Order contacts by last name
     * @param ordersName Order contacts by full name
     * @param ordersScore Order contacts by score
     * @param inGroupLists Set this to "true" in order to return only contacts that the current user has permissions to see.
     * @returns any 200
     * @throws ApiError
     */
    listAllContacts(ids?: string, email?: string, emailLike?: string, exclude?: number, formid?: number, idGreater?: number, idLess?: number, listid?: string, organization?: number, search?: string, segmentid?: number, seriesid?: number, status?: number, tagid?: number, filtersCreatedBefore?: string, filtersCreatedAfter?: string, filtersUpdatedBefore?: string, filtersUpdatedAfter?: string, waitid?: number, ordersCdate?: string, ordersEmail?: string, ordersFirstName?: string, ordersLastName?: string, ordersName?: string, ordersScore?: string, inGroupLists?: string): CancelablePromise<{
        contacts?: Array<{
            cdate?: string;
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
            orgid?: string;
            segmentio_id?: string;
            bounced_hard?: string;
            bounced_soft?: string;
            bounced_date?: string;
            ip?: string;
            ua?: string;
            hash?: string;
            socialdata_lastcheck?: string;
            email_local?: string;
            email_domain?: string;
            sentcnt?: string;
            rating_tstamp?: string;
            gravatar?: string;
            deleted?: string;
            adate?: string;
            udate?: string;
            edate?: string;
            scoreValues?: any[];
            links?: {
                bounceLogs?: string;
                contactAutomations?: string;
                contactData?: string;
                contactGoals?: string;
                contactLists?: string;
                contactLogs?: string;
                contactTags?: string;
                contactDeals?: string;
                deals?: string;
                fieldValues?: string;
                geoIps?: string;
                notes?: string;
                organization?: string;
                plusAppend?: string;
                trackingLogs?: string;
                scoreValues?: string;
            };
            id?: string;
            organization?: any;
        }>;
        meta?: {
            total?: string;
            page_input?: {
                segmentid?: any;
                formid?: number;
                listid?: number;
                tagid?: number;
                limit?: number;
                offset?: number;
                search?: any;
                sort?: any;
                seriesid?: number;
                waitid?: number;
                status?: number;
                forceQuery?: number;
                cacheid?: string;
            };
        };
    } | {
        scoreValues?: any[];
        contacts?: Array<{
            cdate?: string;
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
            orgid?: string;
            segmentio_id?: string;
            bounced_hard?: string;
            bounced_soft?: string;
            bounced_date?: string;
            ip?: string;
            ua?: string;
            hash?: string;
            socialdata_lastcheck?: string;
            email_local?: string;
            email_domain?: string;
            sentcnt?: string;
            rating_tstamp?: string;
            gravatar?: string;
            deleted?: string;
            anonymized?: string;
            udate?: string;
            deleted_at?: string;
            scoreValues?: any[];
            links?: {
                bounceLogs?: string;
                contactAutomations?: string;
                contactData?: string;
                contactGoals?: string;
                contactLists?: string;
                contactLogs?: string;
                contactTags?: string;
                contactDeals?: string;
                deals?: string;
                fieldValues?: string;
                geoIps?: string;
                notes?: string;
                organization?: string;
                plusAppend?: string;
                trackingLogs?: string;
                scoreValues?: string;
            };
            id?: string;
            organization?: any;
        }>;
        meta?: {
            total?: string;
            page_input?: {
                segmentid?: number;
                formid?: number;
                listid?: number;
                tagid?: number;
                limit?: number;
                offset?: number;
                search?: any;
                sort?: any;
                seriesid?: number;
                waitid?: number;
                status?: number;
                forceQuery?: number;
                cacheid?: string;
            };
        };
    }>;
    /**
     * Create a contact
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createANewContact(requestBody?: {
        contact?: {
            /**
             * Email address of the new contact. Example: 'test@example.com'
             */
            email: string;
            /**
             * First name of the new contact.
             */
            firstName?: string;
            /**
             * Last name of the new contact.
             */
            lastName?: string;
            /**
             * Phone number of the contact.
             */
            phone?: string;
            /**
             * Contact's custom field values [{field id, value}]
             */
            fieldValues?: any[];
            /**
             * (Deprecated) Please use Account-Contact end points
             */
            orgid?: number;
        };
    }): CancelablePromise<{
        fieldValues?: Array<{
            contact?: string;
            field?: string;
            value?: string;
            cdate?: string;
            udate?: string;
            links?: {
                owner?: string;
                field?: string;
            };
            id?: string;
            owner?: string;
        }>;
        contact?: {
            email?: string;
            cdate?: string;
            udate?: string;
            orgid?: string;
            links?: {
                bounceLogs?: string;
                contactAutomations?: string;
                contactData?: string;
                contactGoals?: string;
                contactLists?: string;
                contactLogs?: string;
                contactTags?: string;
                contactDeals?: string;
                deals?: string;
                fieldValues?: string;
                geoIps?: string;
                notes?: string;
                organization?: string;
                plusAppend?: string;
                trackingLogs?: string;
                scoreValues?: string;
            };
            id?: string;
            organization?: string;
        };
    }>;
    /**
     * Delete event (name only)
     * Remove an existing event tracking event (name only)
     * @param name Name of event to delete. Spaces in names are allowed, but must be encoded (for example, "my%20event").
     * @returns any 200
     * @throws ApiError
     */
    removeEventNameOnly(name: string): CancelablePromise<any>;
    /**
     * Retrieve status
     * Get site tracking status (enabled or disabled)
     * @returns any 200
     * @throws ApiError
     */
    retrieveSiteTrackingStatus(): CancelablePromise<{
        siteTracking?: {
            enabled?: boolean;
        };
    }>;
    /**
     * Enable/disable
     * Enable or disable site tracking
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    enableDisableSiteTracking(requestBody?: {
        siteTracking?: {
            /**
             * Whether site tracking should be enabled
             */
            enabled: boolean;
        };
    }): CancelablePromise<{
        siteTracking?: {
            enabled?: boolean;
        };
    }>;
    /**
     * List all whitelisted domains
     * List of all whitelisted site tracking domains
     * @returns any 200
     * @throws ApiError
     */
    listAllWhitelistedDomains(): CancelablePromise<{
        siteTrackingDomains?: Array<{
            name?: string;
        }>;
        meta?: {
            total?: number;
        };
    }>;
    /**
     * Add domain to whitelist
     * Add a domain to the site tracking whitelist
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    addDomainToWhitelist(requestBody?: {
        siteTrackingDomain?: {
            /**
             * The domain name to add to the whitelist.
             */
            name: string;
        };
    }): CancelablePromise<{
        siteTrackingDomain?: {
            name?: string;
        };
    }>;
    /**
     * Remove domain from whitelist
     * Remove a domain from the site tracking whitelist
     * @param name The domain name to remove from the whitelist
     * @returns void
     * @throws ApiError
     */
    removeDomainFromWhitelist(name: string): CancelablePromise<void>;
    /**
     * Move deals to another stage
     * Move all deals in one stage to another stage
     * @param id Deal stage's id whose deals are to be moved to another deal stage
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    moveDealsToAnotherDealStage(id: number, requestBody?: {
        deal?: {
            /**
             * Target deal stage's id to move deals to
             */
            stage?: string;
        };
    }): CancelablePromise<{
        deals?: Array<{
            activitycount?: string;
            cdate?: string;
            contact?: string;
            currency?: string;
            edate?: string;
            group?: string;
            hash?: string;
            id?: string;
            links?: {
                dealActivities?: string;
                contact?: string;
                contactDeals?: string;
                group?: string;
                nextTask?: string;
                notes?: string;
                organization?: string;
                owner?: string;
                scoreValues?: string;
                stage?: string;
                tasks?: string;
            };
            mdate?: string;
            nextTask?: any;
            nextdealid?: string;
            nexttaskid?: string;
            organization?: any;
            owner?: string;
            percent?: string;
            stage?: string;
            status?: string;
            title?: string;
            value?: string;
        }>;
    }>;
    /**
     * Update a deal note
     * Update an existing note for a deal
     * @param id Deal's id to assign new note to
     * @param noteId Deal note's id to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateADealNote(id: string, noteId: string, requestBody?: {
        note?: {
            /**
             * Deal note's content
             */
            note: string;
        };
    }): CancelablePromise<{
        deals?: Array<{
            activitycount?: string;
            cdate?: string;
            contact?: string;
            currency?: string;
            edate?: string;
            group?: string;
            hash?: string;
            id?: string;
            links?: {
                dealActivities?: string;
                contact?: string;
                contactDeals?: string;
                group?: string;
                nextTask?: string;
                notes?: string;
                organization?: string;
                owner?: string;
                scoreValues?: string;
                stage?: string;
                tasks?: string;
            };
            mdate?: string;
            nextTask?: string;
            nextdate?: string;
            nextdealid?: string;
            nexttaskid?: string;
            organization?: any;
            owner?: string;
            percent?: string;
            stage?: string;
            status?: string;
            title?: string;
            value?: string;
        }>;
        note?: {
            cdate?: string;
            id?: string;
            links?: {
                activities?: string;
                mentions?: string;
                notes?: string;
                owner?: string;
                user?: string;
            };
            mdate?: string;
            note?: string;
            owner?: {
                id?: string;
                type?: string;
            };
            relid?: string;
            reltype?: string;
            user?: string;
            userid?: string;
        };
    }>;
    /**
     * Create a deal note
     * Create a new note for a deal
     * @param id The Deal's id to assign new note to
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createADealNote(id: string, requestBody?: {
        note?: {
            /**
             * The Deal note's content
             */
            note: string;
        };
    }): CancelablePromise<{
        deals?: Array<{
            activitycount?: string;
            cdate?: string;
            contact?: string;
            currency?: string;
            edate?: any;
            group?: string;
            hash?: string;
            id?: string;
            links?: {
                dealActivities?: string;
                contact?: string;
                contactDeals?: string;
                group?: string;
                nextTask?: string;
                notes?: string;
                organization?: string;
                owner?: string;
                scoreValues?: string;
                stage?: string;
                tasks?: string;
            };
            mdate?: string;
            nextdate?: any;
            nextdealid?: string;
            nexttaskid?: any;
            organization?: any;
            owner?: string;
            percent?: string;
            stage?: string;
            status?: string;
            title?: string;
            value?: string;
        }>;
        note?: {
            cdate?: string;
            id?: string;
            links?: {
                activities?: string;
                mentions?: string;
                notes?: string;
                owner?: string;
                user?: string;
            };
            mdate?: string;
            note?: string;
            owner?: {
                id?: string;
                type?: string;
            };
            relid?: string;
            reltype?: string;
            user?: string;
            userid?: string;
        };
    }>;
    /**
     * Move tasks to another task type
     * Move tasks to a different task type
     * @param id Deal task type's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    moveDealTasksToAnotherDealTaskType(id: number, requestBody?: {
        dealTask?: {
            /**
             * Deal task type's id to move deal tasks to
             */
            dealTasktype?: string;
        };
    }): CancelablePromise<{
        dealTasks?: Array<{
            automation?: any;
            cdate?: string;
            dealTasktype?: string;
            doneAutomation?: any;
            donedate?: any;
            duedate?: string;
            duration?: string;
            edate?: string;
            id?: string;
            links?: {
                activities?: string;
                automation?: string;
                dealTasktype?: string;
                doneAutomation?: string;
                notes?: string;
                owner?: string;
                taskNotifications?: string;
                user?: string;
            };
            note?: string;
            owner?: {
                id?: string;
                type?: string;
            };
            relid?: string;
            reltype?: string;
            status?: string;
            title?: string;
            udate?: string;
            user?: string;
        }>;
        deals?: Array<{
            activitycount?: string;
            cdate?: string;
            contact?: string;
            currency?: string;
            edate?: string;
            group?: string;
            hash?: string;
            id?: string;
            links?: {
                activities?: string;
                contact?: string;
                contactDeals?: string;
                group?: string;
                nextTask?: string;
                notes?: string;
                organization?: string;
                owner?: string;
                scoreValues?: string;
                stage?: string;
                tasks?: string;
            };
            mdate?: string;
            nextTask?: string;
            nextdate?: string;
            nextdealid?: string;
            nexttaskid?: string;
            organization?: any;
            owner?: string;
            percent?: string;
            stage?: string;
            status?: string;
            title?: string;
            value?: string;
        }>;
    }>;
    /**
     * Add a tag to contact
     * Create a contact tag object
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createContactTag(requestBody?: {
        contactTag?: {
            /**
             * The id of the Contact
             */
            contact?: number;
            /**
             * The id of the tag
             */
            tag?: number;
        };
    }): CancelablePromise<{
        contactTag?: {
            cdate?: string;
            contact?: string;
            id?: string;
            links?: {
                contact?: string;
                tag?: string;
            };
            tag?: string;
        };
    }>;
    /**
     * Remove a tag from a contact
     * Delete a contact tag object
     * @param id The contactTag id
     * @returns any 200
     * @throws ApiError
     */
    removeAContactsTag(id: number): CancelablePromise<any>;
    /**
     * Retrieve a contact
     * Retrieve an existing contact
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    getContact(id: number): CancelablePromise<{
        contactAutomations?: Array<{
            contact?: string;
            seriesid?: string;
            startid?: string;
            status?: string;
            adddate?: string;
            remdate?: any;
            timespan?: any;
            lastblock?: string;
            lastdate?: string;
            completedElements?: string;
            totalElements?: string;
            completed?: number;
            completeValue?: number;
            links?: {
                automation?: string;
                contact?: string;
                contactGoals?: string;
            };
            id?: string;
            automation?: string;
        }>;
        contactLists?: Array<{
            contact?: string;
            list?: string;
            form?: any;
            seriesid?: string;
            sdate?: any;
            udate?: any;
            status?: string;
            responder?: string;
            sync?: string;
            unsubreason?: any;
            campaign?: any;
            message?: any;
            first_name?: string;
            last_name?: string;
            ip4Sub?: string;
            sourceid?: string;
            autosyncLog?: any;
            ip4_last?: string;
            ip4Unsub?: string;
            unsubscribeAutomation?: any;
            links?: {
                automation?: string;
                list?: string;
                contact?: string;
                form?: string;
                autosyncLog?: string;
                campaign?: string;
                unsubscribeAutomation?: string;
                message?: string;
            };
            id?: string;
            automation?: any;
        }>;
        deals?: Array<{
            owner?: string;
            contact?: string;
            organization?: any;
            group?: any;
            title?: string;
            nexttaskid?: string;
            currency?: string;
            status?: string;
            links?: {
                activities?: string;
                contact?: string;
                contactDeals?: string;
                group?: string;
                nextTask?: string;
                notes?: string;
                organization?: string;
                owner?: string;
                scoreValues?: string;
                stage?: string;
                tasks?: string;
            };
            id?: string;
            nextTask?: any;
        }>;
        fieldValues?: Array<{
            contact?: string;
            field?: string;
            value?: any;
            cdate?: string;
            udate?: string;
            links?: {
                owner?: string;
                field?: string;
            };
            id?: string;
            owner?: string;
        }>;
        geoAddresses?: Array<{
            ip4?: string;
            country2?: string;
            country?: string;
            state?: string;
            city?: string;
            zip?: string;
            area?: string;
            lat?: string;
            lon?: string;
            tz?: string;
            tstamp?: string;
            links?: any[];
            id?: string;
        }>;
        geoIps?: Array<{
            contact?: string;
            campaignid?: string;
            messageid?: string;
            geoaddrid?: string;
            ip4?: string;
            tstamp?: string;
            geoAddress?: string;
            links?: {
                geoAddress?: string;
            };
            id?: string;
        }>;
        contact?: {
            cdate?: string;
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
            orgid?: string;
            segmentio_id?: string;
            bounced_hard?: string;
            bounced_soft?: string;
            bounced_date?: any;
            ip?: string;
            ua?: any;
            hash?: string;
            socialdata_lastcheck?: any;
            email_local?: string;
            email_domain?: string;
            sentcnt?: string;
            rating_tstamp?: any;
            gravatar?: string;
            deleted?: string;
            adate?: any;
            udate?: any;
            edate?: any;
            contactAutomations?: Array<string>;
            contactLists?: Array<string>;
            fieldValues?: Array<string>;
            geoIps?: Array<string>;
            deals?: Array<string>;
            accountContacts?: Array<string>;
            links?: {
                bounceLogs?: string;
                contactAutomations?: string;
                contactData?: string;
                contactGoals?: string;
                contactLists?: string;
                contactLogs?: string;
                contactTags?: string;
                contactDeals?: string;
                deals?: string;
                fieldValues?: string;
                geoIps?: string;
                notes?: string;
                organization?: string;
                plusAppend?: string;
                trackingLogs?: string;
                scoreValues?: string;
            };
            id?: string;
            organization?: any;
        };
    }>;
    /**
     * Delete a contact
     * Delete an existing contact
     * @param id The contact id
     * @returns any 200
     * @throws ApiError
     */
    deleteContact(id: number): CancelablePromise<any>;
    /**
     * Update a contact
     * @param id ID of the contact to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAContactNew(id: number, requestBody?: {
        contact?: {
            /**
             * Contact's email address
             */
            email?: string;
            /**
             * Contact's first name
             */
            firstName?: string;
            /**
             * Contact's last name
             */
            lastName?: string;
            /**
             * Contact's phone number
             */
            phone?: string;
            /**
             * Contact's custom field values [{field, value}]
             */
            fieldValues?: any[];
            /**
             * (Deprecated) Please use the the Delete endpoint
             */
            deleted?: boolean;
            /**
             * (Deprecated) Please use Account-Contact end points
             */
            orgid?: number;
        };
    }): CancelablePromise<{
        fieldValues?: Array<{
            contact?: string;
            field?: string;
            value?: string;
            cdate?: string;
            udate?: string;
            links?: {
                owner?: string;
                field?: string;
            };
            id?: string;
            owner?: string;
        }>;
        contact?: {
            cdate?: string;
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
            orgid?: string;
            segmentio_id?: string;
            bounced_hard?: string;
            bounced_soft?: string;
            bounced_date?: any;
            ip?: string;
            ua?: any;
            hash?: string;
            socialdata_lastcheck?: any;
            email_local?: string;
            email_domain?: string;
            sentcnt?: string;
            rating_tstamp?: any;
            gravatar?: string;
            deleted?: string;
            anonymized?: string;
            adate?: any;
            udate?: string;
            edate?: any;
            deleted_at?: any;
            created_utc_timestamp?: string;
            updated_utc_timestamp?: string;
            links?: {
                bounceLogs?: string;
                contactAutomations?: string;
                contactData?: string;
                contactGoals?: string;
                contactLists?: string;
                contactLogs?: string;
                contactTags?: string;
                contactDeals?: string;
                deals?: string;
                fieldValues?: string;
                geoIps?: string;
                notes?: string;
                organization?: string;
                plusAppend?: string;
                trackingLogs?: string;
                scoreValues?: string;
            };
            id?: string;
            organization?: any;
        };
    }>;
    /**
     * Retrieve site tracking code
     * Get site tracking code
     * @returns any 200
     * @throws ApiError
     */
    retrieveSiteTrackingCode(): CancelablePromise<any>;
    /**
     * List all email activities
     * @param filtersSubscriberid Set this parameter to return only email activities belonging to a given subscriber.
     * @param filtersDealId Set this parameter to return only email activities belonging to a given deal.
     * @returns any 200
     * @throws ApiError
     */
    listAllEmailActivities(filtersSubscriberid?: number, filtersDealId?: number): CancelablePromise<any>;
    /**
     * Create an address
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createAnAddress(requestBody?: {
        address?: {
            groupid?: number;
            global?: any;
            company_name: string;
            address_1: string;
            address_2?: string;
            city?: string;
            state?: string;
            zip?: string;
            /**
             * (Optional for countries that use it)
             */
            district?: string;
            /**
             * Accepts a (2) two character string - country code (eg 'US', 'CA', 'MX')
             */
            country: string;
            allgroup?: number;
            /**
             * Indicates default address
             */
            is_default?: boolean;
        };
    }): CancelablePromise<{
        address?: {
            companyName?: string;
            address1?: string;
            country?: number;
            links?: {
                addressGroup?: string;
                addressList?: string;
                forms?: string;
            };
            id?: string;
        };
    }>;
    /**
     * List all addresses
     * @returns any 200
     * @throws ApiError
     */
    listAllAddresses(): CancelablePromise<{
        addresses?: Array<{
            companyName?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            district?: string;
            zip?: string;
            country?: string;
            allgroup?: string;
            isDefault?: string;
            links?: {
                addressGroup?: string;
                addressList?: string;
                forms?: string;
            };
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Delete an address
     * @param id ID of the Address to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAnAddress(id: number): CancelablePromise<any>;
    /**
     * Retrieve an address
     * @param id ID of the Address to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveAnAddress(id: number): CancelablePromise<{
        address?: {
            companyName?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            district?: string;
            zip?: string;
            country?: string;
            allgroup?: string;
            isDefault?: string;
            links?: {
                addressGroup?: string;
                addressList?: string;
                forms?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Delete address associated with a specific user group
     * @param id ID of the AddressGroup to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAnAddressgroup(id: number): CancelablePromise<any>;
    /**
     * Delete address associated with a specific list
     * @param id ID of the AddressList to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAnAddresslist(id: number): CancelablePromise<any>;
    /**
     * Add a contact to an automation
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createNewContactautomation(requestBody?: {
        contactAutomation?: {
            /**
             * Contact ID of the Contact, to be linked to the contactAutomation
             */
            contact: number;
            /**
             * Automation ID of the automation, to be linked to the contactAutomation
             */
            automation: number;
        };
    }): CancelablePromise<{
        contacts?: Array<{
            cdate?: string;
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
            orgid?: string;
            segmentio_id?: string;
            bounced_hard?: string;
            bounced_soft?: string;
            bounced_date?: any;
            ip?: string;
            ua?: any;
            hash?: string;
            socialdata_lastcheck?: any;
            email_local?: string;
            email_domain?: string;
            sentcnt?: string;
            rating_tstamp?: any;
            gravatar?: string;
            deleted?: string;
            anonymized?: string;
            adate?: any;
            udate?: any;
            edate?: any;
            deleted_at?: any;
            created_utc_timestamp?: string;
            updated_utc_timestamp?: string;
            links?: {
                bounceLogs?: string;
                contactAutomations?: string;
                contactData?: string;
                contactGoals?: string;
                contactLists?: string;
                contactLogs?: string;
                contactTags?: string;
                contactDeals?: string;
                deals?: string;
                fieldValues?: string;
                geoIps?: string;
                notes?: string;
                organization?: string;
                plusAppend?: string;
                trackingLogs?: string;
                scoreValues?: string;
            };
            id?: string;
            organization?: any;
        }>;
        contactAutomation?: {
            contact?: string;
            seriesid?: string;
            startid?: number;
            status?: number;
            lastblock?: string;
            completedElements?: string;
            totalElements?: string;
            completed?: number;
            completeValue?: number;
            links?: {
                automation?: string;
                contact?: string;
                contactGoals?: string;
            };
            id?: string;
            automation?: string;
        };
    }>;
    /**
     * List all automations a contact is in
     * @returns any 200
     * @throws ApiError
     */
    listAllContactAutomations(): CancelablePromise<{
        contactAutomations?: Array<{
            contact?: string;
            seriesid?: string;
            startid?: string;
            status?: string;
            batchid?: any;
            adddate?: string;
            remdate?: string;
            timespan?: string;
            lastblock?: string;
            lastlogid?: string;
            lastdate?: string;
            completedElements?: string;
            totalElements?: string;
            completed?: number;
            completeValue?: number;
            links?: {
                automation?: string;
                contact?: string;
                contactGoals?: string;
            };
            id?: string;
            automation?: string;
        }>;
        meta?: {
            total?: string;
            showcase_stats?: any[];
        };
    }>;
    /**
     * Remove a contact from an automation
     * @param id ID of the contactAutomation to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAContactautomation(id: number): CancelablePromise<any>;
    /**
     * Retrieve an automation a contact is in
     * @param id ID of the contactAutomation to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveAContactautomation(id: number): CancelablePromise<{
        contactAutomation?: {
            contact?: string;
            seriesid?: string;
            startid?: string;
            status?: string;
            batchid?: any;
            adddate?: string;
            remdate?: string;
            timespan?: string;
            lastblock?: string;
            lastlogid?: string;
            lastdate?: string;
            completedElements?: string;
            totalElements?: string;
            completed?: number;
            completeValue?: number;
            links?: {
                automation?: string;
                contact?: string;
                contactGoals?: string;
            };
            id?: string;
            automation?: string;
        };
    }>;
    /**
     * List all automations
     * @returns any 200
     * @throws ApiError
     */
    listAllAutomations(): CancelablePromise<{
        automations?: Array<{
            name?: string;
            cdate?: string;
            mdate?: string;
            userid?: string;
            status?: string;
            entered?: string;
            exited?: string;
            hidden?: string;
            defaultscreenshot?: string;
            screenshot?: string;
            links?: {
                campaigns?: string;
                contactGoals?: string;
                contactAutomations?: string;
                blocks?: string;
                goals?: string;
                sms?: string;
                sitemessages?: string;
            };
            id?: string;
        }>;
        meta?: {
            total?: string;
            starts?: Array<{
                id?: string;
                series?: string;
                type?: string;
            }>;
            filtered?: boolean;
            smsLogs?: any[];
        };
    }>;
    /**
     * List all campaigns
     * @param ordersSdate Order campaigns by send date
     * @param ordersLdate Order campaigns by last send date
     * @param filtersAutomation Filter to return automation campaigns
     * @returns any 200
     * @throws ApiError
     */
    listAllCampaigns(ordersSdate?: string, ordersLdate?: string, filtersAutomation?: string): CancelablePromise<{
        campaigns?: Array<{
            type?: string;
            userid?: string;
            segmentid?: string;
            bounceid?: string;
            realcid?: string;
            sendid?: string;
            threadid?: string;
            seriesid?: string;
            formid?: string;
            basetemplateid?: string;
            basemessageid?: string;
            addressid?: string;
            source?: string;
            name?: string;
            cdate?: string;
            mdate?: string;
            sdate?: any;
            ldate?: any;
            send_amt?: string;
            total_amt?: string;
            opens?: string;
            uniqueopens?: string;
            linkclicks?: string;
            uniquelinkclicks?: string;
            subscriberclicks?: string;
            forwards?: string;
            uniqueforwards?: string;
            hardbounces?: string;
            softbounces?: string;
            unsubscribes?: string;
            unsubreasons?: string;
            updates?: string;
            socialshares?: string;
            replies?: string;
            uniquereplies?: string;
            status?: string;
            public?: string;
            mail_transfer?: string;
            mail_send?: string;
            mail_cleanup?: string;
            mailer_log_file?: string;
            tracklinks?: string;
            tracklinksanalytics?: string;
            trackreads?: string;
            trackreadsanalytics?: string;
            analytics_campaign_name?: string;
            tweet?: string;
            facebook?: string;
            survey?: string;
            embed_images?: string;
            htmlunsub?: string;
            textunsub?: string;
            htmlunsubdata?: any;
            textunsubdata?: any;
            recurring?: string;
            willrecur?: string;
            split_type?: string;
            split_content?: string;
            split_offset?: string;
            split_offset_type?: string;
            split_winner_messageid?: string;
            split_winner_awaiting?: string;
            responder_offset?: string;
            responder_type?: string;
            responder_existing?: string;
            reminder_field?: string;
            reminder_format?: any;
            reminder_type?: string;
            reminder_offset?: string;
            reminder_offset_type?: string;
            reminder_offset_sign?: string;
            reminder_last_cron_run?: any;
            activerss_interval?: string;
            activerss_url?: any;
            activerss_items?: string;
            ip4?: string;
            laststep?: string;
            managetext?: string;
            schedule?: string;
            scheduleddate?: any;
            waitpreview?: string;
            deletestamp?: any;
            replysys?: string;
            links?: {
                user?: string;
                automation?: string;
                campaignMessage?: string;
                campaignMessages?: string;
                links?: string;
                campaignLists?: string;
            };
            id?: string;
            user?: string;
            automation?: any;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Retrieve links associated to campaign
     * @param id ID of campaign to retrieve Links for
     * @returns any 200
     * @throws ApiError
     */
    retrieveLinksAssociatedCampaign(id: number): CancelablePromise<{
        links?: Array<{
            campaignid?: string;
            messageid?: string;
            link?: string;
            name?: string;
            ref?: string;
            tracked?: string;
            links?: {
                campaign?: string;
                message?: string;
            };
            id?: string;
            campaign?: string;
            message?: string;
        }>;
    }>;
    /**
     * List all automations the contact is in
     * @param id ID of the contact to receive automations for
     * @returns any 200
     * @throws ApiError
     */
    listAllContactautomationsForContact(id: number): CancelablePromise<{
        contactAutomations?: Array<{
            contact?: string;
            seriesid?: string;
            startid?: string;
            status?: string;
            batchid?: string;
            adddate?: string;
            remdate?: string;
            timespan?: string;
            lastblock?: string;
            lastlogid?: string;
            lastdate?: string;
            in_als?: string;
            completedElements?: number;
            totalElements?: number;
            completed?: number;
            completeValue?: number;
            links?: {
                automation?: string;
                contact?: string;
                contactGoals?: string;
                automationLogs?: string;
            };
            id?: string;
            automation?: string;
        }>;
    }>;
    /**
     * Delete a note
     * @param id ID of the note to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteNote(id: string): CancelablePromise<any>;
    /**
     * Update a note
     * @param id ID of the note to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateANote(id: string, requestBody?: {
        note?: {
            note: string;
            /**
             * Possible Values: Activity, Deal, DealTask, Subscriber, CustomerAccount
             */
            reltype: string;
            relid: string;
        };
    }): CancelablePromise<{
        note?: {
            relid?: string;
            reltype?: string;
            userid?: string;
            cdate?: string;
            mdate?: string;
            note?: string;
            links?: {
                activities?: string;
                user?: string;
                mentions?: string;
                notes?: string;
                owner?: string;
            };
            id?: string;
            user?: string;
            owner?: {
                type?: string;
                id?: string;
            };
        };
    }>;
    /**
     * Retrieve a note
     * @param id ID of the note to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveANote(id: string): CancelablePromise<{
        note?: {
            relid?: string;
            reltype?: string;
            userid?: string;
            cdate?: string;
            mdate?: string;
            note?: string;
            links?: {
                activities?: string;
                user?: string;
                mentions?: string;
                notes?: string;
                owner?: string;
            };
            id?: string;
            user?: string;
            owner?: {
                type?: string;
                id?: string;
            };
        };
    }>;
    /**
     * Create a note
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createANote(requestBody?: {
        note?: {
            note: string;
            /**
             * Possible Values: Activity, Deal, DealTask, Subscriber, CustomerAccount
             */
            reltype: string;
            relid: number;
        };
    }): CancelablePromise<{
        contacts?: Array<{
            cdate?: string;
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
            orgid?: string;
            segmentio_id?: string;
            bounced_hard?: string;
            bounced_soft?: string;
            bounced_date?: any;
            ip?: string;
            ua?: any;
            hash?: string;
            socialdata_lastcheck?: any;
            email_local?: string;
            email_domain?: string;
            sentcnt?: string;
            rating_tstamp?: any;
            gravatar?: string;
            deleted?: string;
            anonymized?: string;
            adate?: any;
            udate?: string;
            edate?: any;
            deleted_at?: any;
            created_utc_timestamp?: string;
            updated_utc_timestamp?: string;
            links?: {
                bounceLogs?: string;
                contactAutomations?: string;
                contactData?: string;
                contactGoals?: string;
                contactLists?: string;
                contactLogs?: string;
                contactTags?: string;
                contactDeals?: string;
                deals?: string;
                fieldValues?: string;
                geoIps?: string;
                notes?: string;
                organization?: string;
                plusAppend?: string;
                trackingLogs?: string;
                scoreValues?: string;
            };
            id?: string;
            organization?: any;
        }>;
        note?: {
            note?: string;
            cdate?: string;
            mdate?: string;
            reltype?: string;
            relid?: number;
            userid?: string;
            links?: {
                activities?: string;
                user?: string;
                mentions?: string;
                notes?: string;
                owner?: string;
            };
            owner?: {
                type?: string;
                id?: number;
            };
            id?: string;
            user?: string;
        };
    }>;
    /**
     * Update an address
     * @param id ID of the Address being changed
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAnAddress(id: string, requestBody?: {
        address?: {
            groupid?: number;
            global?: any;
            company_name: string;
            address_1: string;
            address_2?: string;
            city?: string;
            state?: string;
            zip?: string;
            /**
             * (Optional for countries that use it)
             */
            district?: string;
            /**
             * Accepts a (2) two character string - country code (eg 'US', 'CA', 'MX')
             */
            country: string;
            allgroup?: number;
            /**
             * Indicates default address
             */
            is_default?: boolean;
        };
    }): CancelablePromise<{
        address?: {
            companyName?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            district?: string;
            zip?: string;
            country?: string;
            allgroup?: string;
            isDefault?: string;
            links?: {
                addressGroup?: string;
                addressList?: string;
                forms?: string;
            };
            id?: string;
        };
    }>;
    /**
     * List all forms
     * @returns any 200
     * @throws ApiError
     */
    forms1(): CancelablePromise<{
        forms?: Array<{
            name?: string;
            action?: string;
            actiondata?: {
                actions?: Array<{
                    type?: string;
                    email?: string;
                    list?: string;
                }>;
            };
            submit?: string;
            submitdata?: {
                url?: string;
            };
            url?: string;
            layout?: string;
            title?: string;
            body?: string;
            button?: string;
            thanks?: string;
            style?: {
                background?: string;
                dark?: boolean;
                fontcolor?: string;
                layout?: string;
                border?: {
                    width?: number;
                    style?: string;
                    color?: string;
                    radius?: number;
                };
                width?: number;
                ac_branding?: boolean;
                button?: {
                    padding?: number;
                    background?: string;
                    fontcolor?: string;
                    border?: {
                        radius?: number;
                        color?: string;
                        style?: string;
                        width?: number;
                    };
                };
            };
            options?: {
                blanks_overwrite?: boolean;
                confaction?: string;
                sendoptin?: boolean;
                optin_id?: number;
                optin_created?: boolean;
                confform?: string;
            };
            cfields?: Array<{
                type?: string;
                header?: string;
                class?: string;
            }>;
            parentformid?: string;
            userid?: string;
            addressid?: string;
            cdate?: string;
            udate?: string;
            entries?: string;
            aid?: string;
            defaultscreenshot?: string;
            recent?: any[];
            contacts?: number;
            deals?: number;
            links?: {
                address?: string;
            };
            id?: string;
            address?: any;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Retrieve a form
     * @param id ID of the form to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveForms(id: string): CancelablePromise<{
        form?: {
            name?: string;
            action?: string;
            actiondata?: {
                actions?: Array<{
                    type?: string;
                    email?: string;
                    fromname?: string;
                    fromemail?: string;
                    subject?: string;
                }>;
            };
            submit?: string;
            submitdata?: {
                url?: string;
            };
            url?: string;
            layout?: string;
            title?: string;
            body?: string;
            button?: string;
            thanks?: string;
            style?: {
                background?: string;
                dark?: boolean;
                fontcolor?: string;
                layout?: string;
                border?: {
                    width?: number;
                    style?: string;
                    color?: string;
                    radius?: number;
                };
                width?: number;
                ac_branding?: boolean;
                button?: {
                    padding?: number;
                    background?: string;
                    fontcolor?: string;
                    border?: {
                        radius?: number;
                        color?: string;
                        style?: string;
                        width?: number;
                    };
                };
                customcss?: string;
            };
            options?: {
                blanks_overwrite?: boolean;
                confaction?: string;
            };
            cfields?: Array<{
                type?: string;
                header?: string;
                class?: string;
                required_options?: any;
            }>;
            parentformid?: string;
            userid?: string;
            addressid?: string;
            cdate?: string;
            udate?: string;
            entries?: string;
            aid?: any;
            links?: {
                address?: string;
            };
            id?: string;
            address?: any;
        };
    }>;
    /**
     * Delete a group
     * @param id ID of the group to be deleted
     * @returns any 200
     * @throws ApiError
     */
    deleteAGroup1(id: number): CancelablePromise<any>;
    /**
     * Update a group
     * @param id ID of the group to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAGroup(id: number, requestBody?: {
        group?: {
            title?: string;
            /**
             * Group description
             */
            descript?: string;
            /**
             * Permission for adding messages
             */
            pgMessageAdd?: boolean;
            /**
             * Whether or not to force unsubscribe links
             */
            unsubscribelink?: boolean;
            /**
             * Whether or not to force optin confirm for this group
             */
            optinconfirm?: boolean;
            /**
             * Permission for adding lists
             */
            pgListAdd?: boolean;
            /**
             * Permission for editing lists
             */
            pgListEdit?: boolean;
            /**
             * Permission for deleting lists
             */
            pgListDelete?: boolean;
            /**
             * Permission for managing custom email headers
             */
            pgListHeaders?: boolean;
            /**
             * Permission for managing Unsubscribe By Email
             */
            pgListEmailaccount?: boolean;
            /**
             * Permission for accessing list bounce settings
             */
            pgListBounce?: boolean;
            /**
             * Permission for editing messages
             */
            pgMessageEdit?: boolean;
            /**
             * Permission for deleting messages
             */
            pgMessageDelete?: boolean;
            /**
             * Permission for sending messages
             */
            pgMessageSend?: boolean;
            /**
             * Permission for adding contacts
             */
            pgContactAdd?: boolean;
            /**
             * Permission for editing contacts
             */
            pgContactEdit?: boolean;
            /**
             * Permission for deleting contacts
             */
            pgContactDelete?: boolean;
            /**
             * Permission for merging contacts
             */
            pgContactMerge?: boolean;
            /**
             * Permission for importing contacts
             */
            pgContactImport?: boolean;
            /**
             * Permission for approving contacts
             */
            pgContactApprove?: boolean;
            /**
             * Permission for exporting contacts
             */
            pgContactExport?: boolean;
            /**
             * Permission for syncing contacts
             */
            pgContactSync?: boolean;
            /**
             * Permission for managing contact list segments
             */
            pgContactFilters?: boolean;
            /**
             * Permission for managing contact actions
             */
            pgContactActions?: boolean;
            /**
             * Permission for managing contact custom fields
             */
            pgContactFields?: boolean;
            /**
             * Permission for adding users
             */
            pg_user_add?: boolean;
            /**
             * Permission for editing users
             */
            pg_user_edit?: boolean;
            /**
             * Permission for deleting users
             */
            pg_user_delete?: boolean;
            /**
             * Permission for adding groups
             */
            pgGroupAdd?: boolean;
            /**
             * Permission for editing groups
             */
            pgGroupEdit?: boolean;
            /**
             * Permission for deleting groups
             */
            pgGroupDelete?: boolean;
            /**
             * Permission for adding templates
             */
            pgTemplateAdd?: boolean;
            /**
             * Permission for editing templates
             */
            pgTemplateEdit?: boolean;
            /**
             * Permission for deleting templates
             */
            pgTemplateDelete?: boolean;
            /**
             * Permission for adding personalization tags
             */
            pgPersonalizationAdd?: boolean;
            /**
             * Permission for editing personalization tags
             */
            pgPersonalizationEdit?: boolean;
            /**
             * Permission for deleting personalization tags
             */
            pgPersonalizationDelete?: boolean;
            pgAutomationManage?: boolean;
            /**
             * Permission for editing subscription forms
             */
            pgFormEdit?: boolean;
            /**
             * Permission for viewing campaign reports
             */
            pgReportsCampaign?: boolean;
            /**
             * Permission for viewing list reports
             */
            pgReportsList?: boolean;
            /**
             * Permission for viewing user reports
             */
            pgReportsUser?: boolean;
            /**
             * Campaign ID of last campaign report viewed to decide whether to show link on startup
             */
            pgStartupReports?: boolean;
            /**
             * Permission for viewing trend reports
             */
            pgReportsTrend?: boolean;
            /**
             * Whether or not to show the "getting started" tutorial on overview page
             */
            pgStartupGettingstarted?: boolean;
            /**
             * Permission for viewing deals
             */
            pgDeal?: boolean;
            /**
             * Permission for deleting deals
             */
            pgDealDelete?: boolean;
            /**
             * Permission for reassigning deals
             */
            pgDealReassign?: boolean;
            /**
             * Permission for adding deal groups
             */
            pgDealGroupAdd?: boolean;
            /**
             * Permission for editing deal groups
             */
            pgDealGroupEdit?: boolean;
            /**
             * Permission for deleting deals groups
             */
            pgDealGroupDelete?: boolean;
            /**
             * Permission for managing saved responses
             */
            pgSavedResponsesManage?: boolean;
            /**
             * Whether or not this group requires all campaigns to be approved
             */
            reqApproval?: boolean;
            /**
             * Whether or not this group requires first campaign to be approved
             */
            reqApproval1st?: boolean;
            /**
             * Who to notify for approval related issues (email)
             */
            reqApprovalNotify?: string;
            /**
             * Whether or not to show social links in campaigns sent from this group
             */
            socialdata?: boolean;
        };
    }): CancelablePromise<{
        group?: {
            title?: string;
            p_admin?: number;
            links?: {
                userGroups?: string;
                groupLimit?: string;
                dealGroupGroups?: string;
                listGroups?: string;
                addressGroups?: string;
                automationGroups?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Retrieve a group
     * @param id ID of the group to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveAGroup(id: string): CancelablePromise<{
        group?: {
            title?: string;
            descript?: string;
            unsubscribelink?: string;
            optinconfirm?: string;
            p_admin?: string;
            pgListAdd?: string;
            pgListEdit?: string;
            pgListDelete?: string;
            pgListHeaders?: string;
            pgListEmailaccount?: string;
            pgListBounce?: string;
            pgMessageAdd?: string;
            pgMessageEdit?: string;
            pgMessageDelete?: string;
            pgMessageSend?: string;
            pgContactAdd?: string;
            pgContactEdit?: string;
            pgContactDelete?: string;
            pgContactMerge?: string;
            pgContactImport?: string;
            pgContactApprove?: string;
            pgContactExport?: string;
            pgContactSync?: string;
            pgContactFilters?: string;
            pgContactActions?: string;
            pgContactFields?: string;
            pg_user_add?: string;
            pg_user_edit?: string;
            pg_user_delete?: string;
            pgGroupAdd?: string;
            pgGroupEdit?: string;
            pgGroupDelete?: string;
            pgTemplateAdd?: string;
            pgTemplateEdit?: string;
            pgTemplateDelete?: string;
            pgPersonalizationAdd?: string;
            pgPersonalizationEdit?: string;
            pgPersonalizationDelete?: string;
            pgAutomationManage?: string;
            pgFormEdit?: string;
            pgReportsCampaign?: string;
            pgReportsList?: string;
            pgReportsUser?: string;
            pgReportsTrend?: string;
            pgStartupReports?: string;
            pgStartupGettingstarted?: string;
            pgDeal?: string;
            pgDealDelete?: string;
            pgDealReassign?: string;
            pgDealGroupAdd?: string;
            pgDealGroupEdit?: string;
            pgDealGroupDelete?: string;
            pgSavedResponsesManage?: string;
            sdate?: string;
            reqApproval?: string;
            reqApproval1st?: string;
            reqApprovalNotify?: string;
            socialdata?: string;
            links?: {
                userGroups?: string;
                groupLimit?: string;
                dealGroupGroups?: string;
                listGroups?: string;
                addressGroups?: string;
                automationGroups?: string;
            };
            id?: string;
        };
    }>;
    /**
     * List all groups
     * @returns any 200
     * @throws ApiError
     */
    listAllGroups(): CancelablePromise<{
        groups?: Array<{
            title?: string;
            descript?: string;
            unsubscribelink?: string;
            optinconfirm?: string;
            p_admin?: string;
            pgListAdd?: string;
            pgListEdit?: string;
            pgListDelete?: string;
            pgListHeaders?: string;
            pgListEmailaccount?: string;
            pgListBounce?: string;
            pgMessageAdd?: string;
            pgMessageEdit?: string;
            pgMessageDelete?: string;
            pgMessageSend?: string;
            pgContactAdd?: string;
            pgContactEdit?: string;
            pgContactDelete?: string;
            pgContactMerge?: string;
            pgContactImport?: string;
            pgContactApprove?: string;
            pgContactExport?: string;
            pgContactSync?: string;
            pgContactFilters?: string;
            pgContactActions?: string;
            pgContactFields?: string;
            pg_user_add?: string;
            pg_user_edit?: string;
            pg_user_delete?: string;
            pgGroupAdd?: string;
            pgGroupEdit?: string;
            pgGroupDelete?: string;
            pgTemplateAdd?: string;
            pgTemplateEdit?: string;
            pgTemplateDelete?: string;
            pgPersonalizationAdd?: string;
            pgPersonalizationEdit?: string;
            pgPersonalizationDelete?: string;
            pgAutomationManage?: string;
            pgFormEdit?: string;
            pgReportsCampaign?: string;
            pgReportsList?: string;
            pgReportsUser?: string;
            pgReportsTrend?: string;
            pgStartupReports?: string;
            pgStartupGettingstarted?: string;
            pgDeal?: string;
            pgDealDelete?: string;
            pgDealReassign?: string;
            pgDealGroupAdd?: string;
            pgDealGroupEdit?: string;
            pgDealGroupDelete?: string;
            pgSavedResponsesManage?: string;
            sdate?: string;
            reqApproval?: string;
            reqApproval1st?: string;
            reqApprovalNotify?: string;
            socialdata?: string;
            links?: {
                userGroups?: string;
                groupLimit?: string;
                dealGroupGroups?: string;
                listGroups?: string;
                addressGroups?: string;
                automationGroups?: string;
            };
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Create a group
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createANewGroup(requestBody?: {
        group?: {
            /**
             * Title of the group to be created
             */
            title: string;
            /**
             * Group description
             */
            descript?: string;
            /**
             * Permission for adding messages
             */
            pgMessageAdd?: boolean;
            /**
             * Whether or not to force unsubscribe links
             */
            unsubscribelink?: boolean;
            /**
             * Whether or not to force optin confirm for this group
             */
            optinconfirm?: boolean;
            /**
             * Permission for adding lists
             */
            pgListAdd?: boolean;
            /**
             * Permission for editing lists
             */
            pgListEdit?: boolean;
            /**
             * Permission for deleting lists
             */
            pgListDelete?: boolean;
            /**
             * Permission for managing custom email headers
             */
            pgListHeaders?: boolean;
            /**
             * Permission for managing Unsubscribe By Email
             */
            pgListEmailaccount?: boolean;
            /**
             * Permission for accessing list bounce settings
             */
            pgListBounce?: boolean;
            /**
             * Permission for editing messages
             */
            pgMessageEdit?: boolean;
            /**
             * Permission for deleting messages
             */
            pgMessageDelete?: boolean;
            /**
             * Permission for sending messages
             */
            pgMessageSend?: boolean;
            /**
             * Permission for adding contacts
             */
            pgContactAdd?: boolean;
            /**
             * Permission for editing contacts
             */
            pgContactEdit?: boolean;
            /**
             * Permission for deleting contacts
             */
            pgContactDelete?: boolean;
            /**
             * Permission for merging contacts
             */
            pgContactMerge?: boolean;
            /**
             * Permission for importing contacts
             */
            pgContactImport?: boolean;
            /**
             * Permission for approving contacts
             */
            pgContactApprove?: boolean;
            /**
             * Permission for exporting contacts
             */
            pgContactExport?: boolean;
            /**
             * Permission for syncing contacts
             */
            pgContactSync?: boolean;
            /**
             * Permission for managing contact list segments
             */
            pgContactFilters?: boolean;
            /**
             * Permission for managing contact actions
             */
            pgContactActions?: boolean;
            /**
             * Permission for managing contact custom fields
             */
            pgContactFields?: boolean;
            /**
             * Permission for adding users
             */
            pg_user_add?: boolean;
            /**
             * Permission for editing users
             */
            pg_user_edit?: boolean;
            /**
             * Permission for deleting users
             */
            pg_user_delete?: boolean;
            /**
             * Permission for adding groups
             */
            pgGroupAdd?: boolean;
            /**
             * Permission for editing groups
             */
            pgGroupEdit?: boolean;
            /**
             * Permission for deleting groups
             */
            pgGroupDelete?: boolean;
            /**
             * Permission for adding templates
             */
            pgTemplateAdd?: boolean;
            /**
             * Permission for editing templates
             */
            pgTemplateEdit?: boolean;
            /**
             * Permission for deleting templates
             */
            pgTemplateDelete?: boolean;
            /**
             * Permission for adding personalization tags
             */
            pgPersonalizationAdd?: boolean;
            /**
             * Permission for editing personalization tags
             */
            pgPersonalizationEdit?: boolean;
            /**
             * Permission for deleting personalization tags
             */
            pgPersonalizationDelete?: boolean;
            pgAutomationManage?: boolean;
            /**
             * Permission for editing subscription forms
             */
            pgFormEdit?: boolean;
            /**
             * Permission for viewing campaign reports
             */
            pgReportsCampaign?: boolean;
            /**
             * Permission for viewing list reports
             */
            pgReportsList?: boolean;
            /**
             * Permission for viewing user reports
             */
            pgReportsUser?: boolean;
            /**
             * Campaign ID of last campaign report viewed to decide whether to show link on startup
             */
            pgStartupReports?: boolean;
            /**
             * Permission for viewing trend reports
             */
            pgReportsTrend?: boolean;
            /**
             * Whether or not to show the "getting started" tutorial on overview page
             */
            pgStartupGettingstarted?: boolean;
            /**
             * Permission for viewing deals
             */
            pgDeal?: boolean;
            /**
             * Permission for deleting deals
             */
            pgDealDelete?: boolean;
            /**
             * Permission for reassigning deals
             */
            pgDealReassign?: boolean;
            /**
             * Permission for adding deal groups
             */
            pgDealGroupAdd?: boolean;
            /**
             * Permission for editing deal groups
             */
            pgDealGroupEdit?: boolean;
            /**
             * Permission for deleting deals groups
             */
            pgDealGroupDelete?: boolean;
            /**
             * Permission for managing saved responses
             */
            pgSavedResponsesManage?: boolean;
            /**
             * Permission for managing tags
             */
            pgTagManage?: boolean;
            /**
             * Whether or not this group requires all campaigns to be approved
             */
            reqApproval?: boolean;
            /**
             * Whether or not this group requires first campaign to be approved
             */
            reqApproval1st?: boolean;
            /**
             * Who to notify for approval related issues (email)
             */
            reqApprovalNotify?: string;
            /**
             * Whether or not to show social links in campaigns sent from this group
             */
            socialdata?: boolean;
        };
    }): CancelablePromise<{
        group?: {
            title?: string;
            p_admin?: number;
            links?: {
                userGroups?: string;
                groupLimit?: string;
                dealGroupGroups?: string;
                listGroups?: string;
                addressGroups?: string;
                automationGroups?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Create a list
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createNewList(requestBody?: {
        list?: {
            /**
             * Name of the list to create
             */
            name: string;
            /**
             * URL-safe list name. Example: 'list-name-sample'
             */
            stringid: string;
            /**
             * The website URL this list is for.
             */
            sender_url: string;
            /**
             * A reminder for your contacts as to why they are on this list and you are messaging them.
             */
            sender_reminder: string;
            /**
             * Boolean value indicating whether or not to send the last sent campaign to this list to a new subscriber upon subscribing. 1 = yes, 0 = no
             */
            send_last_broadcast?: boolean;
            /**
             * Comma-separated list of email addresses to send a copy of all mailings to upon send
             */
            carboncopy?: string;
            /**
             * Comma-separated list of email addresses to notify when a new subscriber joins this list.
             */
            subscription_notify?: string;
            /**
             * Comma-separated list of email addresses to notify when a subscriber unsubscribes from this list.
             */
            unsubscription_notify?: string;
            /**
             * User Id of the list owner.  A list owner is able to control campaign branding.  A property of list.userid also exists on this object; both properties map to the same list owner field and are being maintained in the response object for backward compatibility.  If you post values for both list.user and list.userid, the value of list.user will be used.
             */
            user?: number;
        };
    }): CancelablePromise<{
        list?: {
            name?: string;
            stringid?: string;
            cdate?: string;
            udate?: string;
            links?: {
                contactGoalLists?: string;
                user?: string;
                addressLists?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Retrieve all lists
     * @param filtersName Filter by the name of the list
     * @param limit Limit the number of returned results
     * @param filtersNameOperator Filters lists by list name according to the operator specified. Operators currently supported: eq, neq, lt, lte, gt, gte, contains, starts_with
     * @param ordersName Orders filtered results by weight, ascending order, or descending order. If weight is used, exact matches are returned first, followed by matches starting with what was filtered by, followed by the rest of the results.
     * @returns any 200
     * @throws ApiError
     */
    retrieveAllLists(filtersName?: string, limit?: number, filtersNameOperator?: string, ordersName?: string): CancelablePromise<{
        lists?: Array<{
            stringid?: string;
            userid?: string;
            name?: string;
            cdate?: string;
            p_use_tracking?: string;
            p_use_analytics_read?: string;
            p_use_analytics_link?: string;
            p_use_twitter?: string;
            p_use_facebook?: string;
            p_embed_image?: string;
            p_use_captcha?: string;
            send_last_broadcast?: string;
            private?: string;
            analytics_domains?: any;
            analytics_source?: string;
            analytics_ua?: string;
            twitter_token?: string;
            twitter_token_secret?: string;
            facebook_session?: any;
            carboncopy?: any;
            subscription_notify?: any;
            unsubscription_notify?: any;
            require_name?: string;
            get_unsubscribe_reason?: string;
            to_name?: string;
            optinoptout?: string;
            sender_name?: string;
            sender_addr1?: string;
            sender_addr2?: string;
            sender_city?: string;
            sender_state?: string;
            sender_zip?: string;
            sender_country?: string;
            sender_phone?: string;
            sender_url?: string;
            sender_reminder?: string;
            fulladdress?: string;
            optinmessageid?: string;
            optoutconf?: string;
            deletestamp?: any;
            udate?: any;
            links?: {
                contactGoalLists?: string;
                user?: string;
                addressLists?: string;
            };
            id?: string;
            user?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Delete a list
     * @param id ID of the list to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAList(id: number): CancelablePromise<any>;
    /**
     * Retrieve a list
     * @param id ID of the lists to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveAList(id: string): CancelablePromise<{
        list?: {
            stringid?: string;
            userid?: string;
            name?: string;
            cdate?: string;
            p_use_tracking?: string;
            p_use_analytics_read?: string;
            p_use_analytics_link?: string;
            p_use_twitter?: string;
            p_use_facebook?: string;
            p_embed_image?: string;
            p_use_captcha?: string;
            send_last_broadcast?: string;
            private?: string;
            analytics_domains?: any;
            analytics_source?: string;
            analytics_ua?: string;
            twitter_token?: string;
            twitter_token_secret?: string;
            facebook_session?: any;
            carboncopy?: any;
            subscription_notify?: any;
            unsubscription_notify?: any;
            require_name?: string;
            get_unsubscribe_reason?: string;
            to_name?: string;
            optinoptout?: string;
            sender_name?: string;
            sender_addr1?: string;
            sender_addr2?: string;
            sender_city?: string;
            sender_state?: string;
            sender_zip?: string;
            sender_country?: string;
            sender_phone?: string;
            sender_url?: string;
            sender_reminder?: string;
            fulladdress?: string;
            optinmessageid?: string;
            optoutconf?: string;
            deletestamp?: any;
            udate?: any;
            links?: {
                contactGoalLists?: string;
                user?: string;
                addressLists?: string;
            };
            id?: string;
            user?: string;
        };
    }>;
    /**
     * Retrieve a custom field value
     * @param id ID of the fieldValue to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveAFieldvalues(id: string): CancelablePromise<{
        fieldValue?: {
            contact?: string;
            field?: any;
            value?: any;
            cdate?: string;
            udate?: string;
            links?: {
                owner?: string;
                field?: string;
            };
            id?: string;
            owner?: any;
        };
    }>;
    /**
     * Delete a custom field value
     * @param id ID of the fieldValue to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAFieldvalue1(id: number): CancelablePromise<any>;
    /**
     * Update a custom field value for contact
     * @param id ID of the fieldValue to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateACustomFieldValueForContact(id: string, requestBody?: {
        fieldValue?: {
            /**
             * ID of the contact whose field value you're updating
             */
            contact: string;
            /**
             * ID of the custom field whose value you're updating for the contact
             */
            field: string;
            /**
             * Value for the field that you're updating
             */
            value: string;
        };
        /**
         * If true, this will populate the missing required fields for this contact with default values
         */
        useDefaults?: boolean;
    }): CancelablePromise<{
        contacts?: Array<{
            cdate?: string;
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
            orgid?: string;
            segmentio_id?: string;
            bounced_hard?: string;
            bounced_soft?: string;
            bounced_date?: string;
            ip?: string;
            ua?: string;
            hash?: string;
            socialdata_lastcheck?: string;
            email_local?: string;
            email_domain?: string;
            sentcnt?: string;
            rating_tstamp?: string;
            gravatar?: string;
            deleted?: string;
            anonymized?: string;
            adate?: string;
            udate?: string;
            edate?: string;
            deleted_at?: string;
            created_utc_timestamp?: string;
            updated_utc_timestamp?: string;
            links?: {
                bounceLogs?: string;
                contactAutomations?: string;
                contactData?: string;
                contactGoals?: string;
                contactLists?: string;
                contactLogs?: string;
                contactTags?: string;
                contactDeals?: string;
                deals?: string;
                fieldValues?: string;
                geoIps?: string;
                notes?: string;
                organization?: string;
                plusAppend?: string;
                trackingLogs?: string;
                scoreValues?: string;
            };
            id?: string;
            organization?: any;
        }>;
        fieldValue?: {
            contact?: number;
            field?: number;
            value?: string;
            cdate?: string;
            udate?: string;
            links?: {
                owner?: string;
                field?: string;
            };
            owner?: number;
            id?: string;
        };
    }>;
    /**
     * Delete a message
     * @param id ID of the message to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAMessage(id: string): CancelablePromise<any>;
    /**
     * Update a message
     * @param id ID of the message to update
     * @param messageFromname Name of sender
     * @param messageEmail Email of sender
     * @param messageReply2 Reply email for the recipient to reply to
     * @param messageSubject Subject of message
     * @param messagePreheaderText Preheader Text
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAMessage(id: string, messageFromname?: string, messageEmail?: string, messageReply2?: string, messageSubject?: string, messagePreheaderText?: string, requestBody?: any): CancelablePromise<{
        message?: {
            userid?: string;
            ed_instanceid?: string;
            ed_version?: string;
            cdate?: string;
            mdate?: string;
            name?: string;
            fromname?: string;
            fromemail?: string;
            reply2?: string;
            priority?: string;
            charset?: string;
            encoding?: string;
            format?: string;
            subject?: string;
            preheader_text?: string;
            text?: string;
            html?: string;
            htmlfetch?: string;
            textfetch?: string;
            hidden?: string;
            preview_mime?: string;
            preview_data?: string;
            links?: {
                user?: string;
            };
            id?: string;
            user?: string;
        };
    }>;
    /**
     * Retrieve a message
     * @param id ID of the message to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveAMessage(id: string): CancelablePromise<{
        message?: {
            userid?: string;
            ed_instanceid?: string;
            ed_version?: string;
            cdate?: string;
            mdate?: string;
            name?: string;
            fromname?: string;
            fromemail?: string;
            reply2?: string;
            priority?: string;
            charset?: string;
            encoding?: string;
            format?: string;
            subject?: string;
            preheader_text?: string;
            text?: string;
            html?: string;
            htmlfetch?: string;
            textfetch?: string;
            hidden?: string;
            preview_mime?: string;
            preview_data?: string;
            links?: {
                user?: string;
            };
            id?: string;
            user?: string;
        };
    }>;
    /**
     * List all messages
     * @returns any 200
     * @throws ApiError
     */
    listAllMessages(): CancelablePromise<{
        messages?: Array<{
            userid?: string;
            ed_instanceid?: string;
            ed_version?: string;
            cdate?: string;
            mdate?: string;
            name?: string;
            fromname?: string;
            fromemail?: string;
            reply2?: string;
            priority?: string;
            charset?: string;
            encoding?: string;
            format?: string;
            subject?: string;
            preheader_text?: string;
            text?: string;
            html?: string;
            htmlfetch?: string;
            textfetch?: string;
            hidden?: string;
            preview_mime?: string;
            preview_data?: any;
            links?: {
                user?: string;
            };
            id?: string;
            user?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Retrieve a template
     * @param id ID of the template to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveATemplate(id: number): CancelablePromise<{
        template?: {
            userid?: string;
            ed_instanceid?: string;
            ed_version?: string;
            name?: string;
            subject?: any;
            content?: string;
            categoryid?: string;
            used?: string;
            waitpreview?: string;
            importnum?: string;
            mdate?: string;
            preview_content?: any;
            modified?: string;
            hidden?: string;
            links?: any[];
            id?: string;
        };
    }>;
    /**
     * List all segments
     * @returns any 200
     * @throws ApiError
     */
    listAllSegments(): CancelablePromise<{
        segments?: Array<{
            name?: string;
            logic?: string;
            hidden?: string;
            seriesid?: string;
            links?: any[];
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Update settings
     * @param id ID of the config to edit
     * @returns any 200
     * @throws ApiError
     */
    setConfig(id: string): CancelablePromise<{
        config?: {
            keyname?: string;
            section?: string;
            item?: string;
            userid?: string;
            val?: string;
            cdate?: string;
            udate?: string;
            links?: {
                owner?: string;
            };
            id?: string;
            owner?: string;
        };
    }>;
    /**
     * List all tags
     * @param search Filter by name of tag(s); "contains" operator is assumed.
     * @param filtersSearchOperator Filters tags by tag name according to the operator specified. Operators currently supported: `eq`, `neq`, `lt`, `lte`, `gt`, `gte`, `contains`, `starts_with`
     * @param ordersSearch Orders filtered results by weight, ascending order, or descending order. If `weight` is used, exact matches are returned first, followed by matches starting with what was filtered by, followed by the rest of the results.
     * @returns any 200
     * @throws ApiError
     */
    retrieveAllTags(search?: string, filtersSearchOperator?: string, ordersSearch?: 'weight' | 'asc' | 'desc'): CancelablePromise<{
        tags?: Array<{
            tagType?: string;
            tag?: string;
            description?: string;
            cdate?: string;
            links?: {
                contactGoalTags?: string;
            };
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Create a tag
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createANewTag(requestBody?: {
        /**
         * tag.description
         */
        tag?: {
            /**
             * Name of the new tag
             */
            tag?: string;
            /**
             * Tag-type of the new tag. Possible Values: template, contact
             */
            tagType?: string;
            /**
             * Description of the new tag
             */
            description?: string;
        };
    }): CancelablePromise<{
        tag?: {
            tag?: string;
            description?: string;
            tagType?: string;
            cdate?: string;
            links?: {
                contactGoalTags?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Create a custom field value
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createFieldvalue(requestBody?: {
        fieldValue?: {
            /**
             * ID of the contact whose field value you're updating
             */
            contact: string;
            /**
             * ID of the custom field whose value you're updating for the contact
             */
            field: string;
            /**
             * Value for the field that you're updating. For multi-select options this needs to be in the format of ||option1||option2||
             */
            value: string;
        };
        /**
         * If true, this will populate the missing required fields for this contact with default values
         */
        useDefaults?: boolean;
    }): CancelablePromise<{
        contacts?: Array<{
            cdate?: string;
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
            orgid?: string;
            segmentio_id?: string;
            bounced_hard?: string;
            bounced_soft?: string;
            bounced_date?: any;
            ip?: string;
            ua?: any;
            hash?: string;
            socialdata_lastcheck?: any;
            email_local?: string;
            email_domain?: string;
            sentcnt?: string;
            rating_tstamp?: any;
            gravatar?: string;
            deleted?: string;
            anonymized?: string;
            adate?: any;
            udate?: string;
            edate?: any;
            deleted_at?: any;
            created_utc_timestamp?: string;
            updated_utc_timestamp?: string;
            links?: {
                bounceLogs?: string;
                contactAutomations?: string;
                contactData?: string;
                contactGoals?: string;
                contactLists?: string;
                contactLogs?: string;
                contactTags?: string;
                contactDeals?: string;
                deals?: string;
                fieldValues?: string;
                geoIps?: string;
                notes?: string;
                organization?: string;
                plusAppend?: string;
                trackingLogs?: string;
                scoreValues?: string;
            };
            id?: string;
            organization?: any;
        }>;
        fieldValue?: {
            contact?: number;
            field?: number;
            value?: string;
            cdate?: string;
            udate?: string;
            links?: {
                owner?: string;
                field?: string;
            };
            owner?: number;
            id?: string;
        };
    }>;
    /**
     * List all custom field values
     * @param filtersFieldid ID of the field the value belongs to.
     * @param filtersVal Value of the custom field for a specific contact
     * @returns any 200
     * @throws ApiError
     */
    listAllCustomFieldValues(filtersFieldid?: string, filtersVal?: string): CancelablePromise<{
        fieldValues?: Array<{
            contact?: string;
            field?: string;
            value?: string;
            cdate?: string;
            udate?: string;
            links?: {
                owner?: string;
                field?: string;
            };
            id?: string;
            owner?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * List all custom fields
     * @param limit The number of fields returned per request.
     * @returns any 200
     * @throws ApiError
     */
    retrieveFields(limit?: number): CancelablePromise<{
        fieldOptions?: any[];
        fieldRels?: any[];
        fields?: Array<{
            title?: string;
            descript?: any;
            type?: string;
            isrequired?: string;
            perstag?: string;
            defval?: any;
            show_in_list?: string;
            rows?: string;
            cols?: string;
            visible?: string;
            service?: string;
            ordernum?: string;
            cdate?: string;
            udate?: string;
            options?: any[];
            relations?: any[];
            links?: {
                options?: string;
                relations?: string;
            };
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Create a custom field
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createAContactCustomField(requestBody?: {
        field?: {
            /**
             * Title of the field being created
             */
            title: string;
            /**
             * Possible Values: dropdown, hidden, checkbox, date, text, datetime, textarea, NULL, listbox, radio
             */
            type: string;
            /**
             * Description of field being created
             */
            descript?: string;
            /**
             * The perstag that represents the field being created
             */
            perstag?: string;
            /**
             * Default value of the field being created
             */
            defval?: string;
            /**
             * Show this field in the contact list view (Deprecated - no longer used)
             */
            show_in_list?: boolean;
            /**
             * Num of rows for a textarea (Deprecated - no longer used)
             */
            rows?: number;
            /**
             * Num of columns for a textarea (Deprecated - no longer used)
             */
            cols?: number;
            /**
             * Show or hide this field when using the Form Builder
             */
            visible?: boolean;
            /**
             * Possible Vales: nimble, contactually, mindbody, salesforce, highrise, google_spreadsheets, pipedrive, onepage, google_contacts, freshbooks, shopify, zendesk, etsy, NULL, bigcommerce, capsule, bigcommerce_oauth, sugarcrm, zohocrm, batchbook
             */
            service?: string;
            /**
             * Order of appearance in ‘My Fields’ tab.
             */
            ordernum?: number;
        };
    }): CancelablePromise<{
        fieldOptions?: any[];
        fieldRels?: any[];
        fields?: Array<{
            title?: string;
            descript?: any;
            type?: string;
            isrequired?: string;
            perstag?: string;
            defval?: any;
            show_in_list?: string;
            rows?: string;
            cols?: string;
            visible?: string;
            service?: string;
            ordernum?: string;
            cdate?: string;
            udate?: string;
            options?: any[];
            relations?: any[];
            links?: {
                options?: string;
                relations?: string;
            };
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Retrieve a custom field
     * @param id ID of the field to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveACustomFieldContact(id: number): CancelablePromise<{
        fieldOptions?: any[];
        fieldRels?: Array<{
            field?: string;
            relid?: string;
            dorder?: string;
            cdate?: string;
            links?: any[];
            id?: string;
        }>;
        field?: {
            title?: string;
            descript?: string;
            type?: string;
            isrequired?: string;
            perstag?: string;
            defval?: string;
            show_in_list?: string;
            rows?: string;
            cols?: string;
            visible?: string;
            service?: string;
            ordernum?: string;
            cdate?: string;
            udate?: string;
            options?: any[];
            relations?: Array<string>;
            links?: {
                options?: string;
                relations?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Update a custom field
     * @param id ID of the field to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAField(id: number, requestBody?: {
        field?: {
            /**
             * Possible Values: dropdown, hidden, checkbox, date, datetime, text, textarea, NULL, listbox, radio
             */
            type?: string;
            /**
             * Title of the field being updated
             */
            title?: string;
            /**
             * Description of field being updated
             */
            descript?: string;
            /**
             * The perstag that represents the field being created
             */
            perstag?: string;
            /**
             * Default value of the field being created
             */
            defval?: string;
            /**
             * Show this field in the contact list view (No longer Used)
             */
            show_in_list?: boolean;
            /**
             * Setting to show/hide field
             */
            visible?: boolean;
            /**
             * Possible Vales: nimble, contactually, mindbody, salesforce, highrise, google_spreadsheets, pipedrive, onepage, google_contacts, freshbooks, shopify, zendesk, etsy, NULL, bigcommerce, capsule, bigcommerce_oauth, sugarcrm, zohocrm, batchbook
             */
            service?: string;
            /**
             * Order of appearance in ‘My Fields’ tab.
             */
            ordernum?: string;
        };
    }): CancelablePromise<{
        field?: {
            title?: string;
            descript?: string;
            type?: string;
            isrequired?: number;
            perstag?: string;
            defval?: string;
            show_in_list?: number;
            rows?: number;
            cols?: number;
            visible?: number;
            service?: string;
            ordernum?: number;
            cdate?: string;
            udate?: string;
            links?: {
                options?: string;
                relations?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Delete a custom field
     * @param id ID of the field option to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAField(id: number): CancelablePromise<any>;
    /**
     * Update a tag
     * @param id ID of the tag to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateATag(id: number, requestBody?: {
        /**
         * tag.description
         */
        tag?: {
            /**
             * Name of the tag being updated
             */
            tag?: string;
            /**
             * Tag-type of the tag being updated. Possible Values: template, contact
             */
            tagType?: string;
            /**
             * Description of the tag being updated
             */
            description?: string;
        };
    }): CancelablePromise<{
        tag?: {
            tagType?: string;
            tag?: string;
            description?: string;
            cdate?: string;
            links?: {
                contactGoalTags?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Delete a Tag
     * @param id ID of the tag to remove
     * @returns any 200
     * @throws ApiError
     */
    deleteATag(id: number): CancelablePromise<any>;
    /**
     * Retrieve a tag
     * @param id ID of the tag to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveATag(id: number): CancelablePromise<{
        tag?: {
            tagType?: string;
            tag?: string;
            description?: string;
            cdate?: string;
            subscriber_count?: string;
            links?: {
                contactGoalTags?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Update list status for a contact
     * Subscribe a contact to a list or unsubscribe a contact from a list.
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateListStatusForContact(requestBody?: {
        contactList?: {
            /**
             * ID of the list to subscribe the contact to
             */
            list: string;
            /**
             * ID of the contact to subscribe to the list
             */
            contact: string;
            /**
             * Set to "1" to subscribe the contact to the list. Set to "2" to unsubscribe the contact from the list. WARNING: If you change a status from unsubscribed to active, you can re-subscribe a contact to a list from which they had manually unsubscribed.
             */
            status: string;
            /**
             * Set to "4" when re-subscribing a contact to a list
             */
            sourceid?: number;
        };
    }): CancelablePromise<{
        contacts?: Array<{
            cdate?: string;
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
            orgid?: string;
            segmentio_id?: string;
            bounced_hard?: string;
            bounced_soft?: string;
            bounced_date?: string;
            ip?: string;
            ua?: string;
            hash?: string;
            socialdata_lastcheck?: string;
            email_local?: string;
            email_domain?: string;
            sentcnt?: string;
            rating_tstamp?: string;
            gravatar?: string;
            deleted?: string;
            anonymized?: string;
            adate?: string;
            udate?: string;
            deleted_at?: string;
            created_utc_timestamp?: string;
            updated_utc_timestamp?: string;
            links?: {
                bounceLogs?: string;
                contactAutomations?: string;
                contactData?: string;
                contactGoals?: string;
                contactLists?: string;
                contactLogs?: string;
                contactTags?: string;
                contactDeals?: string;
                deals?: string;
                fieldValues?: string;
                geoIps?: string;
                notes?: string;
                organization?: string;
                plusAppend?: string;
                trackingLogs?: string;
                scoreValues?: string;
            };
            id?: string;
            organization?: any;
        }>;
        contactList?: {
            contact?: string;
            list?: string;
            form?: any;
            seriesid?: string;
            sdate?: string;
            status?: number;
            responder?: string;
            sync?: string;
            unsubreason?: string;
            campaign?: any;
            message?: any;
            first_name?: string;
            last_name?: string;
            ip4Sub?: string;
            sourceid?: string;
            autosyncLog?: any;
            ip4_last?: string;
            ip4Unsub?: string;
            unsubscribeAutomation?: any;
            links?: {
                automation?: string;
                list?: string;
                contact?: string;
                form?: string;
                autosyncLog?: string;
                campaign?: string;
                unsubscribeAutomation?: string;
                message?: string;
            };
            id?: string;
            automation?: any;
        };
    }>;
    /**
     * Update a custom field
     * @param id ID of the custom field to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateACustomDealFieldMeta(id: number, requestBody?: {
        dealCustomFieldMetum?: {
            /**
             * Name of the field
             */
            fieldLabel?: string;
            /**
             * Options for the field. Only necessary if field_type is dropdown, multiselect, radio, or checkbox.
             */
            fieldOptions?: Array<string>;
            /**
             * Default value of the field
             */
            fieldDefault?: string;
            /**
             * Whether or not the field is visible on forms
             */
            isFormVisible?: boolean;
            /**
             * Order for displaying the field on Manage Fields page and deal profiles
             */
            displayOrder?: number;
        };
    }): CancelablePromise<{
        dealCustomFieldMetum?: {
            id?: string;
            fieldLabel?: string;
            fieldType?: string;
            fieldOptions?: any;
            fieldDefault?: string;
            isFormVisible?: number;
            isRequired?: number;
            displayOrder?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: {
                dealCustomFieldData?: string;
            };
        };
    }>;
    /**
     * Delete a custom field
     * @param id ID of the field to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteACustomDealFieldMeta(id: number): CancelablePromise<{
        message?: string;
    }>;
    /**
     * Retrieve a custom field
     * @param id ID of the field to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveACustomDealFieldMeta(id: number): CancelablePromise<{
        dealCustomFieldMetum?: {
            id?: string;
            fieldLabel?: string;
            fieldType?: string;
            fieldOptions?: any;
            fieldDefault?: string;
            isFormVisible?: number;
            isRequired?: number;
            displayOrder?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: {
                dealCustomFieldData?: string;
            };
        };
    }>;
    /**
     * Retrieve a custom field value
     * @param id ID of the dealCustomFieldData to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveACustomDealFieldValue(id: number): CancelablePromise<{
        dealCustomFieldDatum?: {
            id?: string;
            dealCustomFieldMetumId?: number;
            dealId?: number;
            customFieldId?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            fieldValue?: string;
            links?: {
                deal?: string;
                dealCustomFieldMetum?: string;
            };
        };
    }>;
    /**
     * Delete a custom field value
     * @param id ID of the dealCustomFieldData to retrieve
     * @returns any 200
     * @throws ApiError
     */
    deleteACustomDealFieldData(id: number): CancelablePromise<{
        message?: string;
    }>;
    /**
     * Update a custom field value
     * @param id ID of the custom fields value to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateACustomDealFieldValue(id: number, requestBody?: {
        dealCustomFieldDatum?: {
            /**
             * Values for text
             */
            fieldValue?: string;
            /**
             * Currency code for the `currency` value
             */
            fieldCurrency?: string;
        };
    }): CancelablePromise<{
        dealCustomFieldDatum?: {
            id?: string;
            dealCustomFieldMetumId?: number;
            dealId?: number;
            customFieldId?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            fieldValue?: string;
            links?: {
                deal?: string;
                dealCustomFieldMetum?: string;
            };
        };
    }>;
    /**
     * Create a custom field meta
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createCustomDealFieldMeta(requestBody?: {
        dealCustomFieldMetum?: {
            /**
             * Name of the field
             */
            fieldLabel: string;
            /**
             * Type of field. Possible values are: `text`, `textarea`, `date`, `datetime`, `dropdown`, `multiselect`, `radio`, `checkbox`, `hidden`, `currency`, or `number`.
             */
            fieldType: string;
            /**
             * Options for the field. Only necessary if `field_type` is `dropdown`, `multiselect`, `radio`, or `checkbox`.
             */
            fieldOptions?: Array<string>;
            /**
             * Default value of the field
             */
            fieldDefault?: string;
            /**
             * The 3-letter currency code of the default currency for the field. Only necessary if `field_type` is `currency`.
             */
            fieldDefaultCurrency?: string;
            /**
             * Whether or not the field is visible on forms
             */
            isFormVisible?: boolean;
            /**
             * Order for displaying the field on Manage Fields page and deal profiles
             */
            displayOrder?: number;
        };
    }): CancelablePromise<{
        dealCustomFieldMetum?: {
            id?: string;
            fieldLabel?: string;
            fieldType?: string;
            fieldOptions?: any;
            fieldDefault?: string;
            isFormVisible?: number;
            isRequired?: number;
            displayOrder?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: {
                dealCustomFieldData?: string;
            };
        };
    }>;
    /**
     * List all custom fields
     * @param limit The number of fields returned per request.
     * @returns any 200
     * @throws ApiError
     */
    retrieveAllCustomDealFieldMeta(limit?: number): CancelablePromise<{
        dealCustomFieldMeta?: Array<{
            id?: string;
            fieldLabel?: string;
            fieldType?: string;
            fieldOptions?: any;
            fieldDefault?: number;
            fieldDefaultCurrency?: any;
            isFormVisible?: number;
            isRequired?: number;
            displayOrder?: number;
            personalization?: string;
            knownFieldId?: any;
            hideFieldFlag?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: {
                dealCustomFieldData?: string;
            };
        }>;
    }>;
    /**
     * Create a custom field value
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createCustomDealFieldValue(requestBody?: {
        dealCustomFieldDatum?: {
            /**
             * The ID of the deal this field value relates to
             */
            dealId: number;
            /**
             * The ID of the custom field metum this field value relates to
             */
            customFieldId: number;
            /**
             * Values for the field. (For `currency` field only, this needs to be in cents: eg, 10050 = 100.5)
             */
            fieldValue: string;
            /**
             * Currency code for the money value
             */
            fieldCurrency?: string;
        };
    }): CancelablePromise<{
        dealCustomFieldDatum?: {
            id?: string;
            dealCustomFieldMetumId?: number;
            dealId?: number;
            customFieldId?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            fieldValue?: string;
            links?: {
                deal?: string;
                dealCustomFieldMetum?: string;
            };
        };
    }>;
    /**
     * List all custom field values
     * @param filtersDealId Filter results by a specific deal (note that Id uses a capital I)
     * @returns any 200
     * @throws ApiError
     */
    listAllCustomFielddataFieldValues(filtersDealId?: string): CancelablePromise<{
        dealCustomFieldData?: Array<{
            id?: string;
            dealCustomFieldMetumId?: number;
            dealId?: number;
            customFieldId?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            fieldValue?: string;
            links?: {
                deal?: string;
                dealCustomFieldMetum?: string;
            };
        }>;
    }>;
    /**
     * List all calendar feeds
     * @returns any 200
     * @throws ApiError
     */
    listAllCalendarFeeds(): CancelablePromise<{
        calendars?: Array<{
            userid?: string;
            title?: string;
            type?: string;
            token?: string;
            notification?: string;
            cdate?: string;
            mdate?: string;
            links?: {
                calendarRels?: string;
                calendarUsers?: string;
            };
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Create a calendar feed
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createACalendarFeed(requestBody?: {
        calendar?: {
            /**
             * Title of the calendar feed
             */
            title: string;
            /**
             * Possible Values: 'All', 'Deals', or 'Contacts'
             */
            type: string;
            /**
             * Whether or not this calendar has notifications
             */
            notification?: boolean;
        };
    }): CancelablePromise<{
        calendar?: {
            title?: string;
            type?: string;
            userid?: string;
            notification?: number;
            cdate?: string;
            mdate?: string;
            token?: string;
            links?: {
                calendarRels?: string;
                calendarUsers?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Retrieve a calendar feed
     * @param id ID of the calendar feed to retrieve
     * @returns any 200
     * @throws ApiError
     */
    listAllCalendarFeeds1(id: number): CancelablePromise<{
        calendar?: {
            userid?: string;
            title?: string;
            type?: string;
            token?: string;
            notification?: string;
            cdate?: string;
            mdate?: string;
            links?: {
                calendarRels?: string;
                calendarUsers?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Update a calendar feed
     * @param id ID of the calendar feed to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateACalendarFeed(id: number, requestBody?: {
        calendar?: {
            /**
             * Title of the calendar feed
             */
            title?: string;
            /**
             * Possible Values: 'All', 'Deals', or 'Contacts'
             */
            type?: string;
            /**
             * Whether or not this calendar has notifications
             */
            notification?: boolean;
        };
    }): CancelablePromise<{
        calendar?: {
            userid?: string;
            title?: string;
            type?: string;
            token?: string;
            notification?: number;
            cdate?: string;
            mdate?: string;
            links?: {
                calendarRels?: string;
                calendarUsers?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Delete a calendar feed
     * @param id ID of the calendar feed to delete
     * @returns any 200
     * @throws ApiError
     */
    removeACalendarFeed(id: number): CancelablePromise<any>;
    /**
     * Create a saved response
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    savedResponses(requestBody?: {
        savedResponse?: {
            /**
             * Title of the saved response being created
             */
            title: string;
            /**
             * Subject of the saved response being created
             */
            subject: string;
            /**
             * Body of the saved response being created
             */
            body: string;
        };
    }): CancelablePromise<{
        savedResponse?: {
            title?: string;
            subject?: string;
            body?: string;
            cdate?: string;
            links?: {
                user?: string;
                savedResponseCategorySavedResponse?: string;
            };
            id?: string;
        };
    }>;
    /**
     * List all saved responses
     * @returns any 200
     * @throws ApiError
     */
    listAllSavedResponses(): CancelablePromise<{
        savedResponses?: Array<{
            title?: string;
            subject?: string;
            body?: string;
            ldate?: any;
            last_sent_user_id?: any;
            cdate?: string;
            mdate?: any;
            links?: {
                user?: string;
                savedResponseCategorySavedResponse?: string;
            };
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Retrieve a saved response
     * @param id ID of the saved Response to recieve
     * @returns any 200
     * @throws ApiError
     */
    getASavedresponse(id: number): CancelablePromise<{
        savedResponse?: {
            title?: string;
            subject?: string;
            body?: string;
            ldate?: any;
            last_sent_user_id?: any;
            cdate?: string;
            mdate?: any;
            links?: {
                user?: string;
                savedResponseCategorySavedResponse?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Update a saved response
     * @param id ID of the saved response to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateASavedResponse(id: number, requestBody?: {
        savedResponse?: {
            /**
             * Title of the saved response being updated
             */
            title?: string;
            /**
             * Subject of the saved response being updated
             */
            subject?: string;
            /**
             * Body of the saved response being updated
             */
            body?: string;
        };
    }): CancelablePromise<{
        savedResponse?: {
            title?: string;
            subject?: string;
            body?: string;
            ldate?: any;
            last_sent_user_id?: any;
            cdate?: string;
            mdate?: string;
            links?: {
                user?: string;
                savedResponseCategorySavedResponse?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Delete a saved response
     * @param id ID of the saved response to remove
     * @returns any 200
     * @throws ApiError
     */
    retrieveASavedresponse(id: number): CancelablePromise<any>;
    /**
     * Retrieve a campaign
     * @param id ID of campaign to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveACampaign(id: number): CancelablePromise<{
        campaign?: {
            type?: string;
            userid?: string;
            segmentid?: string;
            bounceid?: string;
            realcid?: string;
            sendid?: string;
            threadid?: string;
            seriesid?: string;
            formid?: string;
            basetemplateid?: string;
            basemessageid?: string;
            addressid?: string;
            source?: string;
            name?: string;
            cdate?: string;
            mdate?: string;
            sdate?: any;
            ldate?: any;
            send_amt?: string;
            total_amt?: string;
            opens?: string;
            uniqueopens?: string;
            linkclicks?: string;
            uniquelinkclicks?: string;
            subscriberclicks?: string;
            forwards?: string;
            uniqueforwards?: string;
            hardbounces?: string;
            softbounces?: string;
            unsubscribes?: string;
            unsubreasons?: string;
            updates?: string;
            socialshares?: string;
            replies?: string;
            uniquereplies?: string;
            status?: string;
            public?: string;
            mail_transfer?: string;
            mail_send?: string;
            mail_cleanup?: string;
            mailer_log_file?: string;
            tracklinks?: string;
            tracklinksanalytics?: string;
            trackreads?: string;
            trackreadsanalytics?: string;
            analytics_campaign_name?: string;
            tweet?: string;
            facebook?: string;
            survey?: string;
            embed_images?: string;
            htmlunsub?: string;
            textunsub?: string;
            htmlunsubdata?: any;
            textunsubdata?: any;
            recurring?: string;
            willrecur?: string;
            split_type?: string;
            split_content?: string;
            split_offset?: string;
            split_offset_type?: string;
            split_winner_messageid?: string;
            split_winner_awaiting?: string;
            responder_offset?: string;
            responder_type?: string;
            responder_existing?: string;
            reminder_field?: string;
            reminder_format?: any;
            reminder_type?: string;
            reminder_offset?: string;
            reminder_offset_type?: string;
            reminder_offset_sign?: string;
            reminder_last_cron_run?: any;
            activerss_interval?: string;
            activerss_url?: any;
            activerss_items?: string;
            ip4?: string;
            laststep?: string;
            managetext?: string;
            schedule?: string;
            scheduleddate?: any;
            waitpreview?: string;
            deletestamp?: any;
            replysys?: string;
            links?: {
                user?: string;
                automation?: string;
                campaignMessage?: string;
                links?: string;
                aggregateRevenues?: string;
            };
            id?: string;
            user?: string;
            automation?: any;
        };
    }>;
    /**
     * List all scores
     * @returns any 200
     * @throws ApiError
     */
    listAllScores(): CancelablePromise<{
        scores?: Array<{
            reltype?: string;
            name?: string;
            descript?: string;
            status?: string;
            cdate?: string;
            mdate?: string;
            links?: any[];
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Retrieve a score
     * @param id ID of the score to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveAScore(id: number): CancelablePromise<{
        score?: {
            reltype?: string;
            name?: string;
            descript?: string;
            status?: string;
            cdate?: string;
            mdate?: string;
            links?: any[];
            id?: string;
        };
    }>;
    /**
     * Retrieve a segment
     * @param id ID of the segment to be retrieved
     * @returns any 200
     * @throws ApiError
     */
    retrieveASegment(id: number): CancelablePromise<{
        segment?: {
            name?: string;
            logic?: string;
            hidden?: string;
            seriesid?: string;
            links?: any[];
            id?: string;
        };
    }>;
    /**
     * Create a custom field relationship to list(s)
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createACustomFieldRelationshipToLists(requestBody?: {
        fieldRel?: {
            /**
             * ID of the field to create the relationship
             */
            field?: number;
            /**
             * ID of the list to create the relationship (0 makes the field available on all lists)
             */
            relid?: number;
        };
    }): CancelablePromise<{
        fieldRel?: {
            relid?: number;
            field?: number;
            cdate?: string;
            links?: any[];
            id?: string;
        };
    }>;
    /**
     * Create a list group permission
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createAListGroupPermission(requestBody?: {
        listGroup?: {
            /**
             * ID of the list
             */
            listid: number;
            /**
             * ID of the group that list should be associated with
             */
            groupid: number;
        };
    }): CancelablePromise<{
        listGroup?: {
            list?: number;
            group?: number;
            links?: {
                list?: string;
                group?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Retrieve a contact's score value
     * @param id id of the Contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveAContactsScoreValue(id: number): CancelablePromise<{
        scoreValues?: Array<{
            score?: string;
            contact?: string;
            deal?: any;
            cdate?: string;
            mdate?: string;
            scoreValue?: string;
            links?: {
                score?: string;
                contact?: string;
                deal?: string;
            };
            id?: string;
        }>;
    }>;
    /**
     * Retrieve a secondary contact
     * Retrieve an existing secondary contact
     * @param id Secondary Contact's id
     * @returns any 200
     * @throws ApiError
     */
    retrieveASecondaryContact(id: number): CancelablePromise<{
        contactDeal?: {
            deal?: string;
            contact?: string;
            cdate?: string;
            links?: {
                deal?: string;
                contact?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Update a secondary contact
     * Update an existing secondary contact
     * @param id Secondary Contact's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateASecondaryContact(id: number, requestBody?: {
        contactDeal?: {
            /**
             * Deal's id
             */
            deal?: string;
            /**
             * Contact's id
             */
            contact?: string;
            /**
             * role id to associate with the contact
             */
            role?: number;
        };
    }): CancelablePromise<{
        deals?: Array<{
            hash?: string;
            owner?: string;
            contact?: string;
            organization?: any;
            group?: string;
            stage?: string;
            title?: string;
            description?: string;
            percent?: string;
            cdate?: string;
            mdate?: string;
            nexttaskid?: any;
            value?: string;
            currency?: string;
            winProbability?: any;
            winProbabilityMdate?: string;
            status?: string;
            activitycount?: string;
            nextdealid?: string;
            edate?: any;
            links?: {
                dealActivities?: string;
                contact?: string;
                contactDeals?: string;
                group?: string;
                nextTask?: string;
                notes?: string;
                organization?: string;
                owner?: string;
                scoreValues?: string;
                stage?: string;
                tasks?: string;
                dealCustomFieldData?: string;
            };
            id?: string;
            isDisabled?: boolean;
        }>;
        contactDeal?: {
            deal?: string;
            contact?: number;
            role?: number;
            cdate?: string;
            links?: {
                deal?: string;
                contact?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Delete a secondary contact
     * Delete an existing secondary contact
     * @param id Secondary Contact's id
     * @returns any 200
     * @throws ApiError
     */
    deleteASecondaryContact(id: number): CancelablePromise<any>;
    /**
     * List all secondary contacts
     * Retrieve all secondary contacts
     * @returns any 200
     * @throws ApiError
     */
    listAllSecondaryContacts(): CancelablePromise<{
        contactDeals?: Array<{
            deal?: string;
            contact?: string;
            cdate?: string;
            links?: {
                deal?: string;
                contact?: string;
            };
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Create a secondary contact
     * Create a new secondary contact for a deal
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createASecondaryContact(requestBody?: {
        contactDeal?: {
            /**
             * Deal's id
             */
            deal: string;
            /**
             * Contact's id
             */
            contact: string;
        };
    }): CancelablePromise<{
        deals?: Array<{
            hash?: string;
            owner?: string;
            contact?: string;
            organization?: any;
            group?: string;
            stage?: string;
            title?: string;
            description?: string;
            percent?: string;
            cdate?: string;
            mdate?: string;
            nexttaskid?: any;
            value?: string;
            currency?: string;
            winProbability?: any;
            winProbabilityMdate?: string;
            status?: string;
            activitycount?: string;
            nextdealid?: string;
            edate?: any;
            links?: {
                dealActivities?: string;
                contact?: string;
                contactDeals?: string;
                group?: string;
                nextTask?: string;
                notes?: string;
                organization?: string;
                owner?: string;
                scoreValues?: string;
                stage?: string;
                tasks?: string;
                dealCustomFieldData?: string;
            };
            id?: string;
            isDisabled?: boolean;
        }>;
        contactDeal?: {
            contact?: number;
            deal?: number;
            cdate?: string;
            links?: {
                deal?: string;
                contact?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Bulk create custom field options
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createCustomFieldOptions(requestBody?: {
        /**
         * ID of the custom field to add options to
         */
        field: number;
        /**
         * Name of the option
         */
        label?: string;
        /**
         * Value of the option
         */
        value: string;
        /**
         * Order for displaying the custom field option
         */
        orderid?: number;
        /**
         * Whether or not this option is the default value
         */
        isdefault?: boolean;
    }): CancelablePromise<{
        fieldOptions?: Array<{
            value?: string;
            field?: number;
            cdate?: string;
            udate?: string;
            label?: string;
            links?: {
                field?: string;
            };
            id?: string;
        }>;
    }>;
    /**
     * Bulk create a custom deal field value
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    bulkCreateACustomDealFieldValue(requestBody?: {
        array?: {
            /**
             * The ID of the deal this field value relates to
             */
            dealId: number;
            /**
             * The ID of the custom field metum this field value relates to
             */
            customFieldId: number;
            /**
             * Values for the field. (For currency field only, this needs to be in cents: eg, 10050 = 100.5)
             */
            fieldValue: string;
            /**
             * Currency code for the money value
             */
            fieldCurrency?: string;
        };
    }): CancelablePromise<{
        message?: string;
    }>;
    /**
     * Bulk update a custom field value
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    bulkUpdateACustomFieldValue(requestBody?: {
        array?: {
            /**
             * ID of the dealCustomFieldData to update
             */
            id: number;
            /**
             * Values for the field. (For currency field only, this needs to be in cents: eg, 10050 = 100.5)
             */
            fieldValue: string;
            /**
             * Currency code for the money value
             */
            fieldCurrency?: string;
        };
    }): CancelablePromise<{
        message?: string;
    }>;
    /**
     * List all accounts
     * Retrieve all existing account
     * @param search Search by name
     * @param countDeals Whether to compute the contactCount and dealCount counts for the number of contacts/deals associated with each account. Set it to true to include the right counts. If set to false or omitted from the call, then contactCount and dealCount will not be counted and be simply displayed as 0.
     * @returns any 200
     * @throws ApiError
     */
    listAllAccounts(search?: string, countDeals?: boolean): CancelablePromise<any>;
    /**
     * Create an account
     * Create a new account
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createAnAccountNew(requestBody?: {
        account?: {
            /**
             * Account's name
             */
            name: string;
            /**
             * Account's website
             */
            accountUrl?: string;
            /**
             * The userId of the account owner.
             */
            owner?: number;
            /**
             * Account's custom field values `{customFieldId: int, fieldValue: string, fieldCurrency?:string}[]`
             */
            fields?: Array<{
                /**
                 * Field ID, ID of the Custom Field Meta Data
                 */
                customFieldId: number;
                /**
                 * Updated field value. For `currency` field, this needs to be in cents not dollars (or 100 x Base Unit).
                 */
                fieldValue: string;
                /**
                 * Required only for the `currency` field type. The three letter currency code for the currency value
                 */
                fieldCurrency?: string;
            }>;
        };
    }): CancelablePromise<{
        account?: {
            name?: string;
            accountUrl?: string;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: any[];
            fields?: Array<{
                customFieldId?: number;
                fieldValue?: string;
                accountId?: string;
            }>;
            id?: string;
        };
    }>;
    /**
     * Retrieve an account
     * Retrieve an existing account
     * @param id Account's ID
     * @returns any 200
     * @throws ApiError
     */
    retrieveAnAccount(id: number): CancelablePromise<{
        account?: {
            name?: string;
            accountUrl?: string;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: any[];
            id?: string;
        };
    }>;
    /**
     * Delete an account
     * Delete an existing account
     * @param id Account's id
     * @returns any 200
     * @throws ApiError
     */
    deleteAnAccount(id: number): CancelablePromise<any>;
    /**
     * Update an account
     * Update an existing account
     * @param id Account's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAnAccountNew(id: number, requestBody?: {
        account?: {
            /**
             * Account's name
             */
            name?: string;
            /**
             * Account's website
             */
            accountUrl?: string;
            /**
             * Account's custom field values `{customFieldId: int, fieldValue: string, fieldCurrency?:string}[]`
             */
            fields?: Array<{
                /**
                 * Field ID, ID of the Custom Field Meta Data
                 */
                customFieldId: number;
                /**
                 * Updated field value. For `currency` field, this needs to be in cents not dollars (or 100 x Base Unit).
                 */
                fieldValue: string;
                /**
                 * Required only for the `currency` field type. The three letter currency code for the currency value
                 */
                fieldCurrency?: string;
            }>;
            /**
             * The userId of the Account owner.
             */
            owner?: number;
        };
    }): CancelablePromise<{
        account?: {
            name?: string;
            accountUrl?: string;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: any[];
            fields?: Array<{
                customFieldId?: number;
                fieldValue?: string;
                accountId?: string;
            }>;
            id?: string;
        };
    }>;
    /**
     * Retrieve a custom field
     * @param id ID of the field to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveACustomFieldMeta(id: number): CancelablePromise<{
        accountCustomFieldMetum?: {
            id?: string;
            fieldLabel?: string;
            fieldType?: string;
            fieldOptions?: any;
            fieldDefault?: string;
            isFormVisible?: number;
            isRequired?: number;
            displayOrder?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: {
                accountCustomFieldData?: string;
            };
        };
    }>;
    /**
     * Update a custom field
     * @param id ID of the custom field to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateACustomField(id: number, requestBody?: {
        accountCustomFieldMetum?: {
            /**
             * Name of the field
             */
            fieldLabel?: string;
            /**
             * Options for the field. Only necessary if field_type is dropdown, multiselect, radio, or checkbox.
             */
            fieldOptions?: Array<string>;
            /**
             * Default value of the field
             */
            fieldDefault?: string;
            /**
             * Whether or not the field is visible on forms
             */
            isFormVisible?: boolean;
            /**
             * Order for displaying the field on Manage Fields page and deal profiles
             */
            displayOrder?: number;
        };
    }): CancelablePromise<{
        accountCustomFieldMetum?: {
            id?: string;
            fieldLabel?: string;
            fieldType?: string;
            fieldOptions?: any;
            fieldDefault?: string;
            isFormVisible?: number;
            isRequired?: number;
            displayOrder?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: {
                accountCustomFieldData?: string;
            };
        };
    }>;
    /**
     * Delete a custom field
     * @param id ID of the field to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteACustomField(id: number): CancelablePromise<{
        message?: string;
    }>;
    /**
     * List all custom fields
     * @param limit The number of fields returned per request.
     * @returns any 200
     * @throws ApiError
     */
    listAllCustomFieldsMeta(limit?: number): CancelablePromise<{
        accountCustomFieldMeta?: Array<{
            id?: string;
            fieldLabel?: string;
            fieldType?: string;
            fieldOptions?: any;
            fieldDefault?: number;
            fieldDefaultCurrency?: any;
            isFormVisible?: number;
            isRequired?: number;
            displayOrder?: number;
            personalization?: string;
            knownFieldId?: any;
            hideFieldFlag?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: {
                accountCustomFieldData?: string;
            };
        }>;
    }>;
    /**
     * Create a custom field
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createACustomfieldmeta(requestBody?: {
        accountCustomFieldMetum?: {
            /**
             * Name of the field
             */
            fieldLabel: string;
            /**
             * Type of field. Possible values are: `text`, `textarea`, `date`, `datetime`, `dropdown`, `multiselect`, `radio`, `checkbox`, `hidden`, `currency`, or `number`.
             */
            fieldType: string;
            /**
             * Options for the field. Only necessary if `field_type` is `dropdown`, `multiselect`, `radio`, or `checkbox`.
             */
            fieldOptions?: Array<string>;
            /**
             * Default value of the field
             */
            fieldDefault?: string;
            /**
             * The 3-letter currency code of the default currency for the field. Only necessary if `field_type` is `currency`.
             */
            fieldDefaultCurrency?: string;
            /**
             * Whether or not the field is visible on forms
             */
            isFormVisible?: boolean;
            /**
             * Order for displaying the field on Manage Fields page and deal profiles
             */
            displayOrder?: number;
            /**
             * 0 (Not required) or 1 (Required)
             */
            isRequired?: number;
        };
    }): CancelablePromise<{
        accountCustomFieldMetum?: {
            id?: string;
            fieldLabel?: string;
            fieldType?: string;
            fieldOptions?: any;
            fieldDefault?: string;
            isFormVisible?: number;
            isRequired?: number;
            displayOrder?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: {
                accountCustomFieldData?: string;
            };
        };
    }>;
    /**
     * Create a custom field value
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createACustomFieldValue(requestBody?: {
        accountCustomFieldDatum?: {
            /**
             * The ID of the account this field value relates to
             */
            customerAccountId: number;
            /**
             * The ID of the custom field metum this field value relates to
             */
            customFieldId: number;
            /**
             * Values for the field. (For `currency` field only, this needs to be in cents: eg, 10050 = 100.5)
             */
            fieldValue: string;
            /**
             * Currency code for the money value
             */
            fieldCurrency?: string;
        };
    }): CancelablePromise<{
        accountCustomFieldDatum?: {
            id?: string;
            accountCustomFieldMetumId?: number;
            accountId?: number;
            customFieldId?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            fieldValue?: string;
            links?: {
                account?: string;
                accountCustomFieldMetum?: string;
            };
        };
    }>;
    /**
     * List all custom field values
     * @param filtersCustomerAccountId Filter results by a specific account (note that Id uses a capital I)
     * @returns any 200
     * @throws ApiError
     */
    listAllCustomFieldValues2(filtersCustomerAccountId?: string): CancelablePromise<{
        accountCustomFieldData?: Array<{
            id?: string;
            accountCustomFieldMetumId?: number;
            accountId?: number;
            customFieldId?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            fieldValue?: string;
            links?: {
                account?: string;
                accountCustomFieldMetum?: string;
            };
        }>;
    }>;
    /**
     * Bulk create a custom account field value
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    bulkCreateACustomAccountFieldValue(requestBody?: {
        array?: {
            /**
             * The ID of the account this field value relates to
             */
            customerAccountId: number;
            /**
             * The ID of the custom field metum this field value relates to
             */
            customFieldId: number;
            /**
             * Values for the field. (For currency field only, this needs to be in cents: eg, 10050 = 100.5)
             */
            fieldValue: string;
            /**
             * Currency code for the money value
             */
            fieldCurrency?: string;
        };
    }): CancelablePromise<{
        message?: string;
    }>;
    /**
     * Retrieve a custom field value
     * @param id ID of the dealCustomFieldData to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveACustomFieldValue(id: number): CancelablePromise<{
        accountCustomFieldDatum?: {
            id?: string;
            accountId?: number;
            customFieldId?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            fieldValue?: string;
            links?: {
                account?: string;
                accountCustomFieldMetum?: string;
            };
        };
    }>;
    /**
     * Update a custom field value
     * @param id ID of the custom fields value to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateACustomFieldValue(id: number, requestBody?: {
        accountCustomFieldDatum?: {
            /**
             * Values for text
             */
            fieldValue?: string;
            /**
             * Currency code for the `currency` value
             */
            fieldCurrency?: string;
        };
    }): CancelablePromise<{
        accountCustomFieldDatum?: {
            id?: string;
            accountId?: number;
            customFieldId?: number;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            fieldValue?: string;
            links?: {
                account?: string;
                accountCustomFieldMetum?: string;
            };
        };
    }>;
    /**
     * Delete a custom field value
     * @param id ID of the dealCustomFieldData to retrieve
     * @returns any 200
     * @throws ApiError
     */
    deleteACustomFieldValue(id: number): CancelablePromise<{
        message?: string;
    }>;
    /**
     * Bulk update a custom field value
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    bulkUpdateACustomAccountFieldValue(requestBody?: {
        array?: {
            /**
             * ID of the dealCustomFieldData to update
             */
            id: number;
            /**
             * Values for the field. (For currency field only, this needs to be in cents: eg, 10050 = 100.5)
             */
            fieldValue: string;
            /**
             * Currency code for the money value
             */
            fieldCurrency?: string;
        };
    }): CancelablePromise<{
        message?: string;
    }>;
    /**
     * Create an account note
     * Create a new note for an account
     * @param id Account's id to assign new note to
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createAnAccountNote(id: string, requestBody?: {
        note?: {
            /**
             * Account note's content
             */
            note: string;
        };
    }): CancelablePromise<{
        accounts?: Array<{
            name?: string;
            accountUrl?: string;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            id?: string;
        }>;
        note?: {
            cdate?: string;
            id?: string;
            links?: {
                activities?: string;
                mentions?: string;
                notes?: string;
                owner?: string;
                user?: string;
            };
            mdate?: string;
            note?: string;
            owner?: {
                id?: string;
                type?: string;
            };
            relid?: string;
            reltype?: string;
            user?: string;
            userid?: string;
        };
    }>;
    /**
     * Update an account note
     * Update an existing note for a account
     * @param id Account's id to assign new note to
     * @param noteid Account note's id to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAAccountNote(id: string, noteid: string, requestBody?: {
        note?: {
            /**
             * Account note's content
             */
            note: string;
        };
    }): CancelablePromise<{
        accounts?: Array<{
            name?: string;
            accountUrl?: string;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: {
                notes?: string;
            };
            id?: string;
        }>;
        note?: {
            cdate?: string;
            id?: string;
            links?: {
                activities?: string;
                mentions?: string;
                notes?: string;
                owner?: string;
                user?: string;
            };
            mdate?: string;
            note?: string;
            owner?: {
                id?: string;
                type?: string;
            };
            relid?: string;
            reltype?: string;
            user?: string;
            userid?: string;
        };
    }>;
    /**
     * Bulk delete accounts
     * Delete an existing account
     * @param ids Array with integers representing ID's of accounts to be deleted
     * @returns any 200
     * @throws ApiError
     */
    bulkDeleteAccounts(ids: Array<number>): CancelablePromise<any>;
    /**
     * Create an association
     * Create a new account association
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createAnAccount1(requestBody?: {
        accountContact?: {
            /**
             * Account ID
             */
            account: number;
            /**
             * Contact ID
             */
            contact: number;
            /**
             * Job Title of the contact at the account
             */
            jobTitle?: string;
        };
    }): CancelablePromise<{
        accountContact?: {
            account?: number;
            contact?: number;
            jobTitle?: string;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: {
                account?: string;
                contact?: string;
            };
            id?: string;
        };
    }>;
    /**
     * List all associations
     * Retrieve all existing account association
     * @param filtersContact Filter by Contact ID
     * @param filtersAccount Filter by Account ID
     * @returns any 200
     * @throws ApiError
     */
    listAllAssociations1(filtersContact?: number, filtersAccount?: number): CancelablePromise<{
        accountContacts?: Array<{
            account?: string;
            contact?: string;
            jobTitle?: string;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: {
                account?: string;
                contact?: string;
            };
            id?: string;
        }>;
        meta?: {
            total?: string;
            queryLog?: {
                queries?: Array<{
                    stmt?: string;
                    time?: number;
                }>;
                by_time?: Array<{
                    stmt?: string;
                    time?: number;
                }>;
                total?: number;
                mode?: string;
            };
        };
    }>;
    /**
     * Retrieve an association
     * Retrieve an existing account association
     * @param id Association's ID
     * @returns any 200
     * @throws ApiError
     */
    retrieveAnAssociation(id: number): CancelablePromise<{
        accountContact?: {
            account?: string;
            contact?: string;
            jobTitle?: string;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: {
                account?: string;
                contact?: string;
            };
            id?: string;
        };
        meta?: {
            queryLog?: {
                queries?: Array<{
                    stmt?: string;
                    time?: number;
                }>;
                by_time?: Array<{
                    stmt?: string;
                    time?: number;
                }>;
                total?: number;
                mode?: string;
            };
        };
    }>;
    /**
     * Update an association
     * Update an existing account association
     * @param id Association's ID
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAnAssociation1(id: number, requestBody?: {
        accountContact?: {
            /**
             * Account ID
             */
            account: number;
            /**
             * Contact ID
             */
            contact: number;
            /**
             * Job Title of the contact at the account
             */
            jobTitle?: string;
        };
    }): CancelablePromise<{
        accountContact?: {
            account?: string;
            contact?: string;
            jobTitle?: string;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: {
                account?: string;
                contact?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Delete an association
     * Delete an existing account association
     * @param id Association's ID
     * @returns any 200
     * @throws ApiError
     */
    deleteAnAssociation1(id: number): CancelablePromise<any>;
    /**
     * Update an order
     * Update an existing ecommerce order/cart resource.
     * @param id The ID of the order to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateOrder(id: string, requestBody?: {
        ecomOrder?: {
            /**
             * The id of the order in the external service. ONLY REQUIRED IF EXTERNALCHECKOUTID NOT INCLUDED.
             */
            externalid?: string;
            /**
             * The id of the cart in the external service. ONLY REQUIRED IF EXTERNALID IS NOT INCLUDED.
             */
            externalcheckoutid?: string;
            /**
             * The email address of the customer who placed the order.
             */
            email?: string;
            /**
             * ecomOrder.orderProducts.description
             */
            orderProducts?: {
                /**
                 * The name of the product
                 */
                name?: string;
                /**
                 * The price of the product, in cents. (i.e. $456.78 => 45678). Must be greater than or equal to zero.
                 */
                price?: number;
                /**
                 * The quantity ordered.
                 */
                quantity?: number;
                /**
                 * The id of the product in the external service.
                 */
                externalid?: string;
                /**
                 * The category of the product.
                 */
                category?: string;
                /**
                 * The SKU for the product
                 */
                sku?: string;
                /**
                 * The description of the product
                 */
                description?: string;
                /**
                 * An Image URL that displays an image of the product
                 */
                imageUrl?: string;
                /**
                 * A URL linking to the product in your store
                 */
                productUrl?: string;
            };
            /**
             * The total price of the order in cents, including tax and shipping charges. (i.e. $456.78 => 45678). Must be greater than or equal to zero.
             */
            totalPrice?: number;
            /**
             * The total shipping amount in cents for the order
             */
            shippingAmount?: number;
            /**
             * The total tax amount for the order in cents
             */
            taxAmount?: number;
            /**
             * The total discount amount for the order in cents
             */
            discountAmount?: number;
            /**
             * The currency of the order (3-digit ISO code, e.g., 'USD').
             */
            currency?: string;
            /**
             * The URL for the order in the external service.
             */
            orderUrl?: string;
            /**
             * The date the order was updated.
             */
            externalUpdatedDate?: string;
            /**
             * The date the cart was abandoned. REQUIRED ONLY IF INCLUDING EXTERNALCHECKOUTID.
             */
            abandonedDate?: string;
            /**
             * The shipping method of the order.
             */
            shippingMethod?: string;
            /**
             * The order number in your system. This can be different than the external ID.
             */
            orderNumber?: string;
            orderDiscounts?: {
                /**
                 * The discount code or name of the discount
                 */
                name?: string;
                /**
                 * The type of discount, either 'order' for discount on the order, or 'shipping' for free shipping.
                 */
                type?: string;
                /**
                 * The amount of the discount in cents.
                 */
                discountAmount?: string;
            };
        };
    }): CancelablePromise<{
        ecomOrderProducts?: Array<{
            orderid?: string;
            connectionid?: string;
            externalid?: string;
            sku?: string;
            name?: string;
            description?: string;
            price?: string;
            quantity?: string;
            category?: string;
            imageUrl?: string;
            productUrl?: string;
            createdDate?: string;
            updatedDate?: string;
            tstamp?: string;
            links?: {
                ecomOrder?: string;
            };
            id?: string;
            ecomOrder?: string;
        }>;
        ecomOrderDiscounts?: Array<{
            name?: string;
            type?: string;
            orderid?: string;
            discountAmount?: string;
            id?: string;
            createdDate?: string;
            updatedDate?: string;
        }>;
        ecomOrder?: {
            customerid?: string;
            connectionid?: string;
            state?: string;
            source?: string;
            externalid?: string;
            orderNumber?: string;
            email?: string;
            totalPrice?: number;
            discountAmount?: number;
            shippingAmount?: number;
            taxAmount?: number;
            totalProducts?: number;
            currency?: string;
            shippingMethod?: string;
            orderUrl?: string;
            externalCreatedDate?: string;
            externalUpdatedDate?: string;
            createdDate?: string;
            updatedDate?: string;
            orderProducts?: Array<string>;
            orderDiscounts?: Array<string>;
            customer?: string;
            orderDate?: string;
            tstamp?: string;
            links?: {
                connection?: string;
                customer?: string;
                orderProducts?: string;
                orderDiscounts?: string;
                orderActivities?: string;
            };
            id?: string;
            connection?: string;
        };
    }>;
    /**
     * List EcomOrderProducts for a Specific EcomOrder
     * @param id The ID of the order whose products you'd like returned.
     * @returns any 200
     * @throws ApiError
     */
    listProductsForOrder(id: string): CancelablePromise<{
        ecomOrderProducts?: Array<{
            orderid?: string;
            connectionid?: string;
            externalid?: string;
            sku?: string;
            name?: string;
            description?: string;
            price?: string;
            quantity?: string;
            category?: string;
            imageUrl?: string;
            productUrl?: string;
            createdDate?: string;
            updatedDate?: string;
            tstamp?: string;
            links?: {
                ecomOrder?: string;
            };
            id?: string;
            ecomOrder?: string;
        }>;
    }>;
    /**
     * List EcomOrderProducts
     * @returns any 200
     * @throws ApiError
     */
    listEcomorderproducts(): CancelablePromise<{
        ecomOrderProducts?: Array<{
            orderid?: string;
            connectionid?: string;
            externalid?: string;
            sku?: string;
            name?: string;
            description?: string;
            price?: string;
            quantity?: string;
            category?: string;
            imageUrl?: string;
            productUrl?: string;
            createdDate?: string;
            updatedDate?: string;
            tstamp?: string;
            links?: {
                ecomOrder?: string;
            };
            id?: string;
            ecomOrder?: string;
        }>;
    }>;
    /**
     * Retrieve an EcomOrderProduct
     * @param id The ID of the product you'd like returned.
     * @returns any 200
     * @throws ApiError
     */
    retrieveAnEcomorderproduct(id: string): CancelablePromise<{
        ecomOrderProduct?: {
            orderid?: string;
            connectionid?: string;
            externalid?: string;
            sku?: string;
            name?: string;
            description?: string;
            price?: string;
            quantity?: string;
            category?: string;
            imageUrl?: string;
            productUrl?: string;
            createdDate?: string;
            updatedDate?: string;
            tstamp?: string;
            links?: {
                ecomOrder?: string;
            };
            id?: string;
            ecomOrder?: string;
        };
    }>;
    /**
     * Sync a contact's data
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    syncAContactsData(requestBody?: {
        contact?: {
            /**
             * Email address of the contact to sync
             */
            email: string;
            firstName?: string;
            lastName?: string;
            phone?: string;
            /**
             * Contact's custom field values [{field, value}]
             */
            fieldValues?: any[];
            /**
             * (Deprecated) Please use Account-Contact end points
             */
            orgid?: number;
            /**
             * (Deprecated) Please use the DELETE endpoint
             */
            deleted?: boolean;
        };
    }): CancelablePromise<{
        fieldValues?: Array<{
            contact?: string;
            field?: string;
            value?: string;
            cdate?: string;
            udate?: string;
            created_by?: any;
            updated_by?: any;
            links?: {
                owner?: string;
                field?: string;
            };
            id?: string;
            owner?: string;
        }>;
        contact?: {
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
            email_empty?: boolean;
            cdate?: string;
            udate?: string;
            orgid?: string;
            orgname?: string;
            links?: {
                bounceLogs?: string;
                contactAutomations?: string;
                contactData?: string;
                contactGoals?: string;
                contactLists?: string;
                contactLogs?: string;
                contactTags?: string;
                contactDeals?: string;
                deals?: string;
                fieldValues?: string;
                geoIps?: string;
                notes?: string;
                organization?: string;
                plusAppend?: string;
                trackingLogs?: string;
                scoreValues?: string;
                accountContacts?: string;
                automationEntryCounts?: string;
            };
            hash?: string;
            fieldValues?: Array<string>;
            id?: string;
            organization?: string;
        };
    }>;
    /**
     * Bulk import contacts
     * @param contentType
     * @param apiToken
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    bulkImportContacts(contentType?: string, apiToken?: string, requestBody?: {
        /**
         * An array of objects containing information about a single contact. Up to 250 contacts may be included in a single request. The suggested minimum number of contacts is 10. If less than that, then contact/sync api request should be used.
         */
        contacts: Array<{
            /**
             * The contact's email.
             */
            email: string;
            /**
             * The contact's first name
             */
            first_name?: string;
            /**
             * The contact's last name.
             */
            last_name?: string;
            /**
             * The contact’s phone number.
             */
            phone?: string;
            /**
             * The name of the contact’s account.
             */
            customer_acct_name?: string;
            /**
             * Each string in the array will be added as a single tag to the contact. New tags will be created if they do not already exist.
             */
            tags?: Array<string>;
            /**
             * A list of custom fields to apply to the contact. Each field must contain two fields: Each contact may have up to N custom fields.
             */
            fields?: Array<{
                /**
                 * The ID of the custom field. Custom fields must be referenced by the ID that ActiveCampaign assigns to them. You can retrieve the ID number for a custom field by using the "List all custom fields" API call.
                 */
                id: number;
                /**
                 * The value of the custom field. Multiple values may be populated for multi-value fields by separating the different values by the double-pipe delimiter (“||”).
                 */
                value: string;
            }>;
            /**
             * An array of lists to subscribe the contact to. Contacts may not be subscribed to lists which they have previously unsubscribed from. Each list object contains a single field.
             */
            subscribe?: Array<{
                /**
                 * The ID of the list to subscribe the contact to or unsubscribe the contact from. Lists must be referenced by the ID that ActiveCampaign assigns to them.  You can find the list ID by clicking the list in your ActiveCampaign account then viewing the URL bar. It will look something like this: /app/contacts/?listid=19&status=1  You can also retrieve the ID number for a list by using the "Retrieve all lists" API call.
                 */
                listid?: string;
            }>;
            /**
             * An array of lists to unsubscribe the contact to. Each list object contains a single field.
             */
            unsubscribe?: Array<{
                /**
                 * The ID of the list to subscribe the contact to or unsubscribe the contact from. Lists must be referenced by the ID that ActiveCampaign assigns to them.  You can find the list ID by clicking the list in your ActiveCampaign account then viewing the URL bar. It will look something like this: /app/contacts/?listid=19&status=1  You can also retrieve the ID number for a list by using the "Retrieve all lists" API call.
                 */
                listid?: string;
            }>;
        }>;
        /**
         * Callback function to notify users when an import is complete.
         */
        callback?: {
            /**
             * The URL endpoint which the importer will make a request to once the import has completed.
             */
            url: string;
            /**
             * Can be set to either “GET” or “POST”. Determines the type of HTTP request which will be sent to the specified endpoint.
             */
            requestType: string;
            /**
             * When set to “true” and the requestType parameter is set to “POST”, the callback will include the number of successes and failures in the originating request, as well as an array of error messages for each failed contact.
             */
            detailed_results?: string;
            /**
             * A list of parameters to include in the callback request. Add each parameter in the form of a key-value pair. For a GET request, each parameter will be appended to the end of the URL in a query string. For a POST request, parameters will be included in the body of the request.
             */
            params?: Array<{
                key?: string;
                value?: string;
            }>;
            /**
             * A list of headers to include in the callback request. Add each header in the form of a key-value pair.
             */
            headers?: Array<{
                key?: string;
                value?: string;
            }>;
        };
    }): CancelablePromise<{
        Success?: number;
        queued_contacts?: number;
        batchId?: string;
        message?: string;
    }>;
    /**
     * Bulk import status list
     * @returns any 200
     * @throws ApiError
     */
    bulkImportStatusList(): CancelablePromise<any>;
    /**
     * List all contact activities
     * View a contact's recent activity. The activity is generated when a contact is retrieved via /api/3/contacts/[contactID]. This endpoint should be used after retrieving a contact to obtain the latest data. This is useful for searching for contacts that match certain criteria - such as being part of a certain list, or having a specific custom field value.
     * @param contact Required Contact ID
     * @param after Filter for activities after a specific DateTime
     * @param include Activities to include: notes, notes.user, recipients, recipients.recipient, reference, reference.automation, reference.campaign, reference.campaign.campaignList, reference.campaign.campaignMessage, reference.campaignMessage, reference.contact, reference.contactList, reference.contactList.list, reference.deal, reference.deal.contact, reference.dealTasktype, reference.link, reference.list, reference.log, reference.log.campaign, reference.log.contact, reference.log.message, reference.message, reference.note, reference.sms, reference.sms.automation, user
     * @param emails
     * @param ordersTstamp Order activities by tstamp
     * @returns any 200
     * @throws ApiError
     */
    listContactActivities(contact?: number, after?: string, include?: string, emails?: boolean, ordersTstamp?: string): CancelablePromise<{
        scoreValues?: any[];
        contacts?: Array<{
            cdate?: string;
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
            orgid?: string;
            segmentio_id?: string;
            bounced_hard?: string;
            bounced_soft?: string;
            bounced_date?: string;
            ip?: string;
            ua?: string;
            hash?: string;
            socialdata_lastcheck?: string;
            email_local?: string;
            email_domain?: string;
            sentcnt?: string;
            rating_tstamp?: string;
            gravatar?: string;
            deleted?: string;
            anonymized?: string;
            udate?: string;
            deleted_at?: string;
            scoreValues?: any[];
            links?: {
                bounceLogs?: string;
                contactAutomations?: string;
                contactData?: string;
                contactGoals?: string;
                contactLists?: string;
                contactLogs?: string;
                contactTags?: string;
                contactDeals?: string;
                deals?: string;
                fieldValues?: string;
                geoIps?: string;
                notes?: string;
                organization?: string;
                plusAppend?: string;
                trackingLogs?: string;
                scoreValues?: string;
            };
            id?: string;
            organization?: any;
        }>;
        meta?: {
            total?: string;
            page_input?: {
                segmentid?: number;
                formid?: number;
                listid?: number;
                tagid?: number;
                limit?: number;
                offset?: number;
                search?: any;
                sort?: any;
                seriesid?: number;
                waitid?: number;
                status?: number;
                forceQuery?: number;
                cacheid?: string;
            };
        };
    }>;
    /**
     * List all schemas
     * Retrieve all schemas available within an account.
     *
     * Users are encouraged to leverage the `?showFields=all` query parameter when programmatically creating new schema fields, to ensure field id uniqueness. Fields that have been deleted will contain a `status: marked_for_deletion` attribute.
     * @param limit The number of schemas to retrieve for each API call. Maximum value is 100.
     * @param offset Offset index of items to return
     * @param orders Array of sorting criteria to fetch items
     * @param filters Filters schemas by different criteria
     * @param showFields Toggle which fields are shown in the response body of a schema (if there hidden due to e.g. recently being deleted). Omit this parameter entirely to hide fields by default.
     * @returns any 200
     * @throws ApiError
     */
    listAllSchemas(limit?: number, offset?: number, orders?: Array<string>, filters?: string, showFields?: string): CancelablePromise<{
        schemas?: Array<{
            id?: string;
            slug?: string;
            visibility?: string;
            labels?: {
                singular?: string;
                plural?: string;
            };
            description?: string;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            fields?: Array<{
                id?: string;
                labels?: {
                    singular?: string;
                    plural?: string;
                };
                type?: string;
                required?: boolean;
                scale?: number;
            }>;
            icons?: {
                default?: string;
            };
            relationships?: Array<{
                id?: string;
                labels?: {
                    singular?: string;
                    plural?: string;
                };
                description?: string;
                namespace?: string;
                hasMany?: boolean;
            }>;
        }>;
        meta?: {
            total?: number;
            count?: number;
            limit?: number;
            offset?: number;
        };
    }>;
    /**
     * Create a schema
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createASchema(requestBody?: {
        /**
         * schema.description
         */
        schema?: {
            slug?: string;
            labels?: {
                /**
                 * Singular label for Schema
                 */
                singular?: string;
                /**
                 * Plural label for Schema
                 */
                plural?: string;
            };
            /**
             * Description of the Schema
             */
            description?: string;
            /**
             * List of Schema fields
             */
            fields?: Array<{
                id?: string;
                slug?: string;
                labels?: {
                    /**
                     * human-readable singular name
                     */
                    singular?: string;
                    /**
                     * human-readable plural name
                     */
                    plural?: string;
                };
                type?: string;
                scale?: number;
                isRequired?: boolean;
            }>;
            relationships?: Array<{
                id?: string;
                labels?: {
                    /**
                     * human-readable singular name
                     */
                    singular?: string;
                    /**
                     * human-readable plural name
                     */
                    plural?: string;
                };
                description?: string;
                namespace?: string;
                hasMany?: boolean;
            }>;
        };
    }): CancelablePromise<{
        schema?: {
            id?: string;
            slug?: string;
            visibility?: string;
            labels?: {
                singular?: string;
                plural?: string;
            };
            description?: string;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            fields?: Array<{
                id?: string;
                labels?: {
                    singular?: string;
                    plural?: string;
                };
                type?: string;
                required?: boolean;
                scale?: number;
            }>;
            icons?: {
                default?: string;
            };
            relationships?: Array<{
                id?: string;
                labels?: {
                    singular?: string;
                    plural?: string;
                };
                description?: string;
                namespace?: string;
                hasMany?: boolean;
            }>;
        };
    }>;
    /**
     * Retrieve a schema
     * Retrieve a specific schema by id.
     *
     * Users are encouraged to leverage the `?showFields=all` query parameter when programmatically creating new schema fields, to ensure field id uniqueness. Fields that have been deleted will contain a `status: marked_for_deletion` attribute.
     * @param id Id of the Schema
     * @param showFields Toggle which fields are shown in the response body of a schema (if there hidden due to e.g. recently being deleted). Omit this parameter entirely to hide fields by default.
     * @returns any 200
     * @throws ApiError
     */
    retrieveASchema(id: string, showFields?: string): CancelablePromise<{
        schema?: {
            id?: string;
            slug?: string;
            visibility?: string;
            labels?: {
                singular?: string;
                plural?: string;
            };
            description?: string;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            fields?: Array<{
                id?: string;
                labels?: {
                    singular?: string;
                    plural?: string;
                };
                type?: string;
                required?: boolean;
                scale?: number;
            }>;
            icons?: {
                default?: string;
            };
            relationships?: Array<{
                id?: string;
                labels?: {
                    singular?: string;
                    plural?: string;
                };
                description?: string;
                namespace?: string;
                hasMany?: boolean;
            }>;
        };
    }>;
    /**
     * Delete a schema
     * @param id Id of schema to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteASchema(id: string): CancelablePromise<any>;
    /**
     * Update a schema
     * Make an update to a given schema.
     *
     * To delete a schema field, reference the field delete endpoint: https://developers.activecampaign.com/reference/delete-a-field-1
     *
     * Users are encouraged to leverage the `?showFields=all` query parameter when programmatically creating new schema fields, to ensure field id uniqueness. Fields that have been deleted will contain a `status: marked_for_deletion` attribute.
     * @param schemaId Id of Schema being updated
     * @param validateOnly When set to `true` the API will validate the schema update without saving changes
     * @param showFields Toggle which fields are shown in the response body of a schema (if there hidden due to e.g. recently being deleted). Omit this parameter entirely to hide fields by default.
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateASchema(schemaId: string, validateOnly?: boolean, showFields?: string, requestBody?: {
        /**
         * schema.description
         */
        schema?: {
            slug?: string;
            labels?: {
                /**
                 * Singular label for Schema
                 */
                singular?: string;
                /**
                 * Plural label for Schema
                 */
                plural?: string;
            };
            /**
             * Text description of the Schema
             */
            description?: string;
            appId?: string;
            fields?: Array<{
                /**
                 * id of the field
                 */
                id?: string;
                /**
                 * Data type, appropriate for the field
                 */
                value?: any;
            }>;
            icons?: {
                /**
                 * URI location of the default icon shown on Schema
                 */
                default?: string;
            };
            relationships?: {
                id?: string;
                labels?: {
                    /**
                     * human-readable singular name
                     */
                    singular?: string;
                    /**
                     * human-readable plural name
                     */
                    plural?: string;
                };
                description?: string;
                namespace?: string;
                hasMany?: boolean;
            };
        };
    }): CancelablePromise<{
        schema?: {
            id?: string;
            slug?: string;
            labels?: {
                singular?: string;
                plural?: string;
            };
            description?: string;
            appId?: string;
            fields?: Array<{
                id?: string;
                labels?: {
                    singular?: string;
                    plural?: string;
                };
                description?: string;
                isRequired?: boolean;
                origin?: string;
                type?: string;
            }>;
            icons?: {
                default?: string;
            };
            relationships?: Array<{
                id?: string;
                labels?: {
                    singular?: string;
                    plural?: string;
                };
                description?: string;
                namespace?: string;
                hasMany?: boolean;
            }>;
            createdTimestamp?: string;
            updatedTimestamp?: string;
        };
    }>;
    /**
     * List records by schema
     * @param schemaId ID of schema
     * @param filters Use ?filters[relationships.{your-contact-relationship}][eq]={contactId} to filter records to a specific contact.
     * @param limit The number of records to return for each call. Maximum value is 100.
     * @param offset Offset index of records to return
     * @returns any 200
     * @throws ApiError
     */
    listRecordsCreatedFromASchema(schemaId: string, filters: Array<string>, limit?: number, offset?: number): CancelablePromise<{
        records?: Array<{
            id?: string;
            externalId?: string;
            schemaId?: string;
            fields?: Array<{
                id?: string;
                value?: number;
            }>;
            relationships?: {
                'primary-contact'?: Array<string>;
            };
            createdTimestamp?: string;
            updatedTimestamp?: string;
        }>;
        meta?: {
            total?: number;
            count?: number;
            limit?: number;
            offset?: number;
        };
    }>;
    /**
     * Create or update record
     * @param schemaId ID of schema
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createOrUpdateRecord(schemaId: string, requestBody?: {
        record?: {
            /**
             * The Record's id
             */
            id?: string;
            /**
             * The Record's external id
             */
            externalId?: string;
            fields?: Array<{
                /**
                 * id of the field
                 */
                id?: string;
                /**
                 * Data type, appropriate for the field
                 */
                value?: any;
            }>;
            relationships?: Array<{
                /**
                 * List of Contact integers
                 */
                'primary-contact'?: Array<number>;
            }>;
        };
    }): CancelablePromise<{
        record?: {
            id?: string;
            externalId?: string;
            schemaId?: string;
            fields?: Array<{
                id?: string;
                value?: number;
            }>;
            relationships?: {
                account?: Array<number>;
            };
        };
    }>;
    /**
     * Get a record by id
     * @param schemaId ID of schema
     * @param recordId ID of record
     * @returns any 200
     * @throws ApiError
     */
    getASingleRecord(schemaId: string, recordId: string): CancelablePromise<{
        record?: {
            id?: string;
            externalId?: string;
            schemaId?: string;
            fields?: Array<{
                id?: string;
                value?: number;
            }>;
            relationships?: {
                'primary-contact'?: Array<string>;
            };
            createdTimestamp?: string;
            updatedTimestamp?: string;
        };
    }>;
    /**
     * Delete a record by id
     * @param schemaId ID of schema
     * @param recordId ID of record
     * @returns any 202
     * @throws ApiError
     */
    deleteARecord(schemaId: string, recordId: string): CancelablePromise<any>;
    /**
     * Delete a record by external ID
     * @param schemaId ID of schema
     * @param externalId External ID of record
     * @returns any 202
     * @throws ApiError
     */
    deleteARecordByExternalId(schemaId: string, externalId: string): CancelablePromise<any>;
    /**
     * List all deal roles
     * @param search (optional string used to search for matching titles)
     * @returns any 200
     * @throws ApiError
     */
    listAllDealRoles(search?: string): CancelablePromise<{
        dealRoles?: Array<{
            title?: string;
            created_timestamp?: string;
            updated_timestamp?: string;
            links?: {
                contactDeals?: string;
            };
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Create a deal role
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createADealRole(requestBody?: {
        /**
         * Title for the new deal role
         */
        title?: string;
    }): CancelablePromise<{
        dealRole?: {
            title?: string;
            created_timestamp?: string;
            updated_timestamp?: string;
            links?: {
                contactDeals?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Delete a deal role
     * @param id Deal role's id
     * @returns any 200
     * @throws ApiError
     */
    deleteADealRole(id: string): CancelablePromise<any>;
    /**
     * Get a record by external id
     * @param schemdId ID of schema
     * @param externalId External ID for record
     * @returns any 200
     * @throws ApiError
     */
    getASingleRecordUsingExternalId(schemdId: string, externalId: string): CancelablePromise<{
        record?: {
            id?: string;
            externalId?: string;
            schemaId?: string;
            fields?: Array<{
                id?: string;
                value?: number;
            }>;
            relationships?: {
                'primary-contact'?: Array<string>;
            };
            createdTimestamp?: string;
            updatedTimestamp?: string;
        };
    }>;
    /**
     * Create a task outcome
     * Create a new task outcome
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createATaskOutcome(requestBody?: {
        /**
         * Title of the outcome
         */
        title: string;
        /**
         * Sentiment of the outcome. Only three values are currently allowed.
         */
        sentiment: 'Positive' | 'Neutral' | 'or Negative';
        /**
         * 1 is for disabled and 0 is for active outcome.
         */
        disabled?: '0 or 1';
    }): CancelablePromise<{
        taskOutcome?: {
            title?: string;
            sentiment?: string;
            created_by?: string;
            disabled?: string;
            links?: {
                tasktypeOutcomeRels?: string;
                dealTasks?: string;
            };
            id?: string;
        };
    }>;
    /**
     * List all task outcomes
     * Retrieve all existing task outcomes
     * @param filtersSentiment 1 is for Negative, 2 is for Neutral and 3 is for Positive
     * @returns any 200
     * @throws ApiError
     */
    listAllTaskOutcomes(filtersSentiment?: '1' | '2 or 3'): CancelablePromise<{
        taskOutcomes?: Array<{
            title?: string;
            sentiment?: string;
            disabled?: string;
            created_by?: string;
            updated_by?: string;
            created_utc_timestamp?: string;
            updated_utc_timestamp?: string;
            dealTasktype_ids?: any[];
            links?: {
                tasktypeOutcomeRels?: string;
                dealTasks?: string;
            };
            id?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Retrieve a task outcome
     * Retrieve an existing task outcome
     * @param id Task outcome's id
     * @returns any 200
     * @throws ApiError
     */
    retrieveATaskOutcome(id: number): CancelablePromise<{
        taskOutcome?: {
            title?: string;
            sentiment?: string;
            disabled?: string;
            created_by?: string;
            updated_by?: string;
            created_utc_timestamp?: string;
            updated_utc_timestamp?: string;
            dealTasktype_ids?: any[];
            links?: {
                tasktypeOutcomeRels?: string;
                dealTasks?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Delete a task outcome
     * Delete an existing task outcome
     * @param id Task outcome's id
     * @returns any 200
     * @throws ApiError
     */
    deleteATaskOutcome(id: string): CancelablePromise<any>;
    /**
     * Update a task outcome
     * Update an existing task outcome
     * @param id Task outcome's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateATaskOutcome(id: number, requestBody?: {
        /**
         * Task outcome's title. The title should be unique among task outcomes.
         */
        title: string;
        /**
         * Sentiment of the outcome. Only three values are currently allowed.
         */
        sentiment: 'Positive' | 'Neutral' | 'or Negative';
        /**
         * 1 is for disabled and 0 is for active outcome.
         */
        disabled?: '0 or 1';
    }): CancelablePromise<{
        taskOutcome?: {
            title?: string;
            sentiment?: string;
            disabled?: string;
            created_by?: string;
            updated_by?: string;
            created_utc_timestamp?: string;
            updated_utc_timestamp?: string;
            links?: {
                tasktypeOutcomeRels?: string;
                dealTasks?: string;
            };
            id?: string;
        };
    }>;
    /**
     * List all task type - outcome relations
     * Retrieve all existing task type - outcome relations
     * @returns any 200
     * @throws ApiError
     */
    listAllTaskTypeOutcomeRelations(): CancelablePromise<{
        tasktypeOutcomeRels?: Array<{
            tasktype_id?: string;
            outcome_id?: string;
            display_order?: string;
            created_by?: string;
            created_utc_timestamp?: string;
            updated_by?: any;
            updated_utc_timestamp?: string;
            links?: {
                tasktype?: string;
                outcome?: string;
                createdBy?: string;
            };
            id?: string;
            tasktype?: string;
            outcome?: string;
            createdBy?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * WIP Create a task type - outcome relation
     * Create a new task type
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createATaskOutcome1(requestBody?: {
        /**
         * Title of the outcome
         */
        title: string;
        /**
         * Sentiment of the outcome
         */
        sentiment: 'Positive' | 'Neutral' | 'Negative';
    }): CancelablePromise<{
        taskOutcome?: {
            title?: string;
            sentiment?: string;
            created_by?: string;
            disabled?: string;
            links?: {
                tasktypeOutcomeRels?: string;
                dealTasks?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Retrieve a task type - outcome relation
     * Retrieve an existing task type - outcome relation
     * @param id Task type - outcome relation's id
     * @returns any 200
     * @throws ApiError
     */
    retrieveATaskTypeOutcomeRelation(id: number): CancelablePromise<{
        tasktypeOutcomeRel?: {
            tasktype_id?: string;
            outcome_id?: string;
            display_order?: string;
            created_by?: string;
            created_utc_timestamp?: string;
            updated_by?: any;
            updated_utc_timestamp?: string;
            links?: {
                tasktype?: string;
                outcome?: string;
                createdBy?: string;
            };
            id?: string;
            tasktype?: string;
            outcome?: string;
            createdBy?: string;
        };
    }>;
    /**
     * WIP Update a task type - outcome relation
     * Update an existing task type
     * @param id Task type - outcome relation's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateATaskOutcome1(id: number, requestBody?: {
        dealTasktype?: {
            /**
             * Deal task type's title. The title should be unique among deal task types.
             */
            title?: string;
        };
    }): CancelablePromise<{
        taskOutcome?: {
            title?: string;
            sentiment?: string;
            disabled?: string;
            created_by?: string;
            updated_by?: string;
            created_utc_timestamp?: string;
            updated_utc_timestamp?: string;
            links?: {
                tasktypeOutcomeRels?: string;
                dealTasks?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Delete a task type - outcome relation
     * Delete an existing task type - outcome relation
     * @param id Task type - outcome relation's id
     * @returns any 200
     * @throws ApiError
     */
    deleteATaskTypeOutcomeRelation(id: number): CancelablePromise<any>;
    /**
     * Create a public schema
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createAPublicSchema(requestBody?: {
        /**
         * schema.description
         */
        schema?: {
            slug?: string;
            appId?: string;
            labels?: {
                /**
                 * human-readable singular name
                 */
                singular?: string;
                /**
                 * human-readable plural name
                 */
                plural?: string;
            };
            description?: string;
            fields?: Array<{
                id?: string;
                slug?: string;
                labels?: {
                    /**
                     * human-readable singular name
                     */
                    singular?: string;
                    /**
                     * human-readable plural name
                     */
                    plural?: string;
                };
                type?: string;
                scale?: number;
                isRequired?: boolean;
            }>;
            relationships?: Array<{
                id?: string;
                labels?: {
                    /**
                     * human-readable singular name
                     */
                    singular?: string;
                    /**
                     * human-readable plural name
                     */
                    plural?: string;
                };
                description?: string;
                namespace?: string;
                hasMany?: boolean;
            }>;
        };
    }): CancelablePromise<{
        schema?: {
            id?: string;
            slug?: string;
            visibility?: string;
            labels?: {
                singular?: string;
                plural?: string;
            };
            description?: string;
            appId?: string;
            fields?: Array<{
                id?: string;
                labels?: {
                    singular?: string;
                    plural?: string;
                };
                type?: string;
            }>;
            relationships?: Array<{
                id?: string;
                labels?: {
                    singular?: string;
                    plural?: string;
                };
                description?: string;
                namespace?: string;
                hasMany?: boolean;
                inherited?: boolean;
            }>;
            icons?: {
                default?: string;
            };
        };
    }>;
    /**
     * Create a child schema
     * @param id Id of the parent schema the new child schema will extend
     * @returns any 200
     * @throws ApiError
     */
    createAChildSchema(id: string): CancelablePromise<{
        schema?: {
            id?: string;
            parentId?: string;
            slug?: string;
            appId?: string;
            visibility?: string;
            labels?: {
                singular?: string;
                plural?: string;
            };
            description?: string;
            fields?: Array<{
                id?: string;
                labels?: {
                    singular?: string;
                    plural?: string;
                };
                type?: string;
                inherited?: boolean;
            }>;
            relationships?: Array<{
                id?: string;
                labels?: {
                    singular?: string;
                    plural?: string;
                };
                description?: string;
                namespace?: string;
                inherited?: boolean;
            }>;
            icons?: {
                default?: string;
            };
        };
    }>;
    /**
     * Bulk import status info
     * @param batchId
     * @returns any 200
     * @throws ApiError
     */
    bulkImportStatusInfo(batchId?: string): CancelablePromise<{
        status?: string;
        success?: Array<string>;
        failure?: Array<string>;
    }>;
    /**
     * Bulk Update Deal Owners
     * Update an existing deal
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    bulkUpdateDealOwners(requestBody?: {
        deals?: Array<{
            /**
             * id of the Deal
             */
            id?: string;
            /**
             * id of the Deal's Owner
             */
            ownerId?: string;
        }>;
    }): CancelablePromise<{
        success?: Array<string>;
        nochange?: Array<string>;
        failed?: any[];
    }>;
    /**
     * Retrieve inaccessible pipelines by user
     * Retrieve pipelines that given user doesn't have access to
     * @param dealIds Deal Ids
     * @param userId User's Id
     * @returns any 200
     * @throws ApiError
     */
    retrieveInaccessiblePipelinesByUser(dealIds: Array<number>, userId: number): CancelablePromise<{
        dealGroups?: Array<{
            title?: string;
            currency?: string;
            autoassign?: string;
            allusers?: string;
            allgroups?: string;
            win_probability_initialize_date?: string;
            cdate?: string;
            udate?: string;
            links?: {
                stages?: string;
                dealGroupUsers?: string;
                dealGroupGroups?: string;
                winProbabilityFeatures?: string;
            };
            id?: string;
        }>;
    }>;
    /**
     * Retrieve a contact's bounce logs
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactBounceLogs(id: number): CancelablePromise<{
        bounceLogs?: Array<{
            tstamp?: string;
            bounceid?: string;
            subscriberid?: string;
            campaignid?: string;
            messageid?: string;
            codeid?: string;
            email?: string;
            error?: string;
            source?: string;
            created_timestamp?: string;
            updated_timestamp?: string;
            created_by?: any;
            updated_by?: any;
            links?: {
                bounce?: string;
                contact?: string;
                campaign?: string;
                message?: string;
                code?: string;
            };
            id?: string;
            bounce?: string;
            contact?: string;
            campaign?: string;
            message?: string;
            code?: string;
        }>;
    }>;
    /**
     * Retrieve a contact's data
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactData(id: number): CancelablePromise<{
        contactDatum?: {
            contact?: string;
            tstamp?: string;
            geoTstamp?: any;
            geoIp4?: string;
            geoCountry2?: string;
            geo_country?: string;
            geoState?: string;
            geoCity?: string;
            geoZip?: string;
            geoArea?: string;
            geoLat?: string;
            geoLon?: string;
            geoTz?: string;
            geoTzOffset?: string;
            ga_campaign_source?: string;
            ga_campaign_name?: string;
            ga_campaign_medium?: string;
            ga_campaign_term?: string;
            ga_campaign_content?: string;
            ga_campaign_customsegment?: string;
            ga_first_visit?: any;
            ga_times_visited?: string;
            fb_id?: string;
            fb_name?: string;
            tw_id?: string;
            created_timestamp?: string;
            updated_timestamp?: string;
            created_by?: string;
            updated_by?: string;
            links?: any[];
            id?: string;
        };
    }>;
    /**
     * Retrieve a contact's goals
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactGoals(id: number): CancelablePromise<{
        contactGoals?: Array<{
            goalid?: string;
            seriesid?: string;
            subscriberid?: string;
            subscriberseriesid?: string;
            timespan?: string;
            tstamp?: string;
            links?: {
                goal?: string;
                automation?: string;
                contact?: string;
                contactAutomation?: string;
                contactGoalLists?: string;
                contactGoalTags?: string;
            };
            id?: string;
            goal?: string;
            automation?: string;
            contact?: string;
            contactAutomation?: string;
        }>;
    }>;
    /**
     * Retrieve a contact's list memberships
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactListMemberships(id: number): CancelablePromise<{
        contactLists?: Array<{
            contact?: string;
            list?: string;
            form?: any;
            seriesid?: string;
            sdate?: string;
            udate?: string;
            status?: string;
            responder?: string;
            sync?: string;
            unsubreason?: any;
            campaign?: any;
            message?: any;
            first_name?: string;
            last_name?: string;
            ip4Sub?: string;
            sourceid?: string;
            autosyncLog?: any;
            ip4_last?: string;
            ip4Unsub?: string;
            created_timestamp?: string;
            updated_timestamp?: string;
            created_by?: any;
            updated_by?: any;
            unsubscribeAutomation?: any;
            links?: {
                automation?: string;
                list?: string;
                contact?: string;
                form?: string;
                autosyncLog?: string;
                campaign?: string;
                unsubscribeAutomation?: string;
                message?: string;
            };
            id?: string;
            automation?: any;
        }>;
    }>;
    /**
     * Retrieve a contact's logs
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactLogs(id: number): CancelablePromise<{
        contactLogs?: any[];
    }>;
    /**
     * Retrieve a list of contact's deals
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactDealsList(id: number): CancelablePromise<{
        contacts?: Array<{
            cdate?: string;
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
            orgid?: string;
            orgname?: string;
            segmentio_id?: string;
            bounced_hard?: string;
            bounced_soft?: string;
            bounced_date?: string;
            ip?: string;
            ua?: string;
            hash?: string;
            socialdata_lastcheck?: string;
            email_local?: string;
            email_domain?: string;
            sentcnt?: string;
            rating_tstamp?: string;
            gravatar?: string;
            deleted?: string;
            anonymized?: string;
            adate?: string;
            udate?: string;
            edate?: string;
            deleted_at?: string;
            created_utc_timestamp?: string;
            updated_utc_timestamp?: string;
            created_timestamp?: string;
            updated_timestamp?: string;
            created_by?: string;
            updated_by?: string;
            email_empty?: boolean;
            mpp_tracking?: string;
            links?: {
                bounceLogs?: string;
                contactAutomations?: string;
                contactData?: string;
                contactGoals?: string;
                contactLists?: string;
                contactLogs?: string;
                contactTags?: string;
                contactDeals?: string;
                deals?: string;
                fieldValues?: string;
                geoIps?: string;
                notes?: string;
                organization?: string;
                plusAppend?: string;
                trackingLogs?: string;
                scoreValues?: string;
                accountContacts?: string;
                automationEntryCounts?: string;
            };
            id?: string;
            organization?: string;
        }>;
        deals?: Array<{
            hash?: string;
            owner?: string;
            contact?: string;
            organization?: string;
            group?: string;
            stage?: string;
            title?: string;
            description?: string;
            percent?: string;
            cdate?: string;
            mdate?: string;
            nextdate?: any;
            nexttaskid?: string;
            value?: string;
            currency?: string;
            winProbability?: any;
            winProbabilityMdate?: any;
            status?: string;
            activitycount?: string;
            nextdealid?: string;
            edate?: string;
            links?: {
                dealActivities?: string;
                contact?: string;
                contactDeals?: string;
                group?: string;
                nextTask?: string;
                notes?: string;
                account?: string;
                customerAccount?: string;
                organization?: string;
                owner?: string;
                scoreValues?: string;
                stage?: string;
                tasks?: string;
                dealCustomFieldData?: string;
            };
            id?: string;
            isDisabled?: boolean;
            nextTask?: any;
            account?: string;
            customerAccount?: string;
        }>;
        contactDeals?: Array<{
            deal?: string;
            contact?: string;
            role?: any;
            cdate?: string;
            created_timestamp?: string;
            updated_timestamp?: string;
            created_by?: any;
            updated_by?: any;
            links?: {
                deal?: string;
                contact?: string;
                role?: string;
            };
            id?: string;
        }>;
    }>;
    /**
     * Retrieve a contact's deals
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactDeals(id: number): CancelablePromise<{
        deals?: Array<{
            hash?: string;
            owner?: string;
            contact?: string;
            organization?: string;
            group?: string;
            stage?: string;
            title?: string;
            description?: string;
            percent?: string;
            cdate?: string;
            mdate?: string;
            nextdate?: any;
            nexttaskid?: any;
            value?: string;
            currency?: string;
            winProbability?: any;
            winProbabilityMdate?: any;
            status?: string;
            activitycount?: string;
            nextdealid?: string;
            edate?: any;
            links?: {
                dealActivities?: string;
                contact?: string;
                contactDeals?: string;
                group?: string;
                nextTask?: string;
                notes?: string;
                account?: string;
                customerAccount?: string;
                organization?: string;
                owner?: string;
                scoreValues?: string;
                stage?: string;
                tasks?: string;
                dealCustomFieldData?: string;
            };
            id?: string;
            isDisabled?: boolean;
            account?: string;
            customerAccount?: string;
        }>;
    }>;
    /**
     * Retrieve a contact's field values
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactFieldValues(id: number): CancelablePromise<{
        fieldValues?: Array<{
            contact?: string;
            field?: string;
            value?: string;
            cdate?: string;
            udate?: string;
            created_by?: string;
            updated_by?: string;
            links?: {
                owner?: string;
                field?: string;
            };
            id?: string;
            owner?: string;
        }>;
    }>;
    /**
     * Retrieve a contacts geo ips
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactGeoIps(id: number): CancelablePromise<{
        geoIps?: Array<{
            contact?: string;
            campaignid?: string;
            messageid?: string;
            geoaddrid?: string;
            ip4?: string;
            tstamp?: string;
            links?: {
                geoAddress?: string;
            };
            id?: string;
            geoAddress?: string;
        }>;
    }>;
    /**
     * Retrieve a contacts notes
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactNotes(id: number): CancelablePromise<{
        notes?: Array<{
            relid?: string;
            reltype?: string;
            userid?: string;
            is_draft?: string;
            cdate?: string;
            mdate?: string;
            note?: string;
            links?: {
                activities?: string;
                user?: string;
                mentions?: string;
                notes?: string;
                owner?: string;
            };
            id?: string;
            user?: string;
            owner?: {
                type?: string;
                id?: string;
            };
        }>;
    }>;
    /**
     * Retrieve a contacts organization
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactOrganization(id: number): CancelablePromise<{
        organization?: {
            name?: string;
            created_timestamp?: string;
            updated_timestamp?: string;
            userid?: string;
            id?: string;
            owner?: string;
        };
    }>;
    /**
     * Retrieve a contacts plus append
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactPlusAppend(id: number): CancelablePromise<{
        plusAppend?: {
            contact?: string;
            last_updated_rapleaf?: any;
            last_updated_fliptop?: any;
            last_updated_fullcontact?: any;
            imageUrl?: string;
            membershipsFacebook?: string;
            membershipsTwitter?: string;
            membershipsLinkedin?: string;
            links?: {
                contact?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Retrieve a contacts tracking logs
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactTrackingLogs(id: number): CancelablePromise<{
        trackingLogs?: any[];
    }>;
    /**
     * Retrieve a contacts account contacts
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactAccountContacts(id: number): CancelablePromise<{
        accountContacts?: Array<{
            account?: string;
            contact?: string;
            jobTitle?: string;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            links?: {
                account?: string;
                contact?: string;
            };
            id?: string;
        }>;
    }>;
    /**
     * Retrieve a contacts automation entry counts
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactAutomationEntryCounts(id: number): CancelablePromise<{
        automationEntryCounts?: Array<{
            id?: string;
            name?: string;
            status?: string;
            hidden?: string;
            contactEntryCount?: string;
        }>;
    }>;
    /**
     * List All Group Limits
     * @returns any 200
     * @throws ApiError
     */
    listAllGroupLimits(): CancelablePromise<{
        groupLimits?: Array<{
            groupid?: string;
            limitMail?: string;
            limitMailType?: string;
            limitContact?: string;
            limitList?: string;
            limitCampaign?: string;
            limitCampaignType?: string;
            limitAttachment?: string;
            limitUser?: string;
            abuseRatio?: string;
            forceSenderInfo?: string;
            links?: {
                group?: string;
            };
            id?: string;
            group?: string;
        }>;
        meta?: {
            total?: string;
        };
    }>;
    /**
     * Local Events
     * Published by TrackCmp. Creates an em_local_event row in production database.
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    localEvents(requestBody?: {
        /**
         * Data about local event sent by TrackCmp
         */
        localEvent?: {
            /**
             * Email of the contact
             */
            email?: string;
            /**
             * Time the event happened.
             */
            tstamp?: string;
            /**
             * Example: "{\"event\":\"__pagevisit\",\"url\":\"www.url.com\"}"
             */
            input?: string;
        };
    }): CancelablePromise<any>;
    /**
     * Delete a custom field relationship to list(s)
     * @param fieldRelId Field relationship ID to be deleted
     * @returns any 200
     * @throws ApiError
     */
    deleteACustomFieldRelationshipToLists(fieldRelId: number): CancelablePromise<any>;
    /**
     * Create a task reminder
     * Create a new task outcome
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createATaskReminder(requestBody?: {
        /**
         * Id of task
         */
        dealTask: string;
        /**
         * Amount of time/minutes that a reminder will be sent to a task assignee ahead of task's due date.
         */
        interval: number;
    }): CancelablePromise<{
        taskNotification?: {
            title?: string;
            sentiment?: string;
            created_by?: string;
            disabled?: string;
            links?: {
                tasktypeOutcomeRels?: string;
                dealTasks?: string;
            };
            id?: string;
        };
    }>;
    /**
     * Delete a field
     * Deleting a schema field is an irreversible process.
     *
     * Assuming a valid `202 Accepted` response is received, any associated field data on associated records will immediately be unavailable to the user. There may be a small delay if record requests are in the midst of processing when the field delete request is issued.
     *
     * The deleted field id will *not* be immediately recycled for reuse. Users are encouraged to leverage the `?showFields=all` query parameter when programmatically creating new schema fields, to ensure field id uniqueness. Fields that have been deleted will contain a `status: marked_for_deletion` attribute.
     *
     * The field delete operation is only permitted for admin users.
     * Field deletion is not permitted on public or child schemas (private schemas only).
     * @param schemaId Schema ID of the field to be deleted
     * @param fieldId Field ID of the field to be deleted
     * @param showFields Toggle which fields are shown in the response body of a schema (if there hidden due to e.g. recently being deleted). Omit this parameter entirely to hide fields by default.
     * @returns any 202
     * @throws ApiError
     */
    deleteAField1(schemaId: string, fieldId: string, showFields?: string): CancelablePromise<{
        schema?: {
            id?: string;
            slug?: string;
            visibility?: string;
            labels?: {
                singular?: string;
                plural?: string;
            };
            description?: string;
            createdTimestamp?: string;
            updatedTimestamp?: string;
            fields?: Array<{
                id?: string;
                labels?: {
                    singular?: string;
                    plural?: string;
                };
                type?: string;
                required?: boolean;
                scale?: number;
                inherited?: boolean;
            }>;
            icons?: {
                default?: string;
            };
            relationships?: Array<{
                id?: string;
                labels?: {
                    singular?: string;
                    plural?: string;
                };
                description?: string;
                namespace?: string;
                hasMany?: boolean;
                inherited?: boolean;
            }>;
        };
    }>;
    /**
     * Get Contact's Tracking Logs/Events
     * Get a log of events for a Contact
     * @param contactId The Contact's ID
     * @returns any 200
     * @throws ApiError
     */
    getContactsTrackingLogsevents(contactId: string): CancelablePromise<{
        trackingLogs?: Array<{
            subscriberid?: string;
            type?: string;
            value?: string;
            tstamp?: string;
            hash?: string;
            links?: {
                contact?: string;
            };
            id?: string;
            contact?: string;
        }>;
    }>;
    /**
     * Get Contact By Event ID
     * Get the contact that was involved in an event.
     * @param eventId The Event's ID
     * @returns any 200
     * @throws ApiError
     */
    getContactByEventId(eventId: string): CancelablePromise<{
        contact?: {
            cdate?: string;
            email?: string;
            phone?: string;
            firstName?: string;
            lastName?: string;
            orgid?: string;
            orgname?: string;
            segmentio_id?: string;
            bounced_hard?: string;
            bounced_soft?: string;
            bounced_date?: string;
            ip?: string;
            ua?: string;
            hash?: string;
            socialdata_lastcheck?: string;
            email_local?: string;
            email_domain?: string;
            sentcnt?: string;
            rating_tstamp?: string;
            gravatar?: string;
            deleted?: string;
            anonymized?: string;
            adate?: string;
            udate?: string;
            edate?: string;
            deleted_at?: string;
            created_utc_timestamp?: string;
            updated_utc_timestamp?: string;
            created_timestamp?: string;
            updated_timestamp?: string;
            created_by?: string;
            updated_by?: string;
            email_empty?: boolean;
            mpp_tracking?: string;
            links?: {
                bounceLogs?: string;
                contactAutomations?: string;
                contactData?: string;
                contactGoals?: string;
                contactLists?: string;
                contactLogs?: string;
                contactTags?: string;
                contactDeals?: string;
                deals?: string;
                fieldValues?: string;
                geoIps?: string;
                notes?: string;
                organization?: string;
                plusAppend?: string;
                trackingLogs?: string;
                scoreValues?: string;
                accountContacts?: string;
                automationEntryCounts?: string;
            };
            id?: string;
            organization?: any;
        };
    }>;
}
//# sourceMappingURL=DefaultActiveCampaign.d.ts.map