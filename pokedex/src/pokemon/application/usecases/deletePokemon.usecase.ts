
import { PokemonRepository } from "src/pokemon/domain/ports/pokemon.repository";

export default class DeletePokemonUseCase {
  constructor(
    private readonly pokemonRepository: PokemonRepository
  ) { }

  public handler(term: string) {
    return this.pokemonRepository.remove(term);
  }
}