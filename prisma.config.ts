import path from 'node:path'
import fs from 'node:fs'
import { defineConfig } from 'prisma/config'
import { PrismaLibSql } from '@prisma/adapter-libsql'

const databaseUrl = process.env.DATABASE_URL || 'file:./db/orient.db'

// If it's a local file database, ensure the parent directory exists
if (databaseUrl.startsWith('file:')) {
  const relativePath = databaseUrl.replace('file:', '')
  const absolutePath = path.isAbsolute(relativePath)
    ? relativePath
    : path.join(process.cwd(), relativePath)
  const dir = path.dirname(absolutePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

export default defineConfig({
  datasource: {
    url: databaseUrl,
  },
  // @ts-ignore
  adapter: () => {
    return new PrismaLibSql({
      url: databaseUrl,
      authToken: process.env.DATABASE_AUTH_TOKEN,
    })
  },
})
