import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.SUPABASE_URL || '';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(url, serviceKey);

async function run() {
  const sql = `ALTER TABLE leads ADD COLUMN IF NOT EXISTS pending_amount NUMERIC DEFAULT 0;`;
  console.log("Trying run_sql...");
  const { data: d1, error: e1 } = await supabase.rpc('run_sql', { sql });
  console.log("run_sql response:", { data: d1, error: e1 });

  console.log("Trying exec_sql...");
  const { data: d2, error: e2 } = await supabase.rpc('exec_sql', { sql });
  console.log("exec_sql response:", { data: d2, error: e2 });
}
run();
