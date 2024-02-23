import { Pool } from "pg";

const db = new Pool({
  user: "testuser",
  host: "localhost",
  database: "testdb",
  password: "dhqmwprxm!23",
  port: 5432,
});

export default db;
