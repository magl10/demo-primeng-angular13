/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for user.UserRq
 */
export class UserRq implements GrpcMessage {
  static id = 'user.UserRq';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserRq();
    UserRq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserRq) {
    _instance.name = _instance.name || '';
    _instance.nickName = _instance.nickName || '';
    _instance.address = _instance.address || '';
    _instance.age = _instance.age || 0;
    _instance.active = _instance.active || false;
    _instance.sex = _instance.sex || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: UserRq, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.nickName = _reader.readString();
          break;
        case 3:
          _instance.address = _reader.readString();
          break;
        case 4:
          _instance.age = _reader.readInt32();
          break;
        case 5:
          _instance.active = _reader.readBool();
          break;
        case 6:
          _instance.sex = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UserRq.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UserRq, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.nickName) {
      _writer.writeString(2, _instance.nickName);
    }
    if (_instance.address) {
      _writer.writeString(3, _instance.address);
    }
    if (_instance.age) {
      _writer.writeInt32(4, _instance.age);
    }
    if (_instance.active) {
      _writer.writeBool(5, _instance.active);
    }
    if (_instance.sex) {
      _writer.writeString(6, _instance.sex);
    }
  }

  private _name?: string;
  private _nickName?: string;
  private _address?: string;
  private _age?: number;
  private _active?: boolean;
  private _sex?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserRq to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserRq.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.nickName = _value.nickName;
    this.address = _value.address;
    this.age = _value.age;
    this.active = _value.active;
    this.sex = _value.sex;
    UserRq.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get nickName(): string | undefined {
    return this._nickName;
  }
  set nickName(value: string | undefined) {
    this._nickName = value;
  }
  get address(): string | undefined {
    return this._address;
  }
  set address(value: string | undefined) {
    this._address = value;
  }
  get age(): number | undefined {
    return this._age;
  }
  set age(value: number | undefined) {
    this._age = value;
  }
  get active(): boolean | undefined {
    return this._active;
  }
  set active(value: boolean | undefined) {
    this._active = value;
  }
  get sex(): string | undefined {
    return this._sex;
  }
  set sex(value: string | undefined) {
    this._sex = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserRq.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserRq.AsObject {
    return {
      name: this.name,
      nickName: this.nickName,
      address: this.address,
      age: this.age,
      active: this.active,
      sex: this.sex
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UserRq.AsProtobufJSON {
    return {
      name: this.name,
      nickName: this.nickName,
      address: this.address,
      age: this.age,
      active: this.active,
      sex: this.sex
    };
  }
}
export module UserRq {
  /**
   * Standard JavaScript object representation for UserRq
   */
  export interface AsObject {
    name?: string;
    nickName?: string;
    address?: string;
    age?: number;
    active?: boolean;
    sex?: string;
  }

  /**
   * Protobuf JSON representation for UserRq
   */
  export interface AsProtobufJSON {
    name?: string;
    nickName?: string;
    address?: string;
    age?: number;
    active?: boolean;
    sex?: string;
  }
}

/**
 * Message implementation for user.UserRs
 */
export class UserRs implements GrpcMessage {
  static id = 'user.UserRs';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserRs();
    UserRs.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserRs) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.nickName = _instance.nickName || '';
    _instance.address = _instance.address || '';
    _instance.age = _instance.age || 0;
    _instance.active = _instance.active || false;
    _instance.sex = _instance.sex || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: UserRs, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.nickName = _reader.readString();
          break;
        case 4:
          _instance.address = _reader.readString();
          break;
        case 5:
          _instance.age = _reader.readInt32();
          break;
        case 6:
          _instance.active = _reader.readBool();
          break;
        case 7:
          _instance.sex = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UserRs.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UserRs, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.nickName) {
      _writer.writeString(3, _instance.nickName);
    }
    if (_instance.address) {
      _writer.writeString(4, _instance.address);
    }
    if (_instance.age) {
      _writer.writeInt32(5, _instance.age);
    }
    if (_instance.active) {
      _writer.writeBool(6, _instance.active);
    }
    if (_instance.sex) {
      _writer.writeString(7, _instance.sex);
    }
  }

  private _id?: string;
  private _name?: string;
  private _nickName?: string;
  private _address?: string;
  private _age?: number;
  private _active?: boolean;
  private _sex?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserRs to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserRs.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.nickName = _value.nickName;
    this.address = _value.address;
    this.age = _value.age;
    this.active = _value.active;
    this.sex = _value.sex;
    UserRs.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get nickName(): string | undefined {
    return this._nickName;
  }
  set nickName(value: string | undefined) {
    this._nickName = value;
  }
  get address(): string | undefined {
    return this._address;
  }
  set address(value: string | undefined) {
    this._address = value;
  }
  get age(): number | undefined {
    return this._age;
  }
  set age(value: number | undefined) {
    this._age = value;
  }
  get active(): boolean | undefined {
    return this._active;
  }
  set active(value: boolean | undefined) {
    this._active = value;
  }
  get sex(): string | undefined {
    return this._sex;
  }
  set sex(value: string | undefined) {
    this._sex = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserRs.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserRs.AsObject {
    return {
      id: this.id,
      name: this.name,
      nickName: this.nickName,
      address: this.address,
      age: this.age,
      active: this.active,
      sex: this.sex
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UserRs.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      nickName: this.nickName,
      address: this.address,
      age: this.age,
      active: this.active,
      sex: this.sex
    };
  }
}
export module UserRs {
  /**
   * Standard JavaScript object representation for UserRs
   */
  export interface AsObject {
    id?: string;
    name?: string;
    nickName?: string;
    address?: string;
    age?: number;
    active?: boolean;
    sex?: string;
  }

  /**
   * Protobuf JSON representation for UserRs
   */
  export interface AsProtobufJSON {
    id?: string;
    name?: string;
    nickName?: string;
    address?: string;
    age?: number;
    active?: boolean;
    sex?: string;
  }
}

/**
 * Message implementation for user.UserUpdateRq
 */
export class UserUpdateRq implements GrpcMessage {
  static id = 'user.UserUpdateRq';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserUpdateRq();
    UserUpdateRq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserUpdateRq) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.nickName = _instance.nickName || '';
    _instance.address = _instance.address || '';
    _instance.age = _instance.age || 0;
    _instance.active = _instance.active || false;
    _instance.sex = _instance.sex || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserUpdateRq,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.nickName = _reader.readString();
          break;
        case 4:
          _instance.address = _reader.readString();
          break;
        case 5:
          _instance.age = _reader.readInt32();
          break;
        case 6:
          _instance.active = _reader.readBool();
          break;
        case 7:
          _instance.sex = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UserUpdateRq.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserUpdateRq,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.nickName) {
      _writer.writeString(3, _instance.nickName);
    }
    if (_instance.address) {
      _writer.writeString(4, _instance.address);
    }
    if (_instance.age) {
      _writer.writeInt32(5, _instance.age);
    }
    if (_instance.active) {
      _writer.writeBool(6, _instance.active);
    }
    if (_instance.sex) {
      _writer.writeString(7, _instance.sex);
    }
  }

  private _id?: string;
  private _name?: string;
  private _nickName?: string;
  private _address?: string;
  private _age?: number;
  private _active?: boolean;
  private _sex?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserUpdateRq to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserUpdateRq.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.nickName = _value.nickName;
    this.address = _value.address;
    this.age = _value.age;
    this.active = _value.active;
    this.sex = _value.sex;
    UserUpdateRq.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get nickName(): string | undefined {
    return this._nickName;
  }
  set nickName(value: string | undefined) {
    this._nickName = value;
  }
  get address(): string | undefined {
    return this._address;
  }
  set address(value: string | undefined) {
    this._address = value;
  }
  get age(): number | undefined {
    return this._age;
  }
  set age(value: number | undefined) {
    this._age = value;
  }
  get active(): boolean | undefined {
    return this._active;
  }
  set active(value: boolean | undefined) {
    this._active = value;
  }
  get sex(): string | undefined {
    return this._sex;
  }
  set sex(value: string | undefined) {
    this._sex = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserUpdateRq.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserUpdateRq.AsObject {
    return {
      id: this.id,
      name: this.name,
      nickName: this.nickName,
      address: this.address,
      age: this.age,
      active: this.active,
      sex: this.sex
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UserUpdateRq.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      nickName: this.nickName,
      address: this.address,
      age: this.age,
      active: this.active,
      sex: this.sex
    };
  }
}
export module UserUpdateRq {
  /**
   * Standard JavaScript object representation for UserUpdateRq
   */
  export interface AsObject {
    id?: string;
    name?: string;
    nickName?: string;
    address?: string;
    age?: number;
    active?: boolean;
    sex?: string;
  }

  /**
   * Protobuf JSON representation for UserUpdateRq
   */
  export interface AsProtobufJSON {
    id?: string;
    name?: string;
    nickName?: string;
    address?: string;
    age?: number;
    active?: boolean;
    sex?: string;
  }
}

/**
 * Message implementation for user.DeleteUserRq
 */
export class DeleteUserRq implements GrpcMessage {
  static id = 'user.DeleteUserRq';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteUserRq();
    DeleteUserRq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteUserRq) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteUserRq,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteUserRq.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteUserRq,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteUserRq to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteUserRq.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    DeleteUserRq.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteUserRq.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteUserRq.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteUserRq.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module DeleteUserRq {
  /**
   * Standard JavaScript object representation for DeleteUserRq
   */
  export interface AsObject {
    id?: string;
  }

  /**
   * Protobuf JSON representation for DeleteUserRq
   */
  export interface AsProtobufJSON {
    id?: string;
  }
}

/**
 * Message implementation for user.DeleteUserRs
 */
export class DeleteUserRs implements GrpcMessage {
  static id = 'user.DeleteUserRs';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteUserRs();
    DeleteUserRs.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteUserRs) {
    _instance.complete = _instance.complete || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteUserRs,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.complete = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteUserRs.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteUserRs,
    _writer: BinaryWriter
  ) {
    if (_instance.complete) {
      _writer.writeBool(1, _instance.complete);
    }
  }

  private _complete?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteUserRs to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteUserRs.AsObject>) {
    _value = _value || {};
    this.complete = _value.complete;
    DeleteUserRs.refineValues(this);
  }
  get complete(): boolean | undefined {
    return this._complete;
  }
  set complete(value: boolean | undefined) {
    this._complete = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteUserRs.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteUserRs.AsObject {
    return {
      complete: this.complete
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteUserRs.AsProtobufJSON {
    return {
      complete: this.complete
    };
  }
}
export module DeleteUserRs {
  /**
   * Standard JavaScript object representation for DeleteUserRs
   */
  export interface AsObject {
    complete?: boolean;
  }

  /**
   * Protobuf JSON representation for DeleteUserRs
   */
  export interface AsProtobufJSON {
    complete?: boolean;
  }
}

/**
 * Message implementation for user.EmptyRq
 */
export class EmptyRq implements GrpcMessage {
  static id = 'user.EmptyRq';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EmptyRq();
    EmptyRq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EmptyRq) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EmptyRq,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    EmptyRq.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: EmptyRq, _writer: BinaryWriter) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EmptyRq to deeply clone from
   */
  constructor(_value?: RecursivePartial<EmptyRq.AsObject>) {
    _value = _value || {};
    EmptyRq.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EmptyRq.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EmptyRq.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): EmptyRq.AsProtobufJSON {
    return {};
  }
}
export module EmptyRq {
  /**
   * Standard JavaScript object representation for EmptyRq
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for EmptyRq
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for user.ListUsersResponse
 */
export class ListUsersResponse implements GrpcMessage {
  static id = 'user.ListUsersResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListUsersResponse();
    ListUsersResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListUsersResponse) {
    _instance.users = _instance.users || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListUsersResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new UserRs();
          _reader.readMessage(
            messageInitializer1,
            UserRs.deserializeBinaryFromReader
          );
          (_instance.users = _instance.users || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ListUsersResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListUsersResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.users && _instance.users.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.users as any,
        UserRs.serializeBinaryToWriter
      );
    }
  }

  private _users?: UserRs[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListUsersResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListUsersResponse.AsObject>) {
    _value = _value || {};
    this.users = (_value.users || []).map(m => new UserRs(m));
    ListUsersResponse.refineValues(this);
  }
  get users(): UserRs[] | undefined {
    return this._users;
  }
  set users(value: UserRs[] | undefined) {
    this._users = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListUsersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListUsersResponse.AsObject {
    return {
      users: (this.users || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListUsersResponse.AsProtobufJSON {
    return {
      users: (this.users || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListUsersResponse {
  /**
   * Standard JavaScript object representation for ListUsersResponse
   */
  export interface AsObject {
    users?: UserRs.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListUsersResponse
   */
  export interface AsProtobufJSON {
    users?: UserRs.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for user.GetPositionDriverRq
 */
export class GetPositionDriverRq implements GrpcMessage {
  static id = 'user.GetPositionDriverRq';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetPositionDriverRq();
    GetPositionDriverRq.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetPositionDriverRq) {
    _instance.idDriver = _instance.idDriver || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetPositionDriverRq,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.idDriver = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetPositionDriverRq.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetPositionDriverRq,
    _writer: BinaryWriter
  ) {
    if (_instance.idDriver) {
      _writer.writeString(1, _instance.idDriver);
    }
  }

  private _idDriver?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetPositionDriverRq to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetPositionDriverRq.AsObject>) {
    _value = _value || {};
    this.idDriver = _value.idDriver;
    GetPositionDriverRq.refineValues(this);
  }
  get idDriver(): string | undefined {
    return this._idDriver;
  }
  set idDriver(value: string | undefined) {
    this._idDriver = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetPositionDriverRq.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetPositionDriverRq.AsObject {
    return {
      idDriver: this.idDriver
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetPositionDriverRq.AsProtobufJSON {
    return {
      idDriver: this.idDriver
    };
  }
}
export module GetPositionDriverRq {
  /**
   * Standard JavaScript object representation for GetPositionDriverRq
   */
  export interface AsObject {
    idDriver?: string;
  }

  /**
   * Protobuf JSON representation for GetPositionDriverRq
   */
  export interface AsProtobufJSON {
    idDriver?: string;
  }
}

/**
 * Message implementation for user.PositionRs
 */
export class PositionRs implements GrpcMessage {
  static id = 'user.PositionRs';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PositionRs();
    PositionRs.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PositionRs) {
    _instance.latitude = _instance.latitude || 0;
    _instance.longitude = _instance.longitude || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PositionRs,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.latitude = _reader.readDouble();
          break;
        case 2:
          _instance.longitude = _reader.readDouble();
          break;
        default:
          _reader.skipField();
      }
    }

    PositionRs.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: PositionRs, _writer: BinaryWriter) {
    if (_instance.latitude) {
      _writer.writeDouble(1, _instance.latitude);
    }
    if (_instance.longitude) {
      _writer.writeDouble(2, _instance.longitude);
    }
  }

  private _latitude?: number;
  private _longitude?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PositionRs to deeply clone from
   */
  constructor(_value?: RecursivePartial<PositionRs.AsObject>) {
    _value = _value || {};
    this.latitude = _value.latitude;
    this.longitude = _value.longitude;
    PositionRs.refineValues(this);
  }
  get latitude(): number | undefined {
    return this._latitude;
  }
  set latitude(value: number | undefined) {
    this._latitude = value;
  }
  get longitude(): number | undefined {
    return this._longitude;
  }
  set longitude(value: number | undefined) {
    this._longitude = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PositionRs.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PositionRs.AsObject {
    return {
      latitude: this.latitude,
      longitude: this.longitude
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): PositionRs.AsProtobufJSON {
    return {
      latitude: this.latitude,
      longitude: this.longitude
    };
  }
}
export module PositionRs {
  /**
   * Standard JavaScript object representation for PositionRs
   */
  export interface AsObject {
    latitude?: number;
    longitude?: number;
  }

  /**
   * Protobuf JSON representation for PositionRs
   */
  export interface AsProtobufJSON {
    latitude?: number;
    longitude?: number;
  }
}
