import { defineDb, defineTable, column, NOW } from 'astro:db';

const Todo = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    task: column.text(),
    completed: column.boolean({ default: false }),
    published: column.date({ default: NOW }),
  },
});

export default defineDb({
  tables: { Todo },
})