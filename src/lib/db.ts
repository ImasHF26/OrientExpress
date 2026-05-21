import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import path from 'node:path'
import fs from 'node:fs'

// Prisma v7 with SQLite via libsql adapter
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient() {
  const databaseUrl = process.env.DATABASE_URL || 'file:./db/orient.db'

  // If it's a local file database, ensure the parent directory exists
  if (databaseUrl.startsWith('file:')) {
    const relativePath = databaseUrl.replace('file:', '')
    const absolutePath = path.isAbsolute(relativePath)
      ? relativePath
      : path.join(/*turbopackIgnore: true*/ process.cwd(), relativePath)
    const dir = path.dirname(absolutePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
  }

  const adapter = new PrismaLibSql({
    url: databaseUrl,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  })
  return new PrismaClient({ adapter })
}

export const db = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db