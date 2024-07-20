import { Tables, user } from "./.prismo/types";
import { PrismoClient } from "prismoo";
const PRIMARY_INSTANCE = "http://localhost:8081";

const client = new PrismoClient<Tables>({
  url: PRIMARY_INSTANCE,
});

// const version = await client.version();
// console.log(version);

// const tables = await client.listTables();
// console.log(tables);

await client.generateTypes({ writeToSQLFile: false });

const users = await client.findMany<user>({ table: "user", limit: 10 });

users.map((user) => {
  console.log(user.id);
});
