import { loadEnvConfig } from '@next/env'
import { defineConfig } from 'drizzle-kit'
loadEnvConfig(process.cwd())
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set')
}

export default defineConfig({
    schema: './src/database/schema/*',
    schemaFilter: ['public'],
    out: './src/database/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
})

