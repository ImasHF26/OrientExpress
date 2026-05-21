import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import path from 'node:path'

// Prisma v7 with SQLite via libsql adapter
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient() {
  const dbPath = path.join(process.cwd(), 'db', 'orient.db')
  const adapter = new PrismaLibSql({
    url: `file:${dbPath}`,
  })
  return new PrismaClient({ adapter })
}

export const db = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db