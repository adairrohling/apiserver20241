import { Pool, Client } from "pg";

const connectionString = process.env.DATABASE_URL 

export const pool = new Pool({
  connectionString,
  max: 10, // Número máximo de clientes no pool
  idleTimeoutMillis: 30000, // Tempo de inatividade antes de uma conexão ser fechada
  connectionTimeoutMillis: 6000, // Tempo máximo para tentar conectar antes de falhar
});

pool.on('error', (err, client) => {
  console.error('Erro inesperado no cliente do pool', err);
  process.exit(-1);
});
export const client = new Client({
  connectionString,
});
