/* tslint:disable */
/* eslint-disable */
/**
 * APPriceit
 * API description
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { StoreResponseDTOStoreLocation } from './store-response-dtostore-location';

/**
 * 
 * @export
 * @interface StoreResponseDTO
 */
export interface StoreResponseDTO {
    /**
     * 
     * @type {StoreResponseDTOStoreLocation}
     * @memberof StoreResponseDTO
     */
    'store_location': StoreResponseDTOStoreLocation;
    /**
     * 
     * @type {number}
     * @memberof StoreResponseDTO
     */
    'store_id': number;
    /**
     * 
     * @type {string}
     * @memberof StoreResponseDTO
     */
    'store_name': string;
    /**
     * 
     * @type {string}
     * @memberof StoreResponseDTO
     */
    'store_description'?: string;
    /**
     * 
     * @type {string}
     * @memberof StoreResponseDTO
     */
    'store_schedule'?: string;
    /**
     * 
     * @type {string}
     * @memberof StoreResponseDTO
     */
    'store_creation_time': string;
    /**
     * 
     * @type {number}
     * @memberof StoreResponseDTO
     */
    'store_appuser_id': number;
    /**
     * Distance in metters from user location
     * @type {number}
     * @memberof StoreResponseDTO
     */
    'store_distance': number;
}
