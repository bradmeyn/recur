import { pgTable, varchar, uuid, pgSchema } from "drizzle-orm/pg-core";

// Supabase auth schema is auth.users
export const authSchema = pgSchema("auth");
export const users = authSchema.table("users", {
  id: uuid("id").primaryKey(),
});

export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 256 }).notNull(),
  amount: varchar("amount", { length: 256 }).notNull(),
  frequency: varchar("frequency", { length: 256 }).notNull(),
  startDate: varchar("start_date", { length: 256 }).notNull(),
  nextPaymentDate: varchar("next_payment_date", { length: 256 }).notNull(),
});

export type Subscription = typeof subscriptions.$inferSelect;
export type NewSubscription = typeof subscriptions.$inferInsert;
