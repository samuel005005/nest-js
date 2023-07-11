import { Inject, Injectable } from "@nestjs/common";
import Pokemon from "src/pokemon/domain/models/pokemon.model";
import { PokemonRepository } from "src/pokemon/domain/ports/pokemon.repository";

@Injectable()
export default class UpdatePokemonUseCase {
    constructor(
        @Inject('PokemonRepository') private pokemonRepository: PokemonRepository
    ) { }

    public handler(term: string, pokemon: Pokemon): Promise<Pokemon | null> {
        return this.pokemonRepository.update(term, pokemon);
    }
}