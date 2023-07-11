import { Module } from '@nestjs/common';
import { ServeStaticModule, } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { ShareModule } from './shared/share.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedModule } from './seed/seed.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    MongooseModule.forRoot('mongodb+srv://samuel005005:YAjRkJFW0MZocHJ8@cluster0.dsh77xk.mongodb.net/?retryWrites=true&w=majority'),
    PokemonModule,
    ShareModule,
    SeedModule
  ],
})
export class AppModule { }
