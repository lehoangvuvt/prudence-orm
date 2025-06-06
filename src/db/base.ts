import { FieldBuilder } from "../model/field";  
import { DatabaseConfig } from "../types/db.t";

type InferFieldType<T> = T extends FieldBuilder<"string">
  ? string
  : T extends FieldBuilder<"int">
  ? number
  : T extends FieldBuilder<"boolean">
  ? boolean
  : any;

type InferModel<T> = {
  [K in keyof T]: InferFieldType<T[K]>;
};

/**
 * Base class for database connections.
 * This class should be extended by specific database implementations.
 */
export abstract class BaseDatabase {
  protected config: DatabaseConfig;

  constructor(_config: DatabaseConfig) {
    this.config = _config;
  }

  async connect(): Promise<void> {
    throw new Error("Method 'connect' must be implemented in derived classes.");
  }

  async findById<TField>(id: string): Promise<any> {
    throw new Error("Method 'query' must be implemented in derived classes.");
  }
}
