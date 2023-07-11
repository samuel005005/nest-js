import { Module } from '@nestjs/common';
import { PokemonService } from './infrastructure/services/pokemon.service';
import { PokemonController } from './infrastructure/controllers/pokemon.controller';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    DomainModule,
    ApplicationModule,
    InfrastructureModule,
  ]
})
export class PokemonModule { }
