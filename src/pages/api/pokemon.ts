import type { APIRoute, APIContext } from "astro";
import { db, Pokemon } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async (
  _context: APIContext,
): Promise<Response> => {
  const pokemon = await db.select().from(Pokemon);

  return new Response(JSON.stringify(pokemon));
};

export const POST: APIRoute = async (
  context: APIContext,
): Promise<Response> => {
  const data = await context.request.formData();
  const name = data.get("name") as string;

  await db.insert(Pokemon).values({ name });

  return context.redirect("/pokemon");
};
