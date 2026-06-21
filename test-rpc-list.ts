import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.SUPABASE_URL || '';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(url, serviceKey);

async function run() {
  const { data, error } = await supabase.rpc('get_check_constraints');
  console.log("get_check_constraints:", { data, error });

  // Let's query pg_proc via a RPC or some schema-level query if possible?
  // Since we can't run raw SQL directly, let's see if there is any other rpc we can search.
}
run();
