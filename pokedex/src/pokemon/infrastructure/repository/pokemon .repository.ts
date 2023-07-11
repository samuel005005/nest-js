import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';

import { PokemonEntity } from '../entities/pokemon.entity';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PokemonRepository } from 'src/pokemon/domain/ports/pokemon.repository';
import Pokemon from 'src/pokemon/domain/models/pokemon.model';
import PokemonMapper from '../mapper/pokemon.mapper';

@Injectable()
export class PokemonRepositoryMongo implements PokemonRepository {

    constructor(
        @InjectModel(PokemonEntity.name)
        private readonly pokemonModel: Model<PokemonEntity>
    ) { }

    async create(pokemon: Pokemon): Promise<Pokemon> {
        try {
            const pokemonModel = await this.pokemonModel.create(pokemon);
            return PokemonMapper.EntityToDomain(pokemonModel);
        } catch (error) {
            this.handleException(error, `Can't update Pokemon, Check server logs`);
        }
    }

    async getAll(): Promise<Pokemon[]> {
        const pokemons = await this.pokemonModel.find();
        return PokemonMapper.EntitiesToDomains(pokemons);
    }

    async findOne(term: string): Promise<Pokemon> {
        let pokemon = await this.findPokemonEntity(term);
        return PokemonMapper.EntityToDomain(pokemon);
    }


    async update(term: string, updatePokemon: Pokemon): Promise<Pokemon> {

        try {
            const pokemonModel = await this.findPokemonEntity(term);

            await pokemonModel.updateOne(updatePokemon, { new: true });

            return PokemonMapper.EntityToDomain(pokemonModel);

        } catch (error) {
            this.handleException(error, `Can't update Pokemon, Check server logs`);
        }

    }

    async remove(id: string): Promise<Pokemon> {

        const { deletedCount } = await this.pokemonModel.deleteOne({ _id: id });
        if (deletedCount === 0) {
            throw new BadRequestException(`Pokemon with id "${id}" not found`)
        }
        return;
    }

    private handleException(error: any, message: string) {
        
        if (error.code == 11000) {
            throw new BadRequestException(`Pokemon exists in db ${JSON.stringify(error.keyValue)}`)
        } else {
            console.log(error.response);
            if (error.respone == 404) {
                throw new NotFoundException(error.message);
            } else {
                throw new InternalServerErrorException(message)
            }
        }
    }

    private async findPokemonEntity(term: string): Promise<PokemonEntity> {

        let pokemon: PokemonEntity;
        // Validate if is a number
        if (!isNaN(+term)) {
            pokemon = await this.pokemonModel.findOne({ no: term });
        }

        // Validate if is a mongo a Id
        if (!pokemon && isValidObjectId(term)) {
            pokemon = await this.pokemonModel.findById(term);
        }
        if (!pokemon) {
            pokemon = await this.pokemonModel.findOne({ name: new RegExp(term.toLocaleLowerCase().trim(), 'i') });
        }
        if (!pokemon)
            throw new NotFoundException(`Pokemon with id,name or no "${term}" not found`);

        return pokemon;
    }

}
