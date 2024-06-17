import { pgTable, varchar, uuid, pgSchema } from 'drizzle-orm/pg-core'

// Supabase auth schema is auth.users
export const authSchema = pgSchema('auth')
export const users = authSchema.table('users', {
    id: uuid('id').primaryKey(),
})

export const profiles = pgTable('profiles', {
    id: uuid('id')
        .primaryKey()
        .references(() => users.id, { onDelete: 'cascade' }), // foreign key to auth.users
    firstName: varchar('first_name', { length: 256 }).notNull().default(''),
    lastName: varchar('last_name', { length: 256 }).notNull().default(''),
    email: varchar('email', { length: 256 }).notNull().unique(),
    avatarUrl: varchar('avatar_url', { length: 256 }).notNull().default(''),
})

export type Profile = typeof profiles.$inferSelect
export type NewProfile = typeof profiles.$inferInsert

