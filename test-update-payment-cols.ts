import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.SUPABASE_URL || '';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = createClient(url, serviceKey);

async function run() {
  const { data: leads } = await supabase.from('leads').select('lead_id').limit(1);
  if (!leads || leads.length === 0) {
    console.log("No leads found.");
    return;
  }
  const leadId = leads[0].lead_id;
  console.log("Testing update on lead ID:", leadId);
  const { data, error } = await supabase
    .from('leads')
    .update({
      final_amount: 50000,
      received_amount: 20000,
      pending_amount: 30000
    })
    .eq('lead_id', leadId)
    .select();

  if (error) {
    console.error("Error updating payment columns:", error.message);
  } else {
    console.log("Success! Columns exist and were updated.", data);
  }
}
run();
