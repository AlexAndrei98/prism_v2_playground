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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NotFound
 */
export interface NotFound {
    /**
     * 
     * @type {string}
     * @memberof NotFound
     */
    msg: string;
}

/**
 * Check if a given object implements the NotFound interface.
 */
export function instanceOfNotFound(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "msg" in value;

    return isInstance;
}

export function NotFoundFromJSON(json: any): NotFound {
    return NotFoundFromJSONTyped(json, false);
}

export function NotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotFound {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'msg': json['msg'],
    };
}

export function NotFoundToJSON(value?: NotFound | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'msg': value.msg,
    };
}

