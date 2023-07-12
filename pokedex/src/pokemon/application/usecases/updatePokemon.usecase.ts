import Pokemon from "src/pokemon/domain/models/pokemon.model";
import { PokemonRepository } from "src/pokemon/domain/ports/pokemon.repository";
export default class UpdatePokemonUseCase {
    constructor(
       private readonly pokemonRepository: PokemonRepository
    ) { }

    public handler(term: string, pokemon: Pokemon): Promise<Pokemon | null> {
        return this.pokemonRepository.update(term, pokemon);
    }
}