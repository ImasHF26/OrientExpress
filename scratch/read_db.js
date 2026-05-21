const { createClient } = require('@libsql/client');
const fs = require('fs');
const path = require('path');

async function dumpDb(dbPath, label) {
  console.log(`\n=== DUMPING ${label} (${dbPath}) ===`);
  const absolutePath = path.resolve(dbPath);
  if (!fs.existsSync(absolutePath)) {
    console.log(`Database file does not exist at ${absolutePath}`);
    return;
  }
  
  const client = createClient({
    url: `file:${absolutePath}`
  });
  
  try {
    // Check tables
    const tablesRes = await client.execute("SELECT name FROM sqlite_master WHERE type='table'");
    console.log("Tables found:", tablesRes.rows.map(r => r.name).join(', '));
    
    // Check Student table
    const res = await client.execute('SELECT * FROM "Student"');
    console.log(`Found ${res.rows.length} rows in Student table.`);
    if (res.rows.length > 0) {
      console.log("DATA_START");
      console.log(JSON.stringify(res.rows, null, 2));
      console.log("DATA_END");
    }
  } catch (err) {
    console.error(`Error querying ${label}:`, err.message);
  } finally {
    client.close();
  }
}

async function main() {
  try {
    await dumpDb(path.join(__dirname, '../db/orient.db'), 'orient.db');
    await dumpDb(path.join(__dirname, '../db/custom.db'), 'custom.db');
  } catch (e) {
    console.error("Main error:", e);
  }
}

main();
