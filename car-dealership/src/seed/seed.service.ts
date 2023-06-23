import { Injectable } from '@nestjs/common';


@Injectable()
export class SeedService {

  poludateDB() {
    return `Seed Executed`;
  }

}
