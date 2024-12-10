import { serial, text, pgTable, pgSchema } from "drizzle-orm/pg-core";

export const posts = pgTable('posts', {
    id: serial ('id').primaryKey(),
    title: text('title').notNull(),
})