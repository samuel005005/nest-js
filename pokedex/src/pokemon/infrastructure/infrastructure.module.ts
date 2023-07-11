import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationModule } from '../application/application.module';
import { PokemonController } from './controllers/pokemon.controller';
import { PokemonEntity, PokemonSchema } from './entities/pokemon.entity';
import { PokemonService } from './services/pokemon.service';

@Module({
  providers: [PokemonService],
  imports: [
    ApplicationModule,
    MongooseModule.forFeature([{
      name: PokemonEntity.name,
      schema: PokemonSchema
    }]),
  ],
  controllers: [PokemonController],
})
export class InfrastructureModule { }
