import { Inject, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-respose.interface';
import { PokemonRepository } from 'src/pokemon/domain/ports/pokemon.repository';


@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance;

  constructor(
    @Inject('PokemonRepository') private readonly pokemonRepository: PokemonRepository
  )
  {}

  async execute() {
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10');

    data.results.forEach(({ name, url }) => {

      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];

      console.log({ name, no })
    });
    return data.results;
  }
}
