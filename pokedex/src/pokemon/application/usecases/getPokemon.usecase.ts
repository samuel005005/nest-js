import { Injectable, Inject } from '@nestjs/common';
import Pokemon from 'src/pokemon/domain/models/pokemon.model';
import { PokemonRepository } from 'src/pokemon/domain/ports/pokemon.repository';


@Injectable()
export default class GetPokemonUseCase {
  constructor(
    @Inject('PokemonRepository') private pokemonRepository: PokemonRepository,
  ) {}

  public handler(term: string): Promise<Pokemon|null> {
    return this.pokemonRepository.findOne(term);
  }
}
