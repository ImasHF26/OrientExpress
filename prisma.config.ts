import path from 'node:path'
import { defineConfig } from 'prisma/config'
import { PrismaLibSql } from '@prisma/adapter-libsql'

const dbPath = path.join(process.cwd(), 'db', 'orient.db')

export default defineConfig({
  datasource: {
    url: `file:${dbPath}`,
  },
  // @ts-ignore
  adapter: () => {
    return new PrismaLibSql({ url: `file:${dbPath}` })
  },
})
