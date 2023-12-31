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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { RefreshRequestDTO } from '../priceApiModels';
// @ts-ignore
import { RefreshResponseDTO } from '../priceApiModels';
// @ts-ignore
import { SignInRequestDTO } from '../priceApiModels';
// @ts-ignore
import { SignInResponseDTO } from '../priceApiModels';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Test endpoint. TODO: Remove
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerGetProfile: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/profile`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerLogOut: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Endpoint to get a new access token fron an access one.
         * @summary 
         * @param {RefreshRequestDTO} refreshRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerRefresh: async (refreshRequestDTO: RefreshRequestDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'refreshRequestDTO' is not null or undefined
            assertParamExists('authControllerRefresh', 'refreshRequestDTO', refreshRequestDTO)
            const localVarPath = `/auth/refresh`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(refreshRequestDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Login endpoint, use credentials to get access and refresh token
         * @summary 
         * @param {SignInRequestDTO} signInRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerSignIn: async (signInRequestDTO: SignInRequestDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'signInRequestDTO' is not null or undefined
            assertParamExists('authControllerSignIn', 'signInRequestDTO', signInRequestDTO)
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(signInRequestDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * Test endpoint. TODO: Remove
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerGetProfile(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerGetProfile(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerLogOut(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerLogOut(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Endpoint to get a new access token fron an access one.
         * @summary 
         * @param {RefreshRequestDTO} refreshRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerRefresh(refreshRequestDTO: RefreshRequestDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RefreshResponseDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerRefresh(refreshRequestDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Login endpoint, use credentials to get access and refresh token
         * @summary 
         * @param {SignInRequestDTO} signInRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerSignIn(signInRequestDTO: SignInRequestDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SignInResponseDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerSignIn(signInRequestDTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * Test endpoint. TODO: Remove
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerGetProfile(options?: any): AxiosPromise<object> {
            return localVarFp.authControllerGetProfile(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerLogOut(options?: any): AxiosPromise<void> {
            return localVarFp.authControllerLogOut(options).then((request) => request(axios, basePath));
        },
        /**
         * Endpoint to get a new access token fron an access one.
         * @summary 
         * @param {RefreshRequestDTO} refreshRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerRefresh(refreshRequestDTO: RefreshRequestDTO, options?: any): AxiosPromise<RefreshResponseDTO> {
            return localVarFp.authControllerRefresh(refreshRequestDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * Login endpoint, use credentials to get access and refresh token
         * @summary 
         * @param {SignInRequestDTO} signInRequestDTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerSignIn(signInRequestDTO: SignInRequestDTO, options?: any): AxiosPromise<SignInResponseDTO> {
            return localVarFp.authControllerSignIn(signInRequestDTO, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * Test endpoint. TODO: Remove
     * @summary 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerGetProfile(options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authControllerGetProfile(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerLogOut(options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authControllerLogOut(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Endpoint to get a new access token fron an access one.
     * @summary 
     * @param {RefreshRequestDTO} refreshRequestDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerRefresh(refreshRequestDTO: RefreshRequestDTO, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authControllerRefresh(refreshRequestDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Login endpoint, use credentials to get access and refresh token
     * @summary 
     * @param {SignInRequestDTO} signInRequestDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authControllerSignIn(signInRequestDTO: SignInRequestDTO, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).authControllerSignIn(signInRequestDTO, options).then((request) => request(this.axios, this.basePath));
    }
}
