import "dotenv/config";
import { seed } from "drizzle-seed";
import { users, posts } from "./schema";
import { drizzle } from "drizzle-orm/libsql";

const db = drizzle("file:./db.sqlite");

async function main() {
  await seed(db, { users, posts });
}

main();
