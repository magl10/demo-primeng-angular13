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
 * Message implementation for Driver.DriverRq
 */
export class DriverRq implements GrpcMessage {
  static id = 'Driver.DriverRq';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DriverRq();
    DriverRq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DriverRq) {
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
    _instance: DriverRq,
    _reader: BinaryReader
  ) {
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

    DriverRq.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: DriverRq, _writer: BinaryWriter) {
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
   * @param _value initial values object or instance of DriverRq to deeply clone from
   */
  constructor(_value?: RecursivePartial<DriverRq.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.nickName = _value.nickName;
    this.address = _value.address;
    this.age = _value.age;
    this.active = _value.active;
    this.sex = _value.sex;
    DriverRq.refineValues(this);
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
    DriverRq.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DriverRq.AsObject {
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
  ): DriverRq.AsProtobufJSON {
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
export module DriverRq {
  /**
   * Standard JavaScript object representation for DriverRq
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
   * Protobuf JSON representation for DriverRq
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
 * Message implementation for Driver.DriverRs
 */
export class DriverRs implements GrpcMessage {
  static id = 'Driver.DriverRs';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DriverRs();
    DriverRs.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DriverRs) {
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
    _instance: DriverRs,
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

    DriverRs.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: DriverRs, _writer: BinaryWriter) {
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
   * @param _value initial values object or instance of DriverRs to deeply clone from
   */
  constructor(_value?: RecursivePartial<DriverRs.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.nickName = _value.nickName;
    this.address = _value.address;
    this.age = _value.age;
    this.active = _value.active;
    this.sex = _value.sex;
    DriverRs.refineValues(this);
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
    DriverRs.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DriverRs.AsObject {
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
  ): DriverRs.AsProtobufJSON {
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
export module DriverRs {
  /**
   * Standard JavaScript object representation for DriverRs
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
   * Protobuf JSON representation for DriverRs
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
 * Message implementation for Driver.DriverUpdateRq
 */
export class DriverUpdateRq implements GrpcMessage {
  static id = 'Driver.DriverUpdateRq';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DriverUpdateRq();
    DriverUpdateRq.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DriverUpdateRq) {
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
    _instance: DriverUpdateRq,
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

    DriverUpdateRq.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DriverUpdateRq,
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
   * @param _value initial values object or instance of DriverUpdateRq to deeply clone from
   */
  constructor(_value?: RecursivePartial<DriverUpdateRq.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.nickName = _value.nickName;
    this.address = _value.address;
    this.age = _value.age;
    this.active = _value.active;
    this.sex = _value.sex;
    DriverUpdateRq.refineValues(this);
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
    DriverUpdateRq.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DriverUpdateRq.AsObject {
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
  ): DriverUpdateRq.AsProtobufJSON {
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
export module DriverUpdateRq {
  /**
   * Standard JavaScript object representation for DriverUpdateRq
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
   * Protobuf JSON representation for DriverUpdateRq
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
 * Message implementation for Driver.DeleteDriverRq
 */
export class DeleteDriverRq implements GrpcMessage {
  static id = 'Driver.DeleteDriverRq';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteDriverRq();
    DeleteDriverRq.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteDriverRq) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteDriverRq,
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

    DeleteDriverRq.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteDriverRq,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteDriverRq to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteDriverRq.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    DeleteDriverRq.refineValues(this);
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
    DeleteDriverRq.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteDriverRq.AsObject {
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
  ): DeleteDriverRq.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module DeleteDriverRq {
  /**
   * Standard JavaScript object representation for DeleteDriverRq
   */
  export interface AsObject {
    id?: string;
  }

  /**
   * Protobuf JSON representation for DeleteDriverRq
   */
  export interface AsProtobufJSON {
    id?: string;
  }
}

/**
 * Message implementation for Driver.DeleteDriverRs
 */
export class DeleteDriverRs implements GrpcMessage {
  static id = 'Driver.DeleteDriverRs';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteDriverRs();
    DeleteDriverRs.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteDriverRs) {
    _instance.complete = _instance.complete || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteDriverRs,
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

    DeleteDriverRs.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteDriverRs,
    _writer: BinaryWriter
  ) {
    if (_instance.complete) {
      _writer.writeBool(1, _instance.complete);
    }
  }

  private _complete?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteDriverRs to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteDriverRs.AsObject>) {
    _value = _value || {};
    this.complete = _value.complete;
    DeleteDriverRs.refineValues(this);
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
    DeleteDriverRs.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteDriverRs.AsObject {
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
  ): DeleteDriverRs.AsProtobufJSON {
    return {
      complete: this.complete
    };
  }
}
export module DeleteDriverRs {
  /**
   * Standard JavaScript object representation for DeleteDriverRs
   */
  export interface AsObject {
    complete?: boolean;
  }

  /**
   * Protobuf JSON representation for DeleteDriverRs
   */
  export interface AsProtobufJSON {
    complete?: boolean;
  }
}

/**
 * Message implementation for Driver.EmptyRq
 */
export class EmptyRq implements GrpcMessage {
  static id = 'Driver.EmptyRq';

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
 * Message implementation for Driver.ListDriversResponse
 */
export class ListDriversResponse implements GrpcMessage {
  static id = 'Driver.ListDriversResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListDriversResponse();
    ListDriversResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListDriversResponse) {
    _instance.drivers = _instance.drivers || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListDriversResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Driver.DriverRs();
          _reader.readMessage(
            messageInitializer1,
            Driver.DriverRs.deserializeBinaryFromReader
          );
          (_instance.drivers = _instance.drivers || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListDriversResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListDriversResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.drivers && _instance.drivers.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.drivers as any,
        Driver.DriverRs.serializeBinaryToWriter
      );
    }
  }

  private _drivers?: Driver.DriverRs[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListDriversResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListDriversResponse.AsObject>) {
    _value = _value || {};
    this.drivers = (_value.drivers || []).map(m => new Driver.DriverRs(m));
    ListDriversResponse.refineValues(this);
  }
  get drivers(): Driver.DriverRs[] | undefined {
    return this._drivers;
  }
  set drivers(value: Driver.DriverRs[] | undefined) {
    this._drivers = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListDriversResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListDriversResponse.AsObject {
    return {
      drivers: (this.drivers || []).map(m => m.toObject())
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
  ): ListDriversResponse.AsProtobufJSON {
    return {
      drivers: (this.drivers || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListDriversResponse {
  /**
   * Standard JavaScript object representation for ListDriversResponse
   */
  export interface AsObject {
    drivers?: Driver.DriverRs.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListDriversResponse
   */
  export interface AsProtobufJSON {
    drivers?: Driver.DriverRs.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for Driver.GetPositionDriverRq
 */
export class GetPositionDriverRq implements GrpcMessage {
  static id = 'Driver.GetPositionDriverRq';

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
 * Message implementation for Driver.PositionRs
 */
export class PositionRs implements GrpcMessage {
  static id = 'Driver.PositionRs';

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
