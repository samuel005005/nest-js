
import CreatePokemonsUseCase from "./createPokemon.usecase";
import DeletePokemonUseCase from "./deletePokemon.usecase";
import GetAllPokemonsUseCase from "./getAllPokemons.usecase";
import GetPokemonUseCase from "./getPokemon.usecase";
import UpdatePokemonUseCase from "./updatePokemon.usecase";


export const POKEMON_USECASES = [
    CreatePokemonsUseCase,
    GetAllPokemonsUseCase,
    GetPokemonUseCase,
    UpdatePokemonUseCase,
    DeletePokemonUseCase
];
