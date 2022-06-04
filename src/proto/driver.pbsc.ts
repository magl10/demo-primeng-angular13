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
import * as thisProto from './driver.pb';
import { GRPC_DRIVER_SERVICE_CLIENT_SETTINGS } from './driver.pbconf';
/**
 * Service client implementation for Driver.DriverService
 */
@Injectable({ providedIn: 'any' })
export class DriverServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /Driver.DriverService/CreateDriver
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Driver.DriverRs>>
     */
    createDriver: (
      requestData: thisProto.Driver.DriverRq,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Driver.DriverRs>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/Driver.DriverService/CreateDriver',
        requestData,
        requestMetadata,
        requestClass: thisProto.Driver.DriverRq,
        responseClass: thisProto.Driver.DriverRs
      });
    },
    /**
     * Unary call: /Driver.DriverService/UpdateDriver
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Driver.DriverRs>>
     */
    updateDriver: (
      requestData: thisProto.Driver.DriverUpdateRq,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Driver.DriverRs>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/Driver.DriverService/UpdateDriver',
        requestData,
        requestMetadata,
        requestClass: thisProto.Driver.DriverUpdateRq,
        responseClass: thisProto.Driver.DriverRs
      });
    },
    /**
     * Unary call: /Driver.DriverService/DeleteDriver
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Driver.DeleteDriverRs>>
     */
    deleteDriver: (
      requestData: thisProto.Driver.DeleteDriverRq,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Driver.DeleteDriverRs>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/Driver.DriverService/DeleteDriver',
        requestData,
        requestMetadata,
        requestClass: thisProto.Driver.DeleteDriverRq,
        responseClass: thisProto.Driver.DeleteDriverRs
      });
    },
    /**
     * Unary call: /Driver.DriverService/GetAllDriver
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Driver.ListDriversResponse>>
     */
    getAllDriver: (
      requestData: thisProto.Driver.EmptyRq,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Driver.ListDriversResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/Driver.DriverService/GetAllDriver',
        requestData,
        requestMetadata,
        requestClass: thisProto.Driver.EmptyRq,
        responseClass: thisProto.Driver.ListDriversResponse
      });
    },
    /**
     * Server streaming: /Driver.DriverService/OnReceivedLocationDriver
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Driver.PositionRs>>
     */
    onReceivedLocationDriver: (
      requestData: thisProto.Driver.GetPositionDriverRq,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Driver.PositionRs>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/Driver.DriverService/OnReceivedLocationDriver',
        requestData,
        requestMetadata,
        requestClass: thisProto.Driver.GetPositionDriverRq,
        responseClass: thisProto.Driver.PositionRs
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_DRIVER_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('Driver.DriverService', settings);
  }

  /**
   * Unary call @/Driver.DriverService/CreateDriver
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Driver.DriverRs>
   */
  createDriver(
    requestData: thisProto.Driver.DriverRq,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Driver.DriverRs> {
    return this.$raw
      .createDriver(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/Driver.DriverService/UpdateDriver
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Driver.DriverRs>
   */
  updateDriver(
    requestData: thisProto.Driver.DriverUpdateRq,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Driver.DriverRs> {
    return this.$raw
      .updateDriver(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/Driver.DriverService/DeleteDriver
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Driver.DeleteDriverRs>
   */
  deleteDriver(
    requestData: thisProto.Driver.DeleteDriverRq,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Driver.DeleteDriverRs> {
    return this.$raw
      .deleteDriver(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/Driver.DriverService/GetAllDriver
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Driver.ListDriversResponse>
   */
  getAllDriver(
    requestData: thisProto.Driver.EmptyRq,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Driver.ListDriversResponse> {
    return this.$raw
      .getAllDriver(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/Driver.DriverService/OnReceivedLocationDriver
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Driver.PositionRs>
   */
  onReceivedLocationDriver(
    requestData: thisProto.Driver.GetPositionDriverRq,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Driver.PositionRs> {
    return this.$raw
      .onReceivedLocationDriver(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
