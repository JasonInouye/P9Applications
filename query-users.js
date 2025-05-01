const cds = require('@sap/cds')

async function main() {
  try {
    const db = await cds.connect.to('db')  // bind to primary database (e.g. sqlite)
    const users = await SELECT.from('Planet9Applications.Users')
    const carriers = await SELECT.from('Planet9Applications.Carriers')

    console.log('✅ Users:')
    console.table(users)

    console.log('\n✅ Carriers:')
    console.table(carriers)
  } catch (err) {
    console.error('❌ Query failed:', err)
  }
}

main()
