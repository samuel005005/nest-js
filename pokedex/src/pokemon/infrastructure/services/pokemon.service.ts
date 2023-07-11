import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { UpdatePokemonDto } from '../dto/update-pokemon.dto';
import { PokemonEntity } from '../entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import GetAllPokemonsUseCase from 'src/pokemon/application/usecases/getAllPokemons.usecase';
import GetPokemonUseCase from 'src/pokemon/application/usecases/getPokemon.usecase';
import UpdatePokemonUseCase from 'src/pokemon/application/usecases/updatePokemon.usecase';
import PokemonMapper from '../mapper/pokemon.mapper';
import DeletePokemonUseCase from 'src/pokemon/application/usecases/deletePokemon.usecase';
import CreatePokemonUseCase from 'src/pokemon/application/usecases/createPokemon.usecase';


@Injectable()
export class PokemonService {
  constructor(
    private readonly createPokemonUseCase: CreatePokemonUseCase,
    private readonly getAllPokemonsUseCase: GetAllPokemonsUseCase,
    private readonly getPokemonUseCase: GetPokemonUseCase,
    private readonly updatePokemonUseCase: UpdatePokemonUseCase,
    private readonly deletePokemonUseCase: DeletePokemonUseCase
  ) { }


  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();
    return this.createPokemonUseCase.handler(PokemonMapper.DtoToEntity(createPokemonDto));
  }

  async findAll() {
    return this.getAllPokemonsUseCase.handler();
  }

  async findOne(term: string) {
    return this.getPokemonUseCase.handler(term);
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {

    if (updatePokemonDto.name) {
      updatePokemonDto.name = updatePokemonDto.name.toLocaleLowerCase();
    }

    const pokemon = await this.updatePokemonUseCase.handler(term, PokemonMapper.DtoToEntity(updatePokemonDto));

    return { ...pokemon, ...updatePokemonDto };
  }

  async remove(id: string) {
    return this.deletePokemonUseCase.handler(id);
  }
}
