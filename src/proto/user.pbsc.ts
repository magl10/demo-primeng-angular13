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
import * as thisProto from './user.pb';
import { GRPC_USER_SERVICE_CLIENT_SETTINGS } from './user.pbconf';
/**
 * Service client implementation for user.UserService
 */
@Injectable({ providedIn: 'any' })
export class UserServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /user.UserService/CreateUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserRs>>
     */
    createUser: (
      requestData: thisProto.UserRq,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserRs>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/user.UserService/CreateUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserRq,
        responseClass: thisProto.UserRs
      });
    },
    /**
     * Unary call: /user.UserService/UpdateUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserRs>>
     */
    updateUser: (
      requestData: thisProto.UserUpdateRq,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserRs>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/user.UserService/UpdateUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserUpdateRq,
        responseClass: thisProto.UserRs
      });
    },
    /**
     * Unary call: /user.UserService/DeleteUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DeleteUserRs>>
     */
    deleteUser: (
      requestData: thisProto.DeleteUserRq,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DeleteUserRs>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/user.UserService/DeleteUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteUserRq,
        responseClass: thisProto.DeleteUserRs
      });
    },
    /**
     * Unary call: /user.UserService/GetAllUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListUsersResponse>>
     */
    getAllUser: (
      requestData: thisProto.EmptyRq,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListUsersResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/user.UserService/GetAllUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.EmptyRq,
        responseClass: thisProto.ListUsersResponse
      });
    },
    /**
     * Server streaming: /user.UserService/OnReceivedLocationDriver
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.PositionRs>>
     */
    onReceivedLocationDriver: (
      requestData: thisProto.GetPositionDriverRq,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.PositionRs>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/user.UserService/OnReceivedLocationDriver',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetPositionDriverRq,
        responseClass: thisProto.PositionRs
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_USER_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('user.UserService', settings);
  }

  /**
   * Unary call @/user.UserService/CreateUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserRs>
   */
  createUser(
    requestData: thisProto.UserRq,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserRs> {
    return this.$raw
      .createUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/user.UserService/UpdateUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserRs>
   */
  updateUser(
    requestData: thisProto.UserUpdateRq,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserRs> {
    return this.$raw
      .updateUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/user.UserService/DeleteUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DeleteUserRs>
   */
  deleteUser(
    requestData: thisProto.DeleteUserRq,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DeleteUserRs> {
    return this.$raw
      .deleteUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/user.UserService/GetAllUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListUsersResponse>
   */
  getAllUser(
    requestData: thisProto.EmptyRq,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListUsersResponse> {
    return this.$raw
      .getAllUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Server streaming @/user.UserService/OnReceivedLocationDriver
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PositionRs>
   */
  onReceivedLocationDriver(
    requestData: thisProto.GetPositionDriverRq,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.PositionRs> {
    return this.$raw
      .onReceivedLocationDriver(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
