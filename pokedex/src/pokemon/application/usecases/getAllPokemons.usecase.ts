import Pokemon from 'src/pokemon/domain/models/pokemon.model';
import { PokemonRepository } from 'src/pokemon/domain/ports/pokemon.repository';

export default class GetAllPokemonsUseCase {
  constructor(
    private readonly pokemonRepository: PokemonRepository,
  ) { }
  public handler(): Promise<Pokemon[]> {
    return this.pokemonRepository.getAll();
  }
}
