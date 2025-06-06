export type BaseProperty = {
  type: "text" | "number" | "boolean" | "Datetime" | "uuid";
  unique?: boolean;
  nullable?: boolean;
  index?: boolean;
};

type NumberFieldProperty = {
  type: "number";
  primary?: {
    autoIncrement?: boolean;
  };
} & BaseProperty;

type TextFieldProperty = {
  type: "text";
  length?: number;
  primary?: {
    autoIncrement?: boolean;
  };
} & BaseProperty;

type UUIDFieldProperty = {
  type: "uuid";
  primary?: boolean;
} & BaseProperty;

export type FieldProperties =
  | NumberFieldProperty
  | TextFieldProperty
  | UUIDFieldProperty;

type FieldTypeToTS<T extends FieldProperties> = T["type"] extends "text"
  ? string
  : T["type"] extends "number"
  ? number
  : T["type"] extends "boolean"
  ? boolean
  : T["type"] extends "uuid"
  ? string
  : T["type"] extends "Datetime"
  ? Date
  : unknown;

export type InferRow<TFields extends Record<string, FieldProperties>> = {
  [K in keyof TFields]: FieldTypeToTS<TFields[K]>;
};
