import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerDTO } from './DTOS/create-player.dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async create(@Body() createPlayerDTO: CreatePlayerDTO) {
    const createdPlayer = await this.playersService.create(createPlayerDTO);
    return createdPlayer;
  }

  @Get()
  async getAll() {
    const players = await this.playersService.getAll();
    return players;
  }
}
