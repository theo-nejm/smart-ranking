import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDTO } from './DTOS/create-player.dto';

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async create(@Body() createPlayerDTO: CreatePlayerDTO) {
    const { name, phoneNumber, email } = createPlayerDTO;
    return { name, email, phoneNumber };
  }
}
