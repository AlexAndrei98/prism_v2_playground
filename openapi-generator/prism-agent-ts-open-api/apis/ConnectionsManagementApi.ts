/* tslint:disable */
/* eslint-disable */
/**
 * PrismAgent OpenAPI specification
 * OpenAPI specification for Decentralized Identifiers (DID) Operations
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: atala-coredid@iohk.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AcceptConnectionInvitationRequest,
  Connection,
  ConnectionCollection,
  CreateConnectionRequest,
  ErrorResponse,
} from '../models';
import {
    AcceptConnectionInvitationRequestFromJSON,
    AcceptConnectionInvitationRequestToJSON,
    ConnectionFromJSON,
    ConnectionToJSON,
    ConnectionCollectionFromJSON,
    ConnectionCollectionToJSON,
    CreateConnectionRequestFromJSON,
    CreateConnectionRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AcceptConnectionInvitationOperationRequest {
    acceptConnectionInvitationRequest: AcceptConnectionInvitationRequest;
}

export interface CreateConnectionOperationRequest {
    createConnectionRequest: CreateConnectionRequest;
}

export interface GetConnectionRequest {
    connectionId: string;
}

/**
 * 
 */
export class ConnectionsManagementApi extends runtime.BaseAPI {

    /**
     * Creates new connection state record in `pending` state. It is assumed that application would first decode and validate the invitation. When it is accepted in the application side, it should be submitted in raw format to this API.
     * Accepts externally received invitation.
     */
    async acceptConnectionInvitationRaw(requestParameters: AcceptConnectionInvitationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Connection>> {
        if (requestParameters.acceptConnectionInvitationRequest === null || requestParameters.acceptConnectionInvitationRequest === undefined) {
            throw new runtime.RequiredError('acceptConnectionInvitationRequest','Required parameter requestParameters.acceptConnectionInvitationRequest was null or undefined when calling acceptConnectionInvitation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/connection-invitations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AcceptConnectionInvitationRequestToJSON(requestParameters.acceptConnectionInvitationRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConnectionFromJSON(jsonValue));
    }

    /**
     * Creates new connection state record in `pending` state. It is assumed that application would first decode and validate the invitation. When it is accepted in the application side, it should be submitted in raw format to this API.
     * Accepts externally received invitation.
     */
    async acceptConnectionInvitation(requestParameters: AcceptConnectionInvitationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Connection> {
        const response = await this.acceptConnectionInvitationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns new invitation object and creates new connection state record in `pending` state. Content of invitation depends on DIDComm protocol used, here is an example of how it would look like for `AIP 1.0 connection/v1` protocol. Once connection invitation is accepted, Agent should filter all additional attempts to accept it. We consider mult-party connections as out of scope for now.
     * Creates new connection and returns an invitation.
     */
    async createConnectionRaw(requestParameters: CreateConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Connection>> {
        if (requestParameters.createConnectionRequest === null || requestParameters.createConnectionRequest === undefined) {
            throw new runtime.RequiredError('createConnectionRequest','Required parameter requestParameters.createConnectionRequest was null or undefined when calling createConnection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/connections`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateConnectionRequestToJSON(requestParameters.createConnectionRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConnectionFromJSON(jsonValue));
    }

    /**
     * Returns new invitation object and creates new connection state record in `pending` state. Content of invitation depends on DIDComm protocol used, here is an example of how it would look like for `AIP 1.0 connection/v1` protocol. Once connection invitation is accepted, Agent should filter all additional attempts to accept it. We consider mult-party connections as out of scope for now.
     * Creates new connection and returns an invitation.
     */
    async createConnection(requestParameters: CreateConnectionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Connection> {
        const response = await this.createConnectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns an existing connection record by id.
     */
    async getConnectionRaw(requestParameters: GetConnectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Connection>> {
        if (requestParameters.connectionId === null || requestParameters.connectionId === undefined) {
            throw new runtime.RequiredError('connectionId','Required parameter requestParameters.connectionId was null or undefined when calling getConnection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/connections/{connectionId}`.replace(`{${"connectionId"}}`, encodeURIComponent(String(requestParameters.connectionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConnectionFromJSON(jsonValue));
    }

    /**
     * Returns an existing connection record by id.
     */
    async getConnection(requestParameters: GetConnectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Connection> {
        const response = await this.getConnectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a list of connections.
     */
    async getConnectionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConnectionCollection>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["apikey"] = this.configuration.apiKey("apikey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/connections`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConnectionCollectionFromJSON(jsonValue));
    }

    /**
     * Returns a list of connections.
     */
    async getConnections(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConnectionCollection> {
        const response = await this.getConnectionsRaw(initOverrides);
        return await response.value();
    }

}
