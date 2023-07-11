import { CreatePokemonDto } from "../dto/create-pokemon.dto";
import { UpdatePokemonDto } from "../dto/update-pokemon.dto";
import { PokemonEntity } from "../entities/pokemon.entity";
import Pokemon from 'src/pokemon/domain/models/pokemon.model';

export default class PokemonMapper {

  public static EntityToDomain(pokemonEntity: PokemonEntity) {

    const pokemon = new Pokemon(
        pokemonEntity.id,
        pokemonEntity.name,
        pokemonEntity.no
    );

    return pokemon;
  }
      
  public static DtoToEntity(pokemonDto: CreatePokemonDto | UpdatePokemonDto) {

    const pokemon = new Pokemon(
        '0',
        pokemonDto.name,
        pokemonDto.no
      );

    return pokemon;
  }

  public static EntitiesToDomains(pokemonEntity: PokemonEntity[]): Pokemon[] {
    const pokemons = new Array<Pokemon>();
    pokemonEntity.forEach((productEntity) => {
      const product = this.EntityToDomain(productEntity);
      pokemons.push(product);
    });
    return pokemons;
  }
}
