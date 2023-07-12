import Pokemon from 'src/pokemon/domain/models/pokemon.model';
import { PokemonRepository } from 'src/pokemon/domain/ports/pokemon.repository';


export default class CreatePokemonUseCase {
  constructor(
   private readonly pokemonRepository: PokemonRepository,
  ) {}

  public handler(pokemon: Pokemon): Promise<Pokemon> {
    return this.pokemonRepository.create(pokemon);
  }
}
