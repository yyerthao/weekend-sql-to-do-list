const pg = require('pg');
const Pool = pg.Pool;

let config = {}

if (process.env.DATABASE_URL) {s
// running remote (heroku)
config = {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthenticated: false }
    }
} else {
    config = {
        database: 'weekend-to-do-app',
        host: 'localhost',
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000
    };

}

const pool = new Pool(config);

pool.on("connect", () => {
    console.log("connected to postgres");
});

pool.on("error", (err) => {
    console.log("error connecting to postgres", err);
});

module.exports = pool;