import Pokemon from 'src/pokemon/domain/models/pokemon.model';
import { PokemonRepository } from 'src/pokemon/domain/ports/pokemon.repository';


export default class GetPokemonUseCase {
  constructor(
    private readonly pokemonRepository: PokemonRepository,
  ) { }

  public handler(term: string): Promise<Pokemon | null> {
    return this.pokemonRepository.findOne(term);
  }
}
