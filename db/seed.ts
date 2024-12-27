import { db, Pokemon } from "astro:db";

export default async function seed() {
  await db.insert(Pokemon).values([{ name: "bulbasaur" }]);
}
