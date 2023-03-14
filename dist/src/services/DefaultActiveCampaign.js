"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultActiveCampaign = void 0;
class DefaultActiveCampaign {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Create a webhook
     * Create a new webhook
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createWebhook(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/webhooks',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all webhooks
     * List all existing webhooks
     * @param filtersName Filter by webhook name
     * @param filtersUrl Filter by webhook url
     * @param filtersListid Filter by webhook's associated list
     * @returns any 200
     * @throws ApiError
     */
    getAListOfWebhooks(filtersName, filtersUrl, filtersListid) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/webhooks',
            query: {
                'filters[name]': filtersName,
                'filters[url]': filtersUrl,
                'filters[listid]': filtersListid,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create an order
     * Create a new e-commerce order resource.
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createOrder(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ecomOrders',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
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
    listAllOrders(filtersConnectionid, filtersExternalid, filtersExternalcheckoutid, filtersEmail, filtersState, filtersCustomerid, filtersExternalCreatedDate, ordersConnectionid, ordersExternalid, ordersExternalcheckoutid, ordersEmail, ordersState, ordersCustomerid, ordersExternalCreatedDate) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ecomOrders',
            query: {
                'filters[connectionid]': filtersConnectionid,
                'filters[externalid]': filtersExternalid,
                'filters[externalcheckoutid]': filtersExternalcheckoutid,
                'filters[email]': filtersEmail,
                'filters[state]': filtersState,
                'filters[customerid]': filtersCustomerid,
                'filters[external_created_date]': filtersExternalCreatedDate,
                'orders[connectionid]': ordersConnectionid,
                'orders[externalid]': ordersExternalid,
                'orders[externalcheckoutid]': ordersExternalcheckoutid,
                'orders[email]': ordersEmail,
                'orders[state]': ordersState,
                'orders[customerid]': ordersCustomerid,
                'orders[external_created_date]': ordersExternalCreatedDate,
            },
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * Delete an order
     * Delete an existing e-commerce order resource.
     * @param ecomOrderId The id of the order to delete.
     * @returns any 200
     * @throws ApiError
     */
    deleteOrder(ecomOrderId) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ecomOrders/{ecomOrderId}',
            path: {
                ecomOrderId: ecomOrderId,
            },
        });
    }
    /**
     * Retrieve an order
     * Retrieve an existing e-commerce order resource.
     * @param ecomOrderId The id of the order to retrieve.
     * @returns any 200
     * @throws ApiError
     */
    getOrder(ecomOrderId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ecomOrders/{ecomOrderId}',
            path: {
                ecomOrderId: ecomOrderId,
            },
        });
    }
    /**
     * Retrieve a connection
     * Retrieve an existing connection resource.
     * @param id The id of the connection to retrieve
     * @returns any 200
     * @throws ApiError
     */
    getConnection(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/connections/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Delete a connection
     * Delete an existing connection resource.
     * @param id The id of the connection to delete.
     * @returns any 200
     * @throws ApiError
     */
    deleteConnection(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/connections/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update a connection
     * Update an existing connection resource.
     * @param id The id of the connection to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateConnection(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/connections/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve a customer
     * Retrieve an existing e-commerce customer resource.
     * @param id The id of the customer to retrieve
     * @returns any 200
     * @throws ApiError
     */
    getCustomer(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ecomCustomers/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update a customer
     * Update an existing e-commerce customer resource.
     * @param id The id of the customer to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateCustomer(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/ecomCustomers/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a customer
     * Delete an existing e-commerce customer resource.
     * @param id The id of the customer to delete.
     * @returns any 200
     * @throws ApiError
     */
    deleteCustomer(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/ecomCustomers/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a customer
     * Create a new e-commerce customer resource.
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createCustomer(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ecomCustomers',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * List all customers
     * List all e-commerce customer resources.
     * @param filtersEmail Filter by the email address of a customer.
     * @param filtersExternalid Filter by the id of the customer in the external service.
     * @param filtersConnectionid Filter by the id of the connection object for the service where the customer originates.
     * @returns any 200
     * @throws ApiError
     */
    listAllCustomers(filtersEmail, filtersExternalid, filtersConnectionid) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ecomCustomers',
            query: {
                'filters[email]': filtersEmail,
                'filters[externalid]': filtersExternalid,
                'filters[connectionid]': filtersConnectionid,
            },
        });
    }
    /**
     * List all webhook events
     * List all available webhook events
     * @returns any 200
     * @throws ApiError
     */
    getAListOfWebhookEvents() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/webhook/events',
        });
    }
    /**
     * Retrieve a webhook
     * Retrieve an existing webhook
     * @param id
     * @returns any 200
     * @throws ApiError
     */
    getWebhook(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/webhooks/{id}',
            path: {
                id: id,
            },
        });
    }
    /**
     * Update a webhook
     * Update an existing webhook
     * @param id The webhook id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateWebhook(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/webhooks/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Delete a webhook
     * Delete an existing webhook
     * @param id The webhook id
     * @returns any 200
     * @throws ApiError
     */
    deleteWebhook(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/webhooks/{id}',
            path: {
                id: id,
            },
        });
    }
    /**
     * List all connections
     * List all existing connection resources.
     * @param filtersService Filter by the external service name.
     * @param filtersExternalid Filter by the external id associated with a connection.
     * @returns any 200
     * @throws ApiError
     */
    listAllConnections(filtersService, filtersExternalid) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/connections',
            query: {
                'filters[service]': filtersService,
                'filters[externalid]': filtersExternalid,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a connection
     * Create a new connection resource.
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createConnection(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/connections',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a branding
     * Retrieve an existing branding resource
     * @param id
     * @returns any 200
     * @throws ApiError
     */
    getBranding(id = null) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/brandings/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update a branding
     * Update an existing branding resource
     * @param id Branding ID
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateBranding(id = 1, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/brandings/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * List all brandings
     * List all existing branding resources
     * @param apiKey ActiveCampaign API key
     * @returns any 200
     * @throws ApiError
     */
    brandings(apiKey) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/brandings',
            query: {
                api_key: apiKey,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * List all users
     * List all existing users
     * @returns any 200
     * @throws ApiError
     */
    listAllUsers() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a user
     * Create a new user
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createUser(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Delete a user
     * Delete an existing user
     * @param id ID of the user you wish to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteUser(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update a user
     * Update an existing user
     * @param id ID of the user
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateUser(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/users/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve a user
     * Retrieve an existing user
     * @param id ID of the user you want to view
     * @returns any 200
     * @throws ApiError
     */
    getUser(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve a user by email
     * Retrieve an existing user by looking up their email address
     * @param email Email address of the user you want to view
     * @returns any 200
     * @throws ApiError
     */
    getUserEmail(email) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/email/:email',
            path: {
                ':email': email,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve a user by username
     * Retrieve an existing user by looking up their username
     * @param username Username of the user you want to view
     * @returns any 200
     * @throws ApiError
     */
    getUserUsername(username) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/username/:username',
            path: {
                ':username': username,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve logged-in user
     * Retrieve the logged-in user
     * @returns any 200
     * @throws ApiError
     */
    getUserLoggedin() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/me',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Delete a task
     * Delete an existing task
     * @param id The task id
     * @returns any 200
     * @throws ApiError
     */
    deleteTask(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/dealTasks/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve a task
     * Retrieve an existing task
     * @param id The ID of the task
     * @returns any 201
     * @throws ApiError
     */
    getTask(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dealTasks/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update a task
     * Update an existing task
     * @param id The ID of the task
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    updateTask(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/dealTasks/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a task
     * Create a new task
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createTask(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dealTasks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
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
    listAllTasks(filtersTitle, filtersReltype, filtersRelid, filtersStatus, filtersNote, filtersDuedate, filtersDTasktypeid, filtersUserid, filtersDueAfter, fitlersDueBefore, filtersDuedateRange, filtersAssigneeUserid, filtersOutcomeId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dealTasks',
            query: {
                'filters[title]': filtersTitle,
                'filters[reltype]': filtersReltype,
                'filters[relid]': filtersRelid,
                'filters[status]': filtersStatus,
                'filters[note]': filtersNote,
                'filters[duedate]': filtersDuedate,
                'filters[d_tasktypeid]': filtersDTasktypeid,
                'filters[userid]': filtersUserid,
                'filters[due_after]': filtersDueAfter,
                'Fitlers[due_before]': fitlersDueBefore,
                'filters[duedate_range]': filtersDuedateRange,
                'filters[assignee_userid]': filtersAssigneeUserid,
                'filters[outcome_id]': filtersOutcomeId,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve a deal
     * Retrieve an existing deal
     * @param id The Deal's id
     * @returns any 200
     * @throws ApiError
     */
    retrieveADeal(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deals/{id}',
            path: {
                id: id,
            },
        });
    }
    /**
     * Delete a deal
     * Delete an existing deal
     * @param id The Deal's id
     * @returns any 200
     * @throws ApiError
     */
    deleteADeal(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/deals/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update a deal
     * Update an existing deal
     * @param id The Deal's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateADealNew(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/deals/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
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
    listAllDeals(filtersSearch, filtersSearchField, filtersTitle, filtersStage, filtersGroup, filtersStatus, filtersOwner, filtersNextdateRange, filtersTag, filtersTasktype, filtersCreatedBefore, filtersCreatedAfter, filtersUpdatedBefore, filtersUpdatedAfter, filtersOrganization, filtersMinimumValue, filtersMaximumValue, filtersScoreGreaterThan, filtersScoreLessThan, filtersScore, ordersTitle = 'ASC', ordersValue = 'ASC', ordersCdate = 'ASC', ordersContactName = 'ASC', ordersContactOrgname = 'ASC', ordersNextAction = 'ASC') {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deals',
            query: {
                'filters[search]': filtersSearch,
                'filters[search_field]': filtersSearchField,
                'filters[title]': filtersTitle,
                'filters[stage]': filtersStage,
                'filters[group]': filtersGroup,
                'filters[status]': filtersStatus,
                'filters[owner]': filtersOwner,
                'filters[nextdate_range]': filtersNextdateRange,
                'filters[tag]': filtersTag,
                'filters[tasktype]': filtersTasktype,
                'filters[created_before]': filtersCreatedBefore,
                'filters[created_after]': filtersCreatedAfter,
                'filters[updated_before]': filtersUpdatedBefore,
                'filters[updated_after]': filtersUpdatedAfter,
                'filters[organization]': filtersOrganization,
                'filters[minimum_value]': filtersMinimumValue,
                'filters[maximum_value]': filtersMaximumValue,
                'filters[score_greater_than]': filtersScoreGreaterThan,
                'filters[score_less_than]': filtersScoreLessThan,
                'filters[score]': filtersScore,
                'orders[title]': ordersTitle,
                'orders[value]': ordersValue,
                'orders[cdate]': ordersCdate,
                'orders[contact_name]': ordersContactName,
                'orders[contact_orgname]': ordersContactOrgname,
                'orders[next-action]': ordersNextAction,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a deal
     * Create a new deal
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createADealNew(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/deals',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * List all stages
     * Retrieve all existing stages
     * @param filtersTitle Filter by deal stages' titles. Any stages whose titles partial-match the filter value are returned
     * @param filtersDGroupid Filter by pipeline's id
     * @param ordersTitle Order by deal stage's title
     * @returns any 200
     * @throws ApiError
     */
    listAllDealStages(filtersTitle, filtersDGroupid, ordersTitle) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dealStages',
            query: {
                'filters[title]': filtersTitle,
                'filters[d_groupid]': filtersDGroupid,
                'orders[title]': ordersTitle,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a stage
     * Create a new stage for a pipeline
     * @param reorder Whether to reorder stages within the pipeline after creating a new deal stage. Can be one of `0` and `1`. If set to `1`, new order values will be assigned to all stages within the same pipeline. If deal stages with the same order exists, the stage with the highest `id` will be assigned with the lowest `order`
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createADealStage(reorder, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dealStages',
            query: {
                reorder: reorder,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Delete a pipeline
     * Delete an existing pipeline
     * @param id Pipeline's id
     * @returns any 200
     * @throws ApiError
     */
    deleteAPipeline(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/dealGroups/{id}',
            path: {
                id: id,
            },
        });
    }
    /**
     * Retrieve a pipeline
     * Retrieve an existing pipeline
     * @param id Pipeline's id
     * @returns any 200
     * @throws ApiError
     */
    retrieveAPipeline(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dealGroups/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update a pipeline
     * Update an existing pipeline
     * @param id Pipeline's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAPipeline(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/dealGroups/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a pipeline
     * Create a new pipeline
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createAPipeline(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dealGroups',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
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
    listAllPipelines(filtersTitle, filtersHaveStages, ordersTitle = 'ASC', ordersPopular = 'ASC') {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dealGroups',
            query: {
                'filters[title]': filtersTitle,
                'filters[have_stages]': filtersHaveStages,
                'orders[title]': ordersTitle,
                'orders[popular]': ordersPopular,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Delete a stage
     * Delete an existing stage
     * @param id Deal stage's id
     * @returns any 200
     * @throws ApiError
     */
    deleteADealStage(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/dealStages/{id}',
            path: {
                id: id,
            },
        });
    }
    /**
     * Retrieve a stage
     * Retrieve an existing stage
     * @param id Deal stage's id
     * @returns any 200
     * @throws ApiError
     */
    retrieveADealStage(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dealStages/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update a stage
     * Update an existing stage
     * @param id Deal stage's id
     * @param reorder Whether to reorder stages within the pipeline after creating a new deal stage. Can be one of `0` and `1`. If set to `1`, new order values will be assigned to all stages within the same pipeline. If deal stages with the same order exists, the stage with the highest `id` will be assigned with the lowest `order`
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateADealStage(id, reorder, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/dealStages/{id}',
            path: {
                id: id,
            },
            query: {
                reorder: reorder,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * List all task types
     * Retrieve all existing task types
     * @returns any 200
     * @throws ApiError
     */
    listAllDealTaskTypes() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dealTasktypes',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a task type
     * Create a new task type
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createADealTaskType(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dealTasktypes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve a task type
     * Retrieve an existing task type
     * @param id Deal task type's id
     * @returns any 200
     * @throws ApiError
     */
    retrieveADealTaskType(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dealTasktypes/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update a task type
     * Update an existing task type
     * @param id Deal task type's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateADealTaskType(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/dealTasktypes/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Delete a task type
     * Delete an existing task type
     * @param id Deal task type's id
     * @returns any 200
     * @throws ApiError
     */
    deleteADealTaskType(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/dealTasktypes/{id}',
            path: {
                id: id,
            },
        });
    }
    /**
     * List all events (names only)
     * List the names of tracked events
     * @returns any 200
     * @throws ApiError
     */
    listAllEventTypes() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/eventTrackingEvents',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a new event (name only)
     * Create a new event tracking event (name only)
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createANewEventNameOnly(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/eventTrackingEvents',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve Event Tracking Status
     * Get event tracking status (enabled or disabled)
     * @returns any 200
     * @throws ApiError
     */
    retrieveEventTrackingStatus() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/eventTracking',
        });
    }
    /**
     * Enable/disable
     * Enable or disable event tracking
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    enableDisableEventTracking(requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/eventTracking',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
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
    listAllContacts(ids, email, emailLike, exclude, formid, idGreater, idLess, listid, organization, search = 'null', segmentid = null, seriesid, status = -1, tagid, filtersCreatedBefore, filtersCreatedAfter, filtersUpdatedBefore, filtersUpdatedAfter, waitid, ordersCdate, ordersEmail = 'ASC', ordersFirstName, ordersLastName, ordersName, ordersScore, inGroupLists) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts',
            query: {
                ids: ids,
                email: email,
                email_like: emailLike,
                exclude: exclude,
                formid: formid,
                id_greater: idGreater,
                id_less: idLess,
                listid: listid,
                organization: organization,
                search: search,
                segmentid: segmentid,
                seriesid: seriesid,
                status: status,
                tagid: tagid,
                'filters[created_before]': filtersCreatedBefore,
                'filters[created_after]': filtersCreatedAfter,
                'filters[updated_before]': filtersUpdatedBefore,
                'filters[updated_after]': filtersUpdatedAfter,
                waitid: waitid,
                'orders[cdate]': ordersCdate,
                'orders[email]': ordersEmail,
                'orders[first_name]': ordersFirstName,
                'orders[last_name]': ordersLastName,
                'orders[name]': ordersName,
                'orders[score]': ordersScore,
                in_group_lists: inGroupLists,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a contact
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createANewContact(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/contacts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `404`,
                422: `422`,
            },
        });
    }
    /**
     * Delete event (name only)
     * Remove an existing event tracking event (name only)
     * @param name Name of event to delete. Spaces in names are allowed, but must be encoded (for example, "my%20event").
     * @returns any 200
     * @throws ApiError
     */
    removeEventNameOnly(name) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/eventTrackingEvent/{name}',
            path: {
                name: name,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve status
     * Get site tracking status (enabled or disabled)
     * @returns any 200
     * @throws ApiError
     */
    retrieveSiteTrackingStatus() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/siteTracking',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Enable/disable
     * Enable or disable site tracking
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    enableDisableSiteTracking(requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/siteTracking',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * List all whitelisted domains
     * List of all whitelisted site tracking domains
     * @returns any 200
     * @throws ApiError
     */
    listAllWhitelistedDomains() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/siteTrackingDomains',
        });
    }
    /**
     * Add domain to whitelist
     * Add a domain to the site tracking whitelist
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    addDomainToWhitelist(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/siteTrackingDomains',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Remove domain from whitelist
     * Remove a domain from the site tracking whitelist
     * @param name The domain name to remove from the whitelist
     * @returns void
     * @throws ApiError
     */
    removeDomainFromWhitelist(name) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/siteTrackingDomains/{name}',
            path: {
                name: name,
            },
        });
    }
    /**
     * Move deals to another stage
     * Move all deals in one stage to another stage
     * @param id Deal stage's id whose deals are to be moved to another deal stage
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    moveDealsToAnotherDealStage(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/dealStages/{id}/deals',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * Update a deal note
     * Update an existing note for a deal
     * @param id Deal's id to assign new note to
     * @param noteId Deal note's id to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateADealNote(id, noteId, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/deals/{id}/notes/{noteId}',
            path: {
                id: id,
                noteId: noteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create a deal note
     * Create a new note for a deal
     * @param id The Deal's id to assign new note to
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createADealNote(id, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/deals/{id}/notes',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Move tasks to another task type
     * Move tasks to a different task type
     * @param id Deal task type's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    moveDealTasksToAnotherDealTaskType(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/dealTasktypes/{id}/dealTasks',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Add a tag to contact
     * Create a contact tag object
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createContactTag(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/contactTags',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `404`,
                422: `422`,
            },
        });
    }
    /**
     * Remove a tag from a contact
     * Delete a contact tag object
     * @param id The contactTag id
     * @returns any 200
     * @throws ApiError
     */
    removeAContactsTag(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/contactTags/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a contact
     * Retrieve an existing contact
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    getContact(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Delete a contact
     * Delete an existing contact
     * @param id The contact id
     * @returns any 200
     * @throws ApiError
     */
    deleteContact(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/contacts/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Update a contact
     * @param id ID of the contact to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAContactNew(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/contacts/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve site tracking code
     * Get site tracking code
     * @returns any 200
     * @throws ApiError
     */
    retrieveSiteTrackingCode() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/siteTracking/code',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * List all email activities
     * @param filtersSubscriberid Set this parameter to return only email activities belonging to a given subscriber.
     * @param filtersDealId Set this parameter to return only email activities belonging to a given deal.
     * @returns any 200
     * @throws ApiError
     */
    listAllEmailActivities(filtersSubscriberid, filtersDealId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/emailActivities',
            query: {
                'filters[subscriberid]': filtersSubscriberid,
                'filters[dealId]': filtersDealId,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create an address
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createAnAddress(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/addresses',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * List all addresses
     * @returns any 200
     * @throws ApiError
     */
    listAllAddresses() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/addresses',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Delete an address
     * @param id ID of the Address to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAnAddress(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/addresses/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve an address
     * @param id ID of the Address to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveAnAddress(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/addresses/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Delete address associated with a specific user group
     * @param id ID of the AddressGroup to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAnAddressgroup(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/addressGroups/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Delete address associated with a specific list
     * @param id ID of the AddressList to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAnAddresslist(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/addressLists/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Add a contact to an automation
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createNewContactautomation(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/contactAutomations',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * List all automations a contact is in
     * @returns any 200
     * @throws ApiError
     */
    listAllContactAutomations() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contactAutomations',
        });
    }
    /**
     * Remove a contact from an automation
     * @param id ID of the contactAutomation to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAContactautomation(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/contactAutomations/{id}',
            path: {
                id: id,
            },
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * Retrieve an automation a contact is in
     * @param id ID of the contactAutomation to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveAContactautomation(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contactAutomations/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * List all automations
     * @returns any 200
     * @throws ApiError
     */
    listAllAutomations() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/automations',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * List all campaigns
     * @param ordersSdate Order campaigns by send date
     * @param ordersLdate Order campaigns by last send date
     * @param filtersAutomation Filter to return automation campaigns
     * @returns any 200
     * @throws ApiError
     */
    listAllCampaigns(ordersSdate = 'ASC', ordersLdate, filtersAutomation) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/campaigns',
            query: {
                'orders[sdate]': ordersSdate,
                'orders[ldate]': ordersLdate,
                'filters[automation]': filtersAutomation,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve links associated to campaign
     * @param id ID of campaign to retrieve Links for
     * @returns any 200
     * @throws ApiError
     */
    retrieveLinksAssociatedCampaign(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/campaigns/{id}/links',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * List all automations the contact is in
     * @param id ID of the contact to receive automations for
     * @returns any 200
     * @throws ApiError
     */
    listAllContactautomationsForContact(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/contactAutomations',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Delete a note
     * @param id ID of the note to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteNote(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/notes/{id}',
            path: {
                id: id,
            },
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * Update a note
     * @param id ID of the note to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateANote(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/notes/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * Retrieve a note
     * @param id ID of the note to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveANote(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notes/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a note
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createANote(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/notes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update an address
     * @param id ID of the Address being changed
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAnAddress(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/addresses/:id',
            path: {
                ID: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * List all forms
     * @returns any 200
     * @throws ApiError
     */
    forms1() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/forms',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve a form
     * @param id ID of the form to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveForms(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/forms/{id}',
            path: {
                id: id,
            },
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * Delete a group
     * @param id ID of the group to be deleted
     * @returns any 200
     * @throws ApiError
     */
    deleteAGroup1(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/groups/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update a group
     * @param id ID of the group to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAGroup(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/groups/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * Retrieve a group
     * @param id ID of the group to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveAGroup(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/groups/{id}',
            path: {
                id: id,
            },
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * List all groups
     * @returns any 200
     * @throws ApiError
     */
    listAllGroups() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/groups',
        });
    }
    /**
     * Create a group
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createANewGroup(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/groups',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create a list
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createNewList(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/lists',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                403: `403`,
            },
        });
    }
    /**
     * Retrieve all lists
     * @param filtersName Filter by the name of the list
     * @param limit Limit the number of returned results
     * @param filtersNameOperator Filters lists by list name according to the operator specified. Operators currently supported: eq, neq, lt, lte, gt, gte, contains, starts_with
     * @param ordersName Orders filtered results by weight, ascending order, or descending order. If weight is used, exact matches are returned first, followed by matches starting with what was filtered by, followed by the rest of the results.
     * @returns any 200
     * @throws ApiError
     */
    retrieveAllLists(filtersName, limit, filtersNameOperator, ordersName) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lists',
            query: {
                'filters[name]': filtersName,
                limit: limit,
                'filters[name][<operator>]': filtersNameOperator,
                'orders[name]': ordersName,
            },
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * Delete a list
     * @param id ID of the list to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAList(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/lists/{id}',
            path: {
                id: id,
            },
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * Retrieve a list
     * @param id ID of the lists to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveAList(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/lists/{id}',
            path: {
                id: id,
            },
            errors: {
                403: `403`,
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a custom field value
     * @param id ID of the fieldValue to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveAFieldvalues(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fieldValues/{id}',
            path: {
                id: id,
            },
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * Delete a custom field value
     * @param id ID of the fieldValue to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAFieldvalue1(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fieldValues/{id}',
            path: {
                id: id,
            },
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * Update a custom field value for contact
     * @param id ID of the fieldValue to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateACustomFieldValueForContact(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/fieldValues/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Delete a message
     * @param id ID of the message to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAMessage(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/messages/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
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
    updateAMessage(id, messageFromname, messageEmail, messageReply2, messageSubject, messagePreheaderText, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/messages/{id}',
            path: {
                id: id,
            },
            headers: {
                'message.fromname': messageFromname,
                'message.email': messageEmail,
                'message.reply2': messageReply2,
                'message.subject': messageSubject,
                'message.preheader_text': messagePreheaderText,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a message
     * @param id ID of the message to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveAMessage(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messages/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * List all messages
     * @returns any 200
     * @throws ApiError
     */
    listAllMessages() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messages',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve a template
     * @param id ID of the template to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveATemplate(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/templates/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * List all segments
     * @returns any 200
     * @throws ApiError
     */
    listAllSegments() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/segments',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update settings
     * @param id ID of the config to edit
     * @returns any 200
     * @throws ApiError
     */
    setConfig(id) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/configs/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * List all tags
     * @param search Filter by name of tag(s); "contains" operator is assumed.
     * @param filtersSearchOperator Filters tags by tag name according to the operator specified. Operators currently supported: `eq`, `neq`, `lt`, `lte`, `gt`, `gte`, `contains`, `starts_with`
     * @param ordersSearch Orders filtered results by weight, ascending order, or descending order. If `weight` is used, exact matches are returned first, followed by matches starting with what was filtered by, followed by the rest of the results.
     * @returns any 200
     * @throws ApiError
     */
    retrieveAllTags(search, filtersSearchOperator, ordersSearch) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tags',
            query: {
                search: search,
                'filters[search][<operator>]': filtersSearchOperator,
                'orders[search]': ordersSearch,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a tag
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createANewTag(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tags',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create a custom field value
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createFieldvalue(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fieldValues',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * List all custom field values
     * @param filtersFieldid ID of the field the value belongs to.
     * @param filtersVal Value of the custom field for a specific contact
     * @returns any 200
     * @throws ApiError
     */
    listAllCustomFieldValues(filtersFieldid, filtersVal) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fieldValues',
            query: {
                'filters[fieldid]': filtersFieldid,
                'filters[val]': filtersVal,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * List all custom fields
     * @param limit The number of fields returned per request.
     * @returns any 200
     * @throws ApiError
     */
    retrieveFields(limit = 100) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fields',
            query: {
                limit: limit,
            },
        });
    }
    /**
     * Create a custom field
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createAContactCustomField(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fields',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `403`,
                422: `422`,
            },
        });
    }
    /**
     * Retrieve a custom field
     * @param id ID of the field to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveACustomFieldContact(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fields/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update a custom field
     * @param id ID of the field to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAField(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/fields/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * Delete a custom field
     * @param id ID of the field option to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteAField(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fields/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Update a tag
     * @param id ID of the tag to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateATag(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/tags/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a Tag
     * @param id ID of the tag to remove
     * @returns any 200
     * @throws ApiError
     */
    deleteATag(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/tags/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a tag
     * @param id ID of the tag to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveATag(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tags/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Update list status for a contact
     * Subscribe a contact to a list or unsubscribe a contact from a list.
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateListStatusForContact(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/contactLists',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update a custom field
     * @param id ID of the custom field to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateACustomDealFieldMeta(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/dealCustomFieldMeta/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Delete a custom field
     * @param id ID of the field to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteACustomDealFieldMeta(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/dealCustomFieldMeta/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a custom field
     * @param id ID of the field to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveACustomDealFieldMeta(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dealCustomFieldMeta/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a custom field value
     * @param id ID of the dealCustomFieldData to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveACustomDealFieldValue(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dealCustomFieldData/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Delete a custom field value
     * @param id ID of the dealCustomFieldData to retrieve
     * @returns any 200
     * @throws ApiError
     */
    deleteACustomDealFieldData(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/dealCustomFieldData/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Update a custom field value
     * @param id ID of the custom fields value to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateACustomDealFieldValue(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/dealCustomFieldData/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `404`,
                422: `422`,
            },
        });
    }
    /**
     * Create a custom field meta
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createCustomDealFieldMeta(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dealCustomFieldMeta',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * List all custom fields
     * @param limit The number of fields returned per request.
     * @returns any 200
     * @throws ApiError
     */
    retrieveAllCustomDealFieldMeta(limit = 100) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dealCustomFieldMeta',
            query: {
                limit: limit,
            },
        });
    }
    /**
     * Create a custom field value
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createCustomDealFieldValue(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dealCustomFieldData',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * List all custom field values
     * @param filtersDealId Filter results by a specific deal (note that Id uses a capital I)
     * @returns any 200
     * @throws ApiError
     */
    listAllCustomFielddataFieldValues(filtersDealId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dealCustomFieldData',
            query: {
                'filters[dealId]': filtersDealId,
            },
        });
    }
    /**
     * List all calendar feeds
     * @returns any 200
     * @throws ApiError
     */
    listAllCalendarFeeds() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/calendars',
        });
    }
    /**
     * Create a calendar feed
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createACalendarFeed(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/calendars',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a calendar feed
     * @param id ID of the calendar feed to retrieve
     * @returns any 200
     * @throws ApiError
     */
    listAllCalendarFeeds1(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/calendars/:id',
            path: {
                ID: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Update a calendar feed
     * @param id ID of the calendar feed to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateACalendarFeed(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/calendars/:id',
            path: {
                ID: id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a calendar feed
     * @param id ID of the calendar feed to delete
     * @returns any 200
     * @throws ApiError
     */
    removeACalendarFeed(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/calendars/:id',
            path: {
                ID: id,
            },
        });
    }
    /**
     * Create a saved response
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    savedResponses(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/savedResponses',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * List all saved responses
     * @returns any 200
     * @throws ApiError
     */
    listAllSavedResponses() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/savedResponses',
        });
    }
    /**
     * Retrieve a saved response
     * @param id ID of the saved Response to recieve
     * @returns any 200
     * @throws ApiError
     */
    getASavedresponse(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/savedResponses/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update a saved response
     * @param id ID of the saved response to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateASavedResponse(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/savedResponses/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * Delete a saved response
     * @param id ID of the saved response to remove
     * @returns any 200
     * @throws ApiError
     */
    retrieveASavedresponse(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/savedResponses/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a campaign
     * @param id ID of campaign to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveACampaign(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/campaigns/{id}',
            path: {
                id: id,
            },
        });
    }
    /**
     * List all scores
     * @returns any 200
     * @throws ApiError
     */
    listAllScores() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/scores',
        });
    }
    /**
     * Retrieve a score
     * @param id ID of the score to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveAScore(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/scores/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a segment
     * @param id ID of the segment to be retrieved
     * @returns any 200
     * @throws ApiError
     */
    retrieveASegment(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/segments/{id}',
            path: {
                id: id,
            },
        });
    }
    /**
     * Create a custom field relationship to list(s)
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createACustomFieldRelationshipToLists(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fieldRels',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * Create a list group permission
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createAListGroupPermission(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/listGroups',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * Retrieve a contact's score value
     * @param id id of the Contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveAContactsScoreValue(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/scoreValues',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a secondary contact
     * Retrieve an existing secondary contact
     * @param id Secondary Contact's id
     * @returns any 200
     * @throws ApiError
     */
    retrieveASecondaryContact(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contactDeals/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Update a secondary contact
     * Update an existing secondary contact
     * @param id Secondary Contact's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateASecondaryContact(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/contactDeals/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `404`,
                422: `422`,
            },
        });
    }
    /**
     * Delete a secondary contact
     * Delete an existing secondary contact
     * @param id Secondary Contact's id
     * @returns any 200
     * @throws ApiError
     */
    deleteASecondaryContact(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/contactDeals/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * List all secondary contacts
     * Retrieve all secondary contacts
     * @returns any 200
     * @throws ApiError
     */
    listAllSecondaryContacts() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contactDeals',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a secondary contact
     * Create a new secondary contact for a deal
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createASecondaryContact(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/contactDeals',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * Bulk create custom field options
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createCustomFieldOptions(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fieldOption/bulk',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * Bulk create a custom deal field value
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    bulkCreateACustomDealFieldValue(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dealCustomFieldData/bulkCreate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Bulk update a custom field value
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    bulkUpdateACustomFieldValue(requestBody) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/dealCustomFieldData/bulkUpdate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all accounts
     * Retrieve all existing account
     * @param search Search by name
     * @param countDeals Whether to compute the contactCount and dealCount counts for the number of contacts/deals associated with each account. Set it to true to include the right counts. If set to false or omitted from the call, then contactCount and dealCount will not be counted and be simply displayed as 0.
     * @returns any 200
     * @throws ApiError
     */
    listAllAccounts(search, countDeals) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts',
            query: {
                search: search,
                count_deals: countDeals,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create an account
     * Create a new account
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createAnAccountNew(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * Retrieve an account
     * Retrieve an existing account
     * @param id Account's ID
     * @returns any 200
     * @throws ApiError
     */
    retrieveAnAccount(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{id}',
            path: {
                id: id,
            },
        });
    }
    /**
     * Delete an account
     * Delete an existing account
     * @param id Account's id
     * @returns any 200
     * @throws ApiError
     */
    deleteAnAccount(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Update an account
     * Update an existing account
     * @param id Account's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAnAccountNew(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve a custom field
     * @param id ID of the field to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveACustomFieldMeta(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accountCustomFieldMeta/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Update a custom field
     * @param id ID of the custom field to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateACustomField(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accountCustomFieldMeta/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Delete a custom field
     * @param id ID of the field to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteACustomField(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accountCustomFieldMeta/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * List all custom fields
     * @param limit The number of fields returned per request.
     * @returns any 200
     * @throws ApiError
     */
    listAllCustomFieldsMeta(limit = 100) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accountCustomFieldMeta',
            query: {
                limit: limit,
            },
        });
    }
    /**
     * Create a custom field
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createACustomfieldmeta(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accountCustomFieldMeta',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * Create a custom field value
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createACustomFieldValue(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accountCustomFieldData',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all custom field values
     * @param filtersCustomerAccountId Filter results by a specific account (note that Id uses a capital I)
     * @returns any 200
     * @throws ApiError
     */
    listAllCustomFieldValues2(filtersCustomerAccountId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accountCustomFieldData',
            query: {
                'filters[customerAccountId]': filtersCustomerAccountId,
            },
        });
    }
    /**
     * Bulk create a custom account field value
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    bulkCreateACustomAccountFieldValue(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accountCustomFieldData/bulkCreate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a custom field value
     * @param id ID of the dealCustomFieldData to retrieve
     * @returns any 200
     * @throws ApiError
     */
    retrieveACustomFieldValue(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accountCustomFieldData/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Update a custom field value
     * @param id ID of the custom fields value to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateACustomFieldValue(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accountCustomFieldData/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Delete a custom field value
     * @param id ID of the dealCustomFieldData to retrieve
     * @returns any 200
     * @throws ApiError
     */
    deleteACustomFieldValue(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accountCustomFieldData/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Bulk update a custom field value
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    bulkUpdateACustomAccountFieldValue(requestBody) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accountCustomFieldData/bulkUpdate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create an account note
     * Create a new note for an account
     * @param id Account's id to assign new note to
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createAnAccountNote(id, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{id}/notes',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update an account note
     * Update an existing note for a account
     * @param id Account's id to assign new note to
     * @param noteid Account note's id to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAAccountNote(id, noteid, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{id}/notes/{noteid}',
            path: {
                id: id,
                noteid: noteid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Bulk delete accounts
     * Delete an existing account
     * @param ids Array with integers representing ID's of accounts to be deleted
     * @returns any 200
     * @throws ApiError
     */
    bulkDeleteAccounts(ids) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/bulk_delete/',
            path: {
                ids: ids,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create an association
     * Create a new account association
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createAnAccount1(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accountContacts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * List all associations
     * Retrieve all existing account association
     * @param filtersContact Filter by Contact ID
     * @param filtersAccount Filter by Account ID
     * @returns any 200
     * @throws ApiError
     */
    listAllAssociations1(filtersContact, filtersAccount) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accountContacts',
            query: {
                'filters[contact]': filtersContact,
                'filters[account]': filtersAccount,
            },
        });
    }
    /**
     * Retrieve an association
     * Retrieve an existing account association
     * @param id Association's ID
     * @returns any 200
     * @throws ApiError
     */
    retrieveAnAssociation(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accountContacts/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Update an association
     * Update an existing account association
     * @param id Association's ID
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateAnAssociation1(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accountContacts/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete an association
     * Delete an existing account association
     * @param id Association's ID
     * @returns any 200
     * @throws ApiError
     */
    deleteAnAssociation1(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accountContacts/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Update an order
     * Update an existing ecommerce order/cart resource.
     * @param id The ID of the order to update
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateOrder(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/ecomOrders/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List EcomOrderProducts for a Specific EcomOrder
     * @param id The ID of the order whose products you'd like returned.
     * @returns any 200
     * @throws ApiError
     */
    listProductsForOrder(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ecomOrders/{id}/orderProducts',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * List EcomOrderProducts
     * @returns any 200
     * @throws ApiError
     */
    listEcomorderproducts() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ecomOrderProducts',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve an EcomOrderProduct
     * @param id The ID of the product you'd like returned.
     * @returns any 200
     * @throws ApiError
     */
    retrieveAnEcomorderproduct(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ecomOrderProducts/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
                404: `404`,
            },
        });
    }
    /**
     * Sync a contact's data
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    syncAContactsData(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/contact/sync',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Bulk import contacts
     * @param contentType
     * @param apiToken
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    bulkImportContacts(contentType = 'application/json', apiToken, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/import/bulk_import',
            headers: {
                'Content-Type': contentType,
                'Api-Token': apiToken,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Bulk import status list
     * @returns any 200
     * @throws ApiError
     */
    bulkImportStatusList() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/import/bulk_import',
        });
    }
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
    listContactActivities(contact, after, include = 'activities to include', emails = false, ordersTstamp) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/activities',
            query: {
                contact: contact,
                after: after,
                include: include,
                emails: emails,
                'orders[tstamp]': ordersTstamp,
            },
            errors: {
                400: `400`,
            },
        });
    }
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
    listAllSchemas(limit = 20, offset, orders, filters, showFields = 'all') {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customObjects/schemas',
            query: {
                limit: limit,
                offset: offset,
                orders: orders,
                filters: filters,
                showFields: showFields,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a schema
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createASchema(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/customObjects/schemas',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
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
    retrieveASchema(id, showFields = 'all') {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customObjects/schemas/{id}',
            path: {
                id: id,
            },
            query: {
                showFields: showFields,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Delete a schema
     * @param id Id of schema to delete
     * @returns any 200
     * @throws ApiError
     */
    deleteASchema(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/customObjects/schemas/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
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
    updateASchema(schemaId, validateOnly = false, showFields = 'all', requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/customObjects/schemas/:id',
            path: {
                schemaId: schemaId,
            },
            headers: {
                validateOnly: validateOnly,
            },
            query: {
                showFields: showFields,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `404`,
                422: `422`,
            },
        });
    }
    /**
     * List records by schema
     * @param schemaId ID of schema
     * @param filters Use ?filters[relationships.{your-contact-relationship}][eq]={contactId} to filter records to a specific contact.
     * @param limit The number of records to return for each call. Maximum value is 100.
     * @param offset Offset index of records to return
     * @returns any 200
     * @throws ApiError
     */
    listRecordsCreatedFromASchema(schemaId, filters, limit = 20, offset) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customObjects/records/{schemaId}',
            path: {
                schemaId: schemaId,
            },
            query: {
                limit: limit,
                offset: offset,
                filters: filters,
            },
            errors: {
                400: `400`,
                404: `404`,
            },
        });
    }
    /**
     * Create or update record
     * @param schemaId ID of schema
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    createOrUpdateRecord(schemaId, requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/customObjects/records/{schemaId}',
            path: {
                schemaId: schemaId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                422: `422`,
            },
        });
    }
    /**
     * Get a record by id
     * @param schemaId ID of schema
     * @param recordId ID of record
     * @returns any 200
     * @throws ApiError
     */
    getASingleRecord(schemaId, recordId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/customObjects/records/{schemaId}/{recordId}',
            path: {
                schemaId: schemaId,
                recordId: recordId,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Delete a record by id
     * @param schemaId ID of schema
     * @param recordId ID of record
     * @returns any 202
     * @throws ApiError
     */
    deleteARecord(schemaId, recordId) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/customObjects/records/{schemaId}/{recordId}',
            path: {
                schemaId: schemaId,
                recordId: recordId,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Delete a record by external ID
     * @param schemaId ID of schema
     * @param externalId External ID of record
     * @returns any 202
     * @throws ApiError
     */
    deleteARecordByExternalId(schemaId, externalId) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/customObjects/records/{schemaId}/external/{externalId}',
            path: {
                schemaId: schemaId,
                externalId: externalId,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * List all deal roles
     * @param search (optional string used to search for matching titles)
     * @returns any 200
     * @throws ApiError
     */
    listAllDealRoles(search) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dealRoles',
            query: {
                search: search,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a deal role
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createADealRole(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dealRoles',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Delete a deal role
     * @param id Deal role's id
     * @returns any 200
     * @throws ApiError
     */
    deleteADealRole(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/dealRoles/{id}',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Get a record by external id
     * @param schemdId ID of schema
     * @param externalId External ID for record
     * @returns any 200
     * @throws ApiError
     */
    getASingleRecordUsingExternalId(schemdId, externalId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/records/{schemdId}/external/{externalId}',
            path: {
                schemdId: schemdId,
                externalId: externalId,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a task outcome
     * Create a new task outcome
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createATaskOutcome(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/taskOutcomes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * List all task outcomes
     * Retrieve all existing task outcomes
     * @param filtersSentiment 1 is for Negative, 2 is for Neutral and 3 is for Positive
     * @returns any 200
     * @throws ApiError
     */
    listAllTaskOutcomes(filtersSentiment) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/taskOutcomes',
            query: {
                'filters[sentiment]': filtersSentiment,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Retrieve a task outcome
     * Retrieve an existing task outcome
     * @param id Task outcome's id
     * @returns any 200
     * @throws ApiError
     */
    retrieveATaskOutcome(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/taskOutcomes/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Delete a task outcome
     * Delete an existing task outcome
     * @param id Task outcome's id
     * @returns any 200
     * @throws ApiError
     */
    deleteATaskOutcome(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/taskOutccomes/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Update a task outcome
     * Update an existing task outcome
     * @param id Task outcome's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateATaskOutcome(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/taskOutccomes/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * List all task type - outcome relations
     * Retrieve all existing task type - outcome relations
     * @returns any 200
     * @throws ApiError
     */
    listAllTaskTypeOutcomeRelations() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tasktypeOutcomeRels',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * WIP Create a task type - outcome relation
     * Create a new task type
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createATaskOutcome1(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasktypeOutcomeRels',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                422: `422`,
            },
        });
    }
    /**
     * Retrieve a task type - outcome relation
     * Retrieve an existing task type - outcome relation
     * @param id Task type - outcome relation's id
     * @returns any 200
     * @throws ApiError
     */
    retrieveATaskTypeOutcomeRelation(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tasktypeOutcomeRels/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * WIP Update a task type - outcome relation
     * Update an existing task type
     * @param id Task type - outcome relation's id
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    updateATaskOutcome1(id, requestBody) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/tasktypeOutcomeRels/{id}',
            path: {
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
                422: `422`,
            },
        });
    }
    /**
     * Delete a task type - outcome relation
     * Delete an existing task type - outcome relation
     * @param id Task type - outcome relation's id
     * @returns any 200
     * @throws ApiError
     */
    deleteATaskTypeOutcomeRelation(id) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/tasktypeOutcomeRels/{id}',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Create a public schema
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createAPublicSchema(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/customObjects/schemas/public',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Create a child schema
     * @param id Id of the parent schema the new child schema will extend
     * @returns any 200
     * @throws ApiError
     */
    createAChildSchema(id) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/customObjects/schemas/{id}/child',
            path: {
                id: id,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Bulk import status info
     * @param batchId
     * @returns any 200
     * @throws ApiError
     */
    bulkImportStatusInfo(batchId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/import/info',
            query: {
                batchId: batchId,
            },
            errors: {
                400: `400`,
            },
        });
    }
    /**
     * Bulk Update Deal Owners
     * Update an existing deal
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    bulkUpdateDealOwners(requestBody) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/deals/bulkUpdate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * Retrieve inaccessible pipelines by user
     * Retrieve pipelines that given user doesn't have access to
     * @param dealIds Deal Ids
     * @param userId User's Id
     * @returns any 200
     * @throws ApiError
     */
    retrieveInaccessiblePipelinesByUser(dealIds, userId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dealGroup/get_inaccessible_deal_groups',
            query: {
                'dealIds[]': dealIds,
                userId: userId,
            },
            errors: {
                422: `422`,
            },
        });
    }
    /**
     * Retrieve a contact's bounce logs
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactBounceLogs(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/bounceLogs',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a contact's data
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactData(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/contactData',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a contact's goals
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactGoals(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/contactGoals',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a contact's list memberships
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactListMemberships(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/contactLists',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a contact's logs
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactLogs(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/contactLogs',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a list of contact's deals
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactDealsList(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/contactDeals',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a contact's deals
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactDeals(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/deals',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a contact's field values
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactFieldValues(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/fieldValues',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a contacts geo ips
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactGeoIps(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/geoIps',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a contacts notes
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactNotes(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/notes',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a contacts organization
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactOrganization(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/organization',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a contacts plus append
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactPlusAppend(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/plusAppend',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a contacts tracking logs
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactTrackingLogs(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/trackingLogs',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a contacts account contacts
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactAccountContacts(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/accountContacts',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * Retrieve a contacts automation entry counts
     * @param id ID of the contact
     * @returns any 200
     * @throws ApiError
     */
    retrieveContactAutomationEntryCounts(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{id}/automationEntryCounts',
            path: {
                id: id,
            },
            errors: {
                404: `404`,
            },
        });
    }
    /**
     * List All Group Limits
     * @returns any 200
     * @throws ApiError
     */
    listAllGroupLimits() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/groupLimits',
        });
    }
    /**
     * Local Events
     * Published by TrackCmp. Creates an em_local_event row in production database.
     * @param requestBody
     * @returns any 201
     * @throws ApiError
     */
    localEvents(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/localevent',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * Delete a custom field relationship to list(s)
     * @param fieldRelId Field relationship ID to be deleted
     * @returns any 200
     * @throws ApiError
     */
    deleteACustomFieldRelationshipToLists(fieldRelId) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fieldRels/{fieldRelId}',
            path: {
                fieldRelId: fieldRelId,
            },
            errors: {
                403: `403`,
            },
        });
    }
    /**
     * Create a task reminder
     * Create a new task outcome
     * @param requestBody
     * @returns any 200
     * @throws ApiError
     */
    createATaskReminder(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/taskNotifications',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `422`,
            },
        });
    }
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
    deleteAField1(schemaId, fieldId, showFields = 'all') {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/customObjects/schemas/{schemaId}/fields/{fieldId}',
            path: {
                schemaId: schemaId,
                fieldId: fieldId,
            },
            query: {
                showFields: showFields,
            },
        });
    }
    /**
     * Get Contact's Tracking Logs/Events
     * Get a log of events for a Contact
     * @param contactId The Contact's ID
     * @returns any 200
     * @throws ApiError
     */
    getContactsTrackingLogsevents(contactId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contacts/{contactId}/trackingLogs',
            path: {
                contactId: contactId,
            },
        });
    }
    /**
     * Get Contact By Event ID
     * Get the contact that was involved in an event.
     * @param eventId The Event's ID
     * @returns any 200
     * @throws ApiError
     */
    getContactByEventId(eventId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trackingLogs/{eventId}/contact',
            path: {
                eventId: eventId,
            },
        });
    }
}
exports.DefaultActiveCampaign = DefaultActiveCampaign;
