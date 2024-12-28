import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { actions } from "astro:actions";

export const PokemonForm = () => {
  const [name, setName] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await actions.addPokemon({ name });

    setName("");

    window.location.href = "/pokemon";
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" onChange={onNameChange} />

      <button type="submit">Add</button>
    </form>
  );
};
