import dotenv from 'dotenv';
dotenv.config();

const url = process.env.SUPABASE_URL || '';
const anonKey = process.env.SUPABASE_ANON_KEY || '';

async function run() {
  const res = await fetch(`${url}/rest/v1/?apikey=${anonKey}`);
  const json = await res.json();
  console.log("Paths:", Object.keys(json.paths || {}).filter(p => p.startsWith('/rpc/')));
}
run();
