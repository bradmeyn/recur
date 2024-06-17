import { loadEnvConfig } from '@next/env'
import { eq } from 'drizzle-orm'
loadEnvConfig(process.cwd())
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { authSchema, profiles } from './schema/profile'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
    throw new Error('DATABASE_URL is not set')
}
export const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client, { schema: { ...authSchema, profiles } })

