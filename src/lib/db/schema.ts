import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const toDo = sqliteTable('toDo', {
  id: integer('id').primaryKey(),
  title: text('title', { length: 255 }).notNull(),
});
