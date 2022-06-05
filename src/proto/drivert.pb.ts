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
 * Message implementation for Drivert.DrivertRq
 */
export class DrivertRq implements GrpcMessage {
  static id = 'Drivert.DrivertRq';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DrivertRq();
    DrivertRq.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DrivertRq) {
    _instance.name = _instance.name || '';
    _instance.lastname = _instance.lastname || '';
    _instance.dni = _instance.dni || '';
    _instance.placa = _instance.placa || '';
    _instance.marca = _instance.marca || '';
    _instance.status = _instance.status || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DrivertRq,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.lastname = _reader.readString();
          break;
        case 3:
          _instance.dni = _reader.readString();
          break;
        case 4:
          _instance.placa = _reader.readString();
          break;
        case 5:
          _instance.marca = _reader.readString();
          break;
        case 6:
          _instance.status = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    DrivertRq.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: DrivertRq, _writer: BinaryWriter) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.lastname) {
      _writer.writeString(2, _instance.lastname);
    }
    if (_instance.dni) {
      _writer.writeString(3, _instance.dni);
    }
    if (_instance.placa) {
      _writer.writeString(4, _instance.placa);
    }
    if (_instance.marca) {
      _writer.writeString(5, _instance.marca);
    }
    if (_instance.status) {
      _writer.writeBool(6, _instance.status);
    }
  }

  private _name?: string;
  private _lastname?: string;
  private _dni?: string;
  private _placa?: string;
  private _marca?: string;
  private _status?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DrivertRq to deeply clone from
   */
  constructor(_value?: RecursivePartial<DrivertRq.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.lastname = _value.lastname;
    this.dni = _value.dni;
    this.placa = _value.placa;
    this.marca = _value.marca;
    this.status = _value.status;
    DrivertRq.refineValues(this);
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }
  get lastname(): string | undefined {
    return this._lastname;
  }
  set lastname(value: string | undefined) {
    this._lastname = value;
  }
  get dni(): string | undefined {
    return this._dni;
  }
  set dni(value: string | undefined) {
    this._dni = value;
  }
  get placa(): string | undefined {
    return this._placa;
  }
  set placa(value: string | undefined) {
    this._placa = value;
  }
  get marca(): string | undefined {
    return this._marca;
  }
  set marca(value: string | undefined) {
    this._marca = value;
  }
  get status(): boolean | undefined {
    return this._status;
  }
  set status(value: boolean | undefined) {
    this._status = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DrivertRq.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DrivertRq.AsObject {
    return {
      name: this.name,
      lastname: this.lastname,
      dni: this.dni,
      placa: this.placa,
      marca: this.marca,
      status: this.status
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
  ): DrivertRq.AsProtobufJSON {
    return {
      name: this.name,
      lastname: this.lastname,
      dni: this.dni,
      placa: this.placa,
      marca: this.marca,
      status: this.status
    };
  }
}
export module DrivertRq {
  /**
   * Standard JavaScript object representation for DrivertRq
   */
  export interface AsObject {
    name?: string;
    lastname?: string;
    dni?: string;
    placa?: string;
    marca?: string;
    status?: boolean;
  }

  /**
   * Protobuf JSON representation for DrivertRq
   */
  export interface AsProtobufJSON {
    name?: string;
    lastname?: string;
    dni?: string;
    placa?: string;
    marca?: string;
    status?: boolean;
  }
}

/**
 * Message implementation for Drivert.DrivertRs
 */
export class DrivertRs implements GrpcMessage {
  static id = 'Drivert.DrivertRs';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DrivertRs();
    DrivertRs.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DrivertRs) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.lastname = _instance.lastname || '';
    _instance.dni = _instance.dni || '';
    _instance.placa = _instance.placa || '';
    _instance.marca = _instance.marca || '';
    _instance.status = _instance.status || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DrivertRs,
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
          _instance.lastname = _reader.readString();
          break;
        case 4:
          _instance.dni = _reader.readString();
          break;
        case 5:
          _instance.placa = _reader.readString();
          break;
        case 6:
          _instance.marca = _reader.readString();
          break;
        case 7:
          _instance.status = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    DrivertRs.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: DrivertRs, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.lastname) {
      _writer.writeString(3, _instance.lastname);
    }
    if (_instance.dni) {
      _writer.writeString(4, _instance.dni);
    }
    if (_instance.placa) {
      _writer.writeString(5, _instance.placa);
    }
    if (_instance.marca) {
      _writer.writeString(6, _instance.marca);
    }
    if (_instance.status) {
      _writer.writeBool(7, _instance.status);
    }
  }

  private _id?: string;
  private _name?: string;
  private _lastname?: string;
  private _dni?: string;
  private _placa?: string;
  private _marca?: string;
  private _status?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DrivertRs to deeply clone from
   */
  constructor(_value?: RecursivePartial<DrivertRs.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.lastname = _value.lastname;
    this.dni = _value.dni;
    this.placa = _value.placa;
    this.marca = _value.marca;
    this.status = _value.status;
    DrivertRs.refineValues(this);
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
  get lastname(): string | undefined {
    return this._lastname;
  }
  set lastname(value: string | undefined) {
    this._lastname = value;
  }
  get dni(): string | undefined {
    return this._dni;
  }
  set dni(value: string | undefined) {
    this._dni = value;
  }
  get placa(): string | undefined {
    return this._placa;
  }
  set placa(value: string | undefined) {
    this._placa = value;
  }
  get marca(): string | undefined {
    return this._marca;
  }
  set marca(value: string | undefined) {
    this._marca = value;
  }
  get status(): boolean | undefined {
    return this._status;
  }
  set status(value: boolean | undefined) {
    this._status = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DrivertRs.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DrivertRs.AsObject {
    return {
      id: this.id,
      name: this.name,
      lastname: this.lastname,
      dni: this.dni,
      placa: this.placa,
      marca: this.marca,
      status: this.status
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
  ): DrivertRs.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      lastname: this.lastname,
      dni: this.dni,
      placa: this.placa,
      marca: this.marca,
      status: this.status
    };
  }
}
export module DrivertRs {
  /**
   * Standard JavaScript object representation for DrivertRs
   */
  export interface AsObject {
    id?: string;
    name?: string;
    lastname?: string;
    dni?: string;
    placa?: string;
    marca?: string;
    status?: boolean;
  }

  /**
   * Protobuf JSON representation for DrivertRs
   */
  export interface AsProtobufJSON {
    id?: string;
    name?: string;
    lastname?: string;
    dni?: string;
    placa?: string;
    marca?: string;
    status?: boolean;
  }
}

/**
 * Message implementation for Drivert.DrivertUpdateRq
 */
export class DrivertUpdateRq implements GrpcMessage {
  static id = 'Drivert.DrivertUpdateRq';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DrivertUpdateRq();
    DrivertUpdateRq.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DrivertUpdateRq) {
    _instance.id = _instance.id || '';
    _instance.name = _instance.name || '';
    _instance.lastname = _instance.lastname || '';
    _instance.dni = _instance.dni || '';
    _instance.placa = _instance.placa || '';
    _instance.marca = _instance.marca || '';
    _instance.status = _instance.status || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DrivertUpdateRq,
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
          _instance.lastname = _reader.readString();
          break;
        case 4:
          _instance.dni = _reader.readString();
          break;
        case 5:
          _instance.placa = _reader.readString();
          break;
        case 6:
          _instance.marca = _reader.readString();
          break;
        case 7:
          _instance.status = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    DrivertUpdateRq.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DrivertUpdateRq,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.lastname) {
      _writer.writeString(3, _instance.lastname);
    }
    if (_instance.dni) {
      _writer.writeString(4, _instance.dni);
    }
    if (_instance.placa) {
      _writer.writeString(5, _instance.placa);
    }
    if (_instance.marca) {
      _writer.writeString(6, _instance.marca);
    }
    if (_instance.status) {
      _writer.writeBool(7, _instance.status);
    }
  }

  private _id?: string;
  private _name?: string;
  private _lastname?: string;
  private _dni?: string;
  private _placa?: string;
  private _marca?: string;
  private _status?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DrivertUpdateRq to deeply clone from
   */
  constructor(_value?: RecursivePartial<DrivertUpdateRq.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.lastname = _value.lastname;
    this.dni = _value.dni;
    this.placa = _value.placa;
    this.marca = _value.marca;
    this.status = _value.status;
    DrivertUpdateRq.refineValues(this);
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
  get lastname(): string | undefined {
    return this._lastname;
  }
  set lastname(value: string | undefined) {
    this._lastname = value;
  }
  get dni(): string | undefined {
    return this._dni;
  }
  set dni(value: string | undefined) {
    this._dni = value;
  }
  get placa(): string | undefined {
    return this._placa;
  }
  set placa(value: string | undefined) {
    this._placa = value;
  }
  get marca(): string | undefined {
    return this._marca;
  }
  set marca(value: string | undefined) {
    this._marca = value;
  }
  get status(): boolean | undefined {
    return this._status;
  }
  set status(value: boolean | undefined) {
    this._status = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DrivertUpdateRq.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DrivertUpdateRq.AsObject {
    return {
      id: this.id,
      name: this.name,
      lastname: this.lastname,
      dni: this.dni,
      placa: this.placa,
      marca: this.marca,
      status: this.status
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
  ): DrivertUpdateRq.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      lastname: this.lastname,
      dni: this.dni,
      placa: this.placa,
      marca: this.marca,
      status: this.status
    };
  }
}
export module DrivertUpdateRq {
  /**
   * Standard JavaScript object representation for DrivertUpdateRq
   */
  export interface AsObject {
    id?: string;
    name?: string;
    lastname?: string;
    dni?: string;
    placa?: string;
    marca?: string;
    status?: boolean;
  }

  /**
   * Protobuf JSON representation for DrivertUpdateRq
   */
  export interface AsProtobufJSON {
    id?: string;
    name?: string;
    lastname?: string;
    dni?: string;
    placa?: string;
    marca?: string;
    status?: boolean;
  }
}

/**
 * Message implementation for Drivert.DeleteDrivertRq
 */
export class DeleteDrivertRq implements GrpcMessage {
  static id = 'Drivert.DeleteDrivertRq';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteDrivertRq();
    DeleteDrivertRq.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteDrivertRq) {
    _instance.id = _instance.id || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteDrivertRq,
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

    DeleteDrivertRq.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteDrivertRq,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
  }

  private _id?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteDrivertRq to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteDrivertRq.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    DeleteDrivertRq.refineValues(this);
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
    DeleteDrivertRq.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteDrivertRq.AsObject {
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
  ): DeleteDrivertRq.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module DeleteDrivertRq {
  /**
   * Standard JavaScript object representation for DeleteDrivertRq
   */
  export interface AsObject {
    id?: string;
  }

  /**
   * Protobuf JSON representation for DeleteDrivertRq
   */
  export interface AsProtobufJSON {
    id?: string;
  }
}

/**
 * Message implementation for Drivert.DeleteDrivertRs
 */
export class DeleteDrivertRs implements GrpcMessage {
  static id = 'Drivert.DeleteDrivertRs';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteDrivertRs();
    DeleteDrivertRs.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteDrivertRs) {
    _instance.complete = _instance.complete || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteDrivertRs,
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

    DeleteDrivertRs.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteDrivertRs,
    _writer: BinaryWriter
  ) {
    if (_instance.complete) {
      _writer.writeBool(1, _instance.complete);
    }
  }

  private _complete?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteDrivertRs to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteDrivertRs.AsObject>) {
    _value = _value || {};
    this.complete = _value.complete;
    DeleteDrivertRs.refineValues(this);
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
    DeleteDrivertRs.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteDrivertRs.AsObject {
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
  ): DeleteDrivertRs.AsProtobufJSON {
    return {
      complete: this.complete
    };
  }
}
export module DeleteDrivertRs {
  /**
   * Standard JavaScript object representation for DeleteDrivertRs
   */
  export interface AsObject {
    complete?: boolean;
  }

  /**
   * Protobuf JSON representation for DeleteDrivertRs
   */
  export interface AsProtobufJSON {
    complete?: boolean;
  }
}

/**
 * Message implementation for Drivert.EmptyRq
 */
export class EmptyRq implements GrpcMessage {
  static id = 'Drivert.EmptyRq';

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
 * Message implementation for Drivert.ListDrivertsResponse
 */
export class ListDrivertsResponse implements GrpcMessage {
  static id = 'Drivert.ListDrivertsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListDrivertsResponse();
    ListDrivertsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListDrivertsResponse) {
    _instance.driverts = _instance.driverts || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListDrivertsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new DrivertRs();
          _reader.readMessage(
            messageInitializer1,
            DrivertRs.deserializeBinaryFromReader
          );
          (_instance.driverts = _instance.driverts || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListDrivertsResponse.refineValues(_instance);
  }

  /*
  static deserializeBinaryFromReader(
    _instance: ListDrivertsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Drivert.DrivertRs();
          _reader.readMessage(
            messageInitializer1,
            Drivert.DrivertRs.deserializeBinaryFromReader
          );
          (_instance.driverts = _instance.driverts || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListDrivertsResponse.refineValues(_instance);
  }
  */

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListDrivertsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.driverts && _instance.driverts.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.driverts as any,
        Drivert.DrivertRs.serializeBinaryToWriter
      );
    }
  }

  private _driverts?: Drivert.DrivertRs[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListDrivertsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListDrivertsResponse.AsObject>) {
    _value = _value || {};
    this.driverts = (_value.driverts || []).map(m => new Drivert.DrivertRs(m));
    ListDrivertsResponse.refineValues(this);
  }
  get driverts(): Drivert.DrivertRs[] | undefined {
    return this._driverts;
  }
  set driverts(value: Drivert.DrivertRs[] | undefined) {
    this._driverts = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListDrivertsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListDrivertsResponse.AsObject {
    return {
      driverts: (this.driverts || []).map(m => m.toObject())
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
  ): ListDrivertsResponse.AsProtobufJSON {
    return {
      driverts: (this.driverts || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListDrivertsResponse {
  /**
   * Standard JavaScript object representation for ListDrivertsResponse
   */
  export interface AsObject {
    driverts?: Drivert.DrivertRs.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListDrivertsResponse
   */
  export interface AsProtobufJSON {
    driverts?: Drivert.DrivertRs.AsProtobufJSON[] | null;
  }
}
