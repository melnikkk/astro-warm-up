import { defineAction } from "astro:actions";
import { z } from "astro:content";
import { db, Pokemon } from "astro:db";

export const server = {
  addPokemon: defineAction({
    accept: "json",
    input: z.object({
      name: z.string(),
    }),
    handler: async ({ name }) => {
      try {
        await db.insert(Pokemon).values({ name });
      } catch (e) {
        console.log(e);
      }
    },
  }),
};
