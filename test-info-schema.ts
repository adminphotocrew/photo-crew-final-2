import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.SUPABASE_URL || '';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(url, serviceKey);

async function run() {
  const { data, error } = await supabase.from('information_schema.columns').select('column_name').eq('table_name', 'leads');
  console.log("information_schema columns:", { data, error });
}
run();
