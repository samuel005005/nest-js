import Pokemon from "../models/pokemon.model";


export interface PokemonRepository {

    create(product: Pokemon): Promise<Pokemon>;
    getAll(): Promise<Pokemon[]>;
    findOne(term: string): Promise<Pokemon | null>;
    update(term: string, pokemon: Pokemon): Promise<Pokemon>;
    remove(id: string): Promise<Pokemon | null>;
}

