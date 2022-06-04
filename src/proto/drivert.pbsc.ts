/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './drivert.pb';
import { GRPC_DRIVERT_SERVICE_CLIENT_SETTINGS } from './drivert.pbconf';
/**
 * Service client implementation for Drivert.DrivertService
 */
@Injectable({ providedIn: 'any' })
export class DrivertServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /Drivert.DrivertService/CreateDrivert
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Drivert.DrivertRs>>
     */
    createDrivert: (
      requestData: thisProto.Drivert.DrivertRq,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Drivert.DrivertRs>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/Drivert.DrivertService/CreateDrivert',
        requestData,
        requestMetadata,
        requestClass: thisProto.Drivert.DrivertRq,
        responseClass: thisProto.Drivert.DrivertRs
      });
    },
    /**
     * Unary call: /Drivert.DrivertService/UpdateDrivert
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Drivert.DrivertRs>>
     */
    updateDrivert: (
      requestData: thisProto.Drivert.DrivertUpdateRq,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Drivert.DrivertRs>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/Drivert.DrivertService/UpdateDrivert',
        requestData,
        requestMetadata,
        requestClass: thisProto.Drivert.DrivertUpdateRq,
        responseClass: thisProto.Drivert.DrivertRs
      });
    },
    /**
     * Unary call: /Drivert.DrivertService/DeleteDrivert
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Drivert.DeleteDrivertRs>>
     */
    deleteDrivert: (
      requestData: thisProto.Drivert.DeleteDrivertRq,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Drivert.DeleteDrivertRs>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/Drivert.DrivertService/DeleteDrivert',
        requestData,
        requestMetadata,
        requestClass: thisProto.Drivert.DeleteDrivertRq,
        responseClass: thisProto.Drivert.DeleteDrivertRs
      });
    },
    /**
     * Unary call: /Drivert.DrivertService/GetAllDrivert
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Drivert.ListDrivertsResponse>>
     */
    getAllDrivert: (
      requestData: thisProto.Drivert.EmptyRq,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Drivert.ListDrivertsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/Drivert.DrivertService/GetAllDrivert',
        requestData,
        requestMetadata,
        requestClass: thisProto.Drivert.EmptyRq,
        responseClass: thisProto.Drivert.ListDrivertsResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_DRIVERT_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'Drivert.DrivertService',
      settings
    );
  }

  /**
   * Unary call @/Drivert.DrivertService/CreateDrivert
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Drivert.DrivertRs>
   */
  createDrivert(
    requestData: thisProto.Drivert.DrivertRq,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Drivert.DrivertRs> {
    return this.$raw
      .createDrivert(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/Drivert.DrivertService/UpdateDrivert
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Drivert.DrivertRs>
   */
  updateDrivert(
    requestData: thisProto.Drivert.DrivertUpdateRq,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Drivert.DrivertRs> {
    return this.$raw
      .updateDrivert(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/Drivert.DrivertService/DeleteDrivert
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Drivert.DeleteDrivertRs>
   */
  deleteDrivert(
    requestData: thisProto.Drivert.DeleteDrivertRq,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Drivert.DeleteDrivertRs> {
    return this.$raw
      .deleteDrivert(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/Drivert.DrivertService/GetAllDrivert
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Drivert.ListDrivertsResponse>
   */
  getAllDrivert(
    requestData: thisProto.Drivert.EmptyRq,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Drivert.ListDrivertsResponse> {
    return this.$raw
      .getAllDrivert(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
