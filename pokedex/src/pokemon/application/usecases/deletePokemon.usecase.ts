import { Inject } from "@nestjs/common";
import { PokemonRepository } from "src/pokemon/domain/ports/pokemon.repository";

export default class DeletePokemonUseCase { 
    constructor(
        @Inject('PokemonRepository') private pokemonRepository : PokemonRepository
    ){}

    public handler(term: string){
      return this.pokemonRepository.remove(term);
    }
}