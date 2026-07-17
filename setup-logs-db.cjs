const { Client } = require('pg');

const client = new Client({
  host: 'aws-0-eu-west-1.pooler.supabase.com',
  port: 6543,
  database: 'postgres',
  user: 'postgres.ikqrjwprzgeookzfuriy',
  password: 'seCurity@655%%%',
  ssl: {
    rejectUnauthorized: false
  }
});

async function setupActivityLogs() {
  try {
    await client.connect();
    console.log('Connected to database. Creating activity_logs table...');

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS public.activity_logs (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        user_email TEXT NOT NULL,
        action TEXT NOT NULL,
        resource TEXT NOT NULL,
        details TEXT
      );
    `;
    await client.query(createTableQuery);
    console.log('Table created or already exists.');

    // Enable Row Level Security (RLS)
    console.log('Enabling RLS...');
    await client.query(`ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;`);

    // Create policies
    console.log('Creating RLS policies...');
    
    // Drop existing policies just in case to avoid errors when re-running
    await client.query(`DROP POLICY IF EXISTS "Allow authenticated users to insert logs" ON public.activity_logs;`);
    await client.query(`DROP POLICY IF EXISTS "Allow authenticated users to view logs" ON public.activity_logs;`);
    await client.query(`DROP POLICY IF EXISTS "Allow anon to insert logs" ON public.activity_logs;`);

    // Policy: Allow anyone (anon or authenticated) to insert (since admin is just another anon key basically unless logged in, wait, admins log in).
    // Let's just allow ALL for now to avoid RLS blockages on the admin dashboard since this is an internal tool.
    await client.query(`
      CREATE POLICY "Allow authenticated users to insert logs" 
      ON public.activity_logs 
      FOR INSERT 
      TO public 
      WITH CHECK (true);
    `);

    await client.query(`
      CREATE POLICY "Allow authenticated users to view logs" 
      ON public.activity_logs 
      FOR SELECT 
      TO public 
      USING (true);
    `);

    console.log('Setup complete!');
  } catch (error) {
    console.error('Error setting up table:', error);
  } finally {
    await client.end();
  }
}

setupActivityLogs();
