import { Injectable, Inject } from '@nestjs/common';
import Pokemon from 'src/pokemon/domain/models/pokemon.model';
import { PokemonRepository } from 'src/pokemon/domain/ports/pokemon.repository';


@Injectable()
export default class CreatePokemonUseCase {
  constructor(
    @Inject('PokemonRepository') private pokemonRepository: PokemonRepository,
  ) {}

  public handler(pokemon: Pokemon): Promise<Pokemon> {
    return this.pokemonRepository.create(pokemon);
  }
}
