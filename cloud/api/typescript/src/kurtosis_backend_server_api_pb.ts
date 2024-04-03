// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file kurtosis_backend_server_api.proto (package kurtosis_cloud, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message kurtosis_cloud.GetOrCreateApiKeyRequest
 */
export class GetOrCreateApiKeyRequest extends Message<GetOrCreateApiKeyRequest> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  constructor(data?: PartialMessage<GetOrCreateApiKeyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.GetOrCreateApiKeyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrCreateApiKeyRequest {
    return new GetOrCreateApiKeyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrCreateApiKeyRequest {
    return new GetOrCreateApiKeyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrCreateApiKeyRequest {
    return new GetOrCreateApiKeyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetOrCreateApiKeyRequest | PlainMessage<GetOrCreateApiKeyRequest> | undefined, b: GetOrCreateApiKeyRequest | PlainMessage<GetOrCreateApiKeyRequest> | undefined): boolean {
    return proto3.util.equals(GetOrCreateApiKeyRequest, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.GetOrCreateApiKeyResponse
 */
export class GetOrCreateApiKeyResponse extends Message<GetOrCreateApiKeyResponse> {
  /**
   * @generated from field: string api_key = 1;
   */
  apiKey = "";

  constructor(data?: PartialMessage<GetOrCreateApiKeyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.GetOrCreateApiKeyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "api_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrCreateApiKeyResponse {
    return new GetOrCreateApiKeyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrCreateApiKeyResponse {
    return new GetOrCreateApiKeyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrCreateApiKeyResponse {
    return new GetOrCreateApiKeyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetOrCreateApiKeyResponse | PlainMessage<GetOrCreateApiKeyResponse> | undefined, b: GetOrCreateApiKeyResponse | PlainMessage<GetOrCreateApiKeyResponse> | undefined): boolean {
    return proto3.util.equals(GetOrCreateApiKeyResponse, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.GetOrCreateInstanceRequest
 */
export class GetOrCreateInstanceRequest extends Message<GetOrCreateInstanceRequest> {
  /**
   * @generated from field: string api_key = 1;
   */
  apiKey = "";

  constructor(data?: PartialMessage<GetOrCreateInstanceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.GetOrCreateInstanceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "api_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrCreateInstanceRequest {
    return new GetOrCreateInstanceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrCreateInstanceRequest {
    return new GetOrCreateInstanceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrCreateInstanceRequest {
    return new GetOrCreateInstanceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetOrCreateInstanceRequest | PlainMessage<GetOrCreateInstanceRequest> | undefined, b: GetOrCreateInstanceRequest | PlainMessage<GetOrCreateInstanceRequest> | undefined): boolean {
    return proto3.util.equals(GetOrCreateInstanceRequest, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.GetOrCreateInstanceResponse
 */
export class GetOrCreateInstanceResponse extends Message<GetOrCreateInstanceResponse> {
  /**
   * @generated from field: string instance_id = 1;
   */
  instanceId = "";

  constructor(data?: PartialMessage<GetOrCreateInstanceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.GetOrCreateInstanceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "instance_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrCreateInstanceResponse {
    return new GetOrCreateInstanceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrCreateInstanceResponse {
    return new GetOrCreateInstanceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrCreateInstanceResponse {
    return new GetOrCreateInstanceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetOrCreateInstanceResponse | PlainMessage<GetOrCreateInstanceResponse> | undefined, b: GetOrCreateInstanceResponse | PlainMessage<GetOrCreateInstanceResponse> | undefined): boolean {
    return proto3.util.equals(GetOrCreateInstanceResponse, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.GetCloudInstanceConfigArgs
 */
export class GetCloudInstanceConfigArgs extends Message<GetCloudInstanceConfigArgs> {
  /**
   * @generated from field: optional string api_key = 1;
   */
  apiKey?: string;

  /**
   * @generated from field: optional string instance_id = 2;
   */
  instanceId?: string;

  /**
   * @generated from field: optional string instance_short_id = 3;
   */
  instanceShortId?: string;

  constructor(data?: PartialMessage<GetCloudInstanceConfigArgs>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.GetCloudInstanceConfigArgs";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "api_key", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "instance_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "instance_short_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCloudInstanceConfigArgs {
    return new GetCloudInstanceConfigArgs().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCloudInstanceConfigArgs {
    return new GetCloudInstanceConfigArgs().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCloudInstanceConfigArgs {
    return new GetCloudInstanceConfigArgs().fromJsonString(jsonString, options);
  }

  static equals(a: GetCloudInstanceConfigArgs | PlainMessage<GetCloudInstanceConfigArgs> | undefined, b: GetCloudInstanceConfigArgs | PlainMessage<GetCloudInstanceConfigArgs> | undefined): boolean {
    return proto3.util.equals(GetCloudInstanceConfigArgs, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.LaunchResult
 */
export class LaunchResult extends Message<LaunchResult> {
  /**
   * @generated from field: string instance_name = 1;
   */
  instanceName = "";

  /**
   * @generated from field: string instance_id = 2;
   */
  instanceId = "";

  /**
   * @generated from field: string public_dns = 3;
   */
  publicDns = "";

  /**
   * @generated from field: string ip_address = 4;
   */
  ipAddress = "";

  constructor(data?: PartialMessage<LaunchResult>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.LaunchResult";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "instance_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "instance_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "public_dns", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ip_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LaunchResult {
    return new LaunchResult().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LaunchResult {
    return new LaunchResult().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LaunchResult {
    return new LaunchResult().fromJsonString(jsonString, options);
  }

  static equals(a: LaunchResult | PlainMessage<LaunchResult> | undefined, b: LaunchResult | PlainMessage<LaunchResult> | undefined): boolean {
    return proto3.util.equals(LaunchResult, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.GetCloudInstanceConfigResponse
 */
export class GetCloudInstanceConfigResponse extends Message<GetCloudInstanceConfigResponse> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * @generated from field: string instance_id = 2;
   */
  instanceId = "";

  /**
   * @generated from field: string context_config = 3;
   */
  contextConfig = "";

  /**
   * @generated from field: kurtosis_cloud.LaunchResult launch_result = 4;
   */
  launchResult?: LaunchResult;

  /**
   * @generated from field: string status = 5;
   */
  status = "";

  /**
   * @generated from field: string created = 6;
   */
  created = "";

  /**
   * @generated from field: string updated = 7;
   */
  updated = "";

  /**
   * deprecated in favor of aws_environment
   * TODO: remove it once this is released and the cloud BE is upgraded
   *
   * @generated from field: optional kurtosis_cloud.AwsKey user_key = 8;
   */
  userKey?: AwsKey;

  /**
   * TODO: remove the optional once this is released and the cloud BE is upgraded
   *
   * @generated from field: optional kurtosis_cloud.AwsEnvironment aws_environment = 9;
   */
  awsEnvironment?: AwsEnvironment;

  constructor(data?: PartialMessage<GetCloudInstanceConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.GetCloudInstanceConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "instance_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "context_config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "launch_result", kind: "message", T: LaunchResult },
    { no: 5, name: "status", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "created", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "updated", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "user_key", kind: "message", T: AwsKey, opt: true },
    { no: 9, name: "aws_environment", kind: "message", T: AwsEnvironment, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCloudInstanceConfigResponse {
    return new GetCloudInstanceConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCloudInstanceConfigResponse {
    return new GetCloudInstanceConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCloudInstanceConfigResponse {
    return new GetCloudInstanceConfigResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetCloudInstanceConfigResponse | PlainMessage<GetCloudInstanceConfigResponse> | undefined, b: GetCloudInstanceConfigResponse | PlainMessage<GetCloudInstanceConfigResponse> | undefined): boolean {
    return proto3.util.equals(GetCloudInstanceConfigResponse, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.GetOrCreatePaymentConfigArgs
 */
export class GetOrCreatePaymentConfigArgs extends Message<GetOrCreatePaymentConfigArgs> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  /**
   * @generated from field: bool setup_intent = 2;
   */
  setupIntent = false;

  constructor(data?: PartialMessage<GetOrCreatePaymentConfigArgs>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.GetOrCreatePaymentConfigArgs";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "setup_intent", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrCreatePaymentConfigArgs {
    return new GetOrCreatePaymentConfigArgs().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrCreatePaymentConfigArgs {
    return new GetOrCreatePaymentConfigArgs().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrCreatePaymentConfigArgs {
    return new GetOrCreatePaymentConfigArgs().fromJsonString(jsonString, options);
  }

  static equals(a: GetOrCreatePaymentConfigArgs | PlainMessage<GetOrCreatePaymentConfigArgs> | undefined, b: GetOrCreatePaymentConfigArgs | PlainMessage<GetOrCreatePaymentConfigArgs> | undefined): boolean {
    return proto3.util.equals(GetOrCreatePaymentConfigArgs, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.PaymentMethod
 */
export class PaymentMethod extends Message<PaymentMethod> {
  /**
   * @generated from field: int32 exp_month = 1;
   */
  expMonth = 0;

  /**
   * @generated from field: int32 exp_year = 2;
   */
  expYear = 0;

  /**
   * @generated from field: string last_four = 3;
   */
  lastFour = "";

  constructor(data?: PartialMessage<PaymentMethod>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.PaymentMethod";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "exp_month", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "exp_year", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "last_four", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentMethod {
    return new PaymentMethod().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentMethod {
    return new PaymentMethod().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentMethod {
    return new PaymentMethod().fromJsonString(jsonString, options);
  }

  static equals(a: PaymentMethod | PlainMessage<PaymentMethod> | undefined, b: PaymentMethod | PlainMessage<PaymentMethod> | undefined): boolean {
    return proto3.util.equals(PaymentMethod, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.PaymentProduct
 */
export class PaymentProduct extends Message<PaymentProduct> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: int32 price_unit_amount = 2;
   */
  priceUnitAmount = 0;

  /**
   * @generated from field: string price_currency = 3;
   */
  priceCurrency = "";

  /**
   * @generated from field: string tax_code_name = 4;
   */
  taxCodeName = "";

  constructor(data?: PartialMessage<PaymentProduct>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.PaymentProduct";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "price_unit_amount", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "price_currency", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "tax_code_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentProduct {
    return new PaymentProduct().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentProduct {
    return new PaymentProduct().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentProduct {
    return new PaymentProduct().fromJsonString(jsonString, options);
  }

  static equals(a: PaymentProduct | PlainMessage<PaymentProduct> | undefined, b: PaymentProduct | PlainMessage<PaymentProduct> | undefined): boolean {
    return proto3.util.equals(PaymentProduct, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.PaymentSubscription
 */
export class PaymentSubscription extends Message<PaymentSubscription> {
  /**
   * @generated from field: kurtosis_cloud.PaymentProduct product = 1;
   */
  product?: PaymentProduct;

  /**
   * @generated from field: kurtosis_cloud.PaymentSubscription.Status status = 2;
   */
  status = PaymentSubscription_Status.ACTIVE;

  constructor(data?: PartialMessage<PaymentSubscription>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.PaymentSubscription";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "product", kind: "message", T: PaymentProduct },
    { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(PaymentSubscription_Status) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaymentSubscription {
    return new PaymentSubscription().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaymentSubscription {
    return new PaymentSubscription().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaymentSubscription {
    return new PaymentSubscription().fromJsonString(jsonString, options);
  }

  static equals(a: PaymentSubscription | PlainMessage<PaymentSubscription> | undefined, b: PaymentSubscription | PlainMessage<PaymentSubscription> | undefined): boolean {
    return proto3.util.equals(PaymentSubscription, a, b);
  }
}

/**
 * @generated from enum kurtosis_cloud.PaymentSubscription.Status
 */
export enum PaymentSubscription_Status {
  /**
   * @generated from enum value: ACTIVE = 0;
   */
  ACTIVE = 0,

  /**
   * @generated from enum value: CANCELLED = 1;
   */
  CANCELLED = 1,

  /**
   * @generated from enum value: UNKNOWN = 2;
   */
  UNKNOWN = 2,

  /**
   * @generated from enum value: ACTIVE_CANCEL_AT_PERIOD_END = 3;
   */
  ACTIVE_CANCEL_AT_PERIOD_END = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(PaymentSubscription_Status)
proto3.util.setEnumType(PaymentSubscription_Status, "kurtosis_cloud.PaymentSubscription.Status", [
  { no: 0, name: "ACTIVE" },
  { no: 1, name: "CANCELLED" },
  { no: 2, name: "UNKNOWN" },
  { no: 3, name: "ACTIVE_CANCEL_AT_PERIOD_END" },
]);

/**
 * @generated from message kurtosis_cloud.GetOrCreatePaymentConfigResponse
 */
export class GetOrCreatePaymentConfigResponse extends Message<GetOrCreatePaymentConfigResponse> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * @generated from field: optional string client_secret = 2;
   */
  clientSecret?: string;

  /**
   * @generated from field: optional kurtosis_cloud.PaymentMethod payment_method = 3;
   */
  paymentMethod?: PaymentMethod;

  /**
   * @generated from field: kurtosis_cloud.PaymentProduct product = 4;
   */
  product?: PaymentProduct;

  /**
   * @generated from field: optional kurtosis_cloud.PaymentSubscription subscription = 5;
   */
  subscription?: PaymentSubscription;

  /**
   * @generated from field: int32 trial_end = 6;
   */
  trialEnd = 0;

  constructor(data?: PartialMessage<GetOrCreatePaymentConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.GetOrCreatePaymentConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_secret", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "payment_method", kind: "message", T: PaymentMethod, opt: true },
    { no: 4, name: "product", kind: "message", T: PaymentProduct },
    { no: 5, name: "subscription", kind: "message", T: PaymentSubscription, opt: true },
    { no: 6, name: "trial_end", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrCreatePaymentConfigResponse {
    return new GetOrCreatePaymentConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrCreatePaymentConfigResponse {
    return new GetOrCreatePaymentConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrCreatePaymentConfigResponse {
    return new GetOrCreatePaymentConfigResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetOrCreatePaymentConfigResponse | PlainMessage<GetOrCreatePaymentConfigResponse> | undefined, b: GetOrCreatePaymentConfigResponse | PlainMessage<GetOrCreatePaymentConfigResponse> | undefined): boolean {
    return proto3.util.equals(GetOrCreatePaymentConfigResponse, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.RefreshDefaultPaymentMethodArgs
 */
export class RefreshDefaultPaymentMethodArgs extends Message<RefreshDefaultPaymentMethodArgs> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  /**
   * @generated from field: string payment_method_id = 2;
   */
  paymentMethodId = "";

  constructor(data?: PartialMessage<RefreshDefaultPaymentMethodArgs>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.RefreshDefaultPaymentMethodArgs";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "payment_method_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefreshDefaultPaymentMethodArgs {
    return new RefreshDefaultPaymentMethodArgs().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefreshDefaultPaymentMethodArgs {
    return new RefreshDefaultPaymentMethodArgs().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefreshDefaultPaymentMethodArgs {
    return new RefreshDefaultPaymentMethodArgs().fromJsonString(jsonString, options);
  }

  static equals(a: RefreshDefaultPaymentMethodArgs | PlainMessage<RefreshDefaultPaymentMethodArgs> | undefined, b: RefreshDefaultPaymentMethodArgs | PlainMessage<RefreshDefaultPaymentMethodArgs> | undefined): boolean {
    return proto3.util.equals(RefreshDefaultPaymentMethodArgs, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.CancelPaymentSubscriptionArgs
 */
export class CancelPaymentSubscriptionArgs extends Message<CancelPaymentSubscriptionArgs> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  constructor(data?: PartialMessage<CancelPaymentSubscriptionArgs>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.CancelPaymentSubscriptionArgs";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CancelPaymentSubscriptionArgs {
    return new CancelPaymentSubscriptionArgs().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CancelPaymentSubscriptionArgs {
    return new CancelPaymentSubscriptionArgs().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CancelPaymentSubscriptionArgs {
    return new CancelPaymentSubscriptionArgs().fromJsonString(jsonString, options);
  }

  static equals(a: CancelPaymentSubscriptionArgs | PlainMessage<CancelPaymentSubscriptionArgs> | undefined, b: CancelPaymentSubscriptionArgs | PlainMessage<CancelPaymentSubscriptionArgs> | undefined): boolean {
    return proto3.util.equals(CancelPaymentSubscriptionArgs, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.AwsKey
 */
export class AwsKey extends Message<AwsKey> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string secret = 2;
   */
  secret = "";

  constructor(data?: PartialMessage<AwsKey>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.AwsKey";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AwsKey {
    return new AwsKey().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AwsKey {
    return new AwsKey().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AwsKey {
    return new AwsKey().fromJsonString(jsonString, options);
  }

  static equals(a: AwsKey | PlainMessage<AwsKey> | undefined, b: AwsKey | PlainMessage<AwsKey> | undefined): boolean {
    return proto3.util.equals(AwsKey, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.AwsEnvironment
 */
export class AwsEnvironment extends Message<AwsEnvironment> {
  /**
   * @generated from field: string access_key_id = 1;
   */
  accessKeyId = "";

  /**
   * @generated from field: string secret_access_key = 2;
   */
  secretAccessKey = "";

  /**
   * @generated from field: string bucket_region = 3;
   */
  bucketRegion = "";

  /**
   * @generated from field: string bucket_name = 4;
   */
  bucketName = "";

  /**
   * @generated from field: string bucket_user_folder = 5;
   */
  bucketUserFolder = "";

  constructor(data?: PartialMessage<AwsEnvironment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.AwsEnvironment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_key_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "secret_access_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "bucket_region", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "bucket_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "bucket_user_folder", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AwsEnvironment {
    return new AwsEnvironment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AwsEnvironment {
    return new AwsEnvironment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AwsEnvironment {
    return new AwsEnvironment().fromJsonString(jsonString, options);
  }

  static equals(a: AwsEnvironment | PlainMessage<AwsEnvironment> | undefined, b: AwsEnvironment | PlainMessage<AwsEnvironment> | undefined): boolean {
    return proto3.util.equals(AwsEnvironment, a, b);
  }
}

/**
 * @generated from message kurtosis_cloud.UpdateAddressArgs
 */
export class UpdateAddressArgs extends Message<UpdateAddressArgs> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string line_1 = 3;
   */
  line1 = "";

  /**
   * @generated from field: optional string line_2 = 4;
   */
  line2?: string;

  /**
   * @generated from field: string city = 5;
   */
  city = "";

  /**
   * @generated from field: string state = 6;
   */
  state = "";

  /**
   * @generated from field: string postal_code = 7;
   */
  postalCode = "";

  /**
   * @generated from field: string country = 8;
   */
  country = "";

  constructor(data?: PartialMessage<UpdateAddressArgs>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kurtosis_cloud.UpdateAddressArgs";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "line_1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "line_2", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "city", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "postal_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "country", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateAddressArgs {
    return new UpdateAddressArgs().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateAddressArgs {
    return new UpdateAddressArgs().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateAddressArgs {
    return new UpdateAddressArgs().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateAddressArgs | PlainMessage<UpdateAddressArgs> | undefined, b: UpdateAddressArgs | PlainMessage<UpdateAddressArgs> | undefined): boolean {
    return proto3.util.equals(UpdateAddressArgs, a, b);
  }
}

