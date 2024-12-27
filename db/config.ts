import { defineDb, defineTable, column } from "astro:db";

const Pokemon = defineTable({
  columns: {
    name: column.text(),
  },
});

export default defineDb({
  tables: { Pokemon },
});
