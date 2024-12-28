import { defineDb, defineTable, column } from "astro:db";

const Pokemon = defineTable({
  columns: {
    name: column.text({ unique: true }),
  },
});

export default defineDb({
  tables: { Pokemon },
});
