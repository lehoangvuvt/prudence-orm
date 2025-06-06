import { PGDatabase } from "./db/pg";
import { createModel } from "./model/defineModel";

async function main() {
  const db = new PGDatabase({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "password",
    database: "testdb",
  });

  await db.connect();
}

main();