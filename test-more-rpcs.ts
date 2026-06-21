import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.SUPABASE_URL || '';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(url, serviceKey);

async function run() {
  const commonNames = ['exec', 'execute', 'sql', 'query', 'run', 'execute_sql', 'eval_sql', 'sql_exec'];
  const dummySql = 'SELECT 1;';
  for (const name of commonNames) {
    const { data, error } = await supabase.rpc(name, { query: dummySql, sql: dummySql, sql_query: dummySql });
    console.log(`RPC "${name}":`, error ? error.message : "Succeeded!");
  }
}
run();
