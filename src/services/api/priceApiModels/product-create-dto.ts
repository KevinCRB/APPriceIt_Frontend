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



/**
 * 
 * @export
 * @interface ProductCreateDTO
 */
export interface ProductCreateDTO {
    /**
     * 
     * @type {string}
     * @memberof ProductCreateDTO
     */
    'product_name': string;
    /**
     * 
     * @type {string}
     * @memberof ProductCreateDTO
     */
    'product_description'?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductCreateDTO
     */
    'product_appuser_id': number;
}
