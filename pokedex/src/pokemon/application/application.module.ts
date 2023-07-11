import { Module } from "@nestjs/common";
import { DomainModule } from "../domain/domain.module";
import { MongooseModule } from "@nestjs/mongoose";
import { PokemonEntity, PokemonSchema } from "../infrastructure/entities/pokemon.entity";
import { POKEMON_USECASES } from "./usecases";
import { PokemonRepositoryMongo } from "../infrastructure/repository/pokemon .repository";

@Module({
    imports: [
        DomainModule,
        MongooseModule.forFeature([
            {
                name: PokemonEntity.name,
                schema: PokemonSchema
            },
        ]),
    ],
    providers: [
        ...POKEMON_USECASES,
        { provide: 'PokemonRepository', useClass: PokemonRepositoryMongo },
    ],
    exports: [...POKEMON_USECASES],
})
export class ApplicationModule { }