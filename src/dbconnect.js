import { createPool } from "mysql";

const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'node_crud',
    connectionLimit: 10,
});

export default pool;