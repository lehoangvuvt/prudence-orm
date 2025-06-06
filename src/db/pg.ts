import { Pool, PoolClient, PoolConfig } from "pg";
import { BaseDatabase } from "./base";

export class PGDatabase extends BaseDatabase {
  private pool: Pool;

  async connect(): Promise<void> {
    const config: PoolConfig = {
      host: this.config.host,
      port: this.config.port,
      user: this.config.user,
      password: this.config.password,
      database: this.config.database,
    };
    this.pool = new Pool(config);
    try {
      await this.pool.connect();
      console.log("Connected to PostgreSQL database");
    } catch (error) {
      console.error("Error connecting to PostgreSQL database:", error);
    }
  }
}
