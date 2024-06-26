import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { KillDragonHandler } from './commands/kill-dragron.handler';
import { HeroRepository } from './repository/hero.reposition';
import { HeroKilledDragonHandler } from './events/hero-killed-dragon.handler';
import { GetHeroesHandler } from './quries/get-heroes.handler';

@Module({
  imports: [CqrsModule],
  controllers: [HeroesController],
  providers: [
    HeroesService,
    KillDragonHandler,
    HeroRepository,
    HeroKilledDragonHandler,
    GetHeroesHandler
  ],
})
export class HeroesModule { }
