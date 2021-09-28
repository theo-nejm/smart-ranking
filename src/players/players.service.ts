import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreatePlayerDTO } from './DTOS/create-player.dto';
import { Player } from './interfaces/Player.interface';

@Injectable()
export class PlayersService {
  private readonly logger = new Logger(PlayersService.name);
  private players: Player[] = [];

  async create(createPlayerDTO: CreatePlayerDTO) {
    const { name, email, phoneNumber } = createPlayerDTO;

    const player: Player = {
      _id: uuidv4(),
      name,
      phoneNumber,
      email,
      ranking: 'A',
      avatarURL: 'https://www.google.com/foto.jpg',
      rankingPosition: 1,
    };

    this.players.push(player);
    this.logger.log(`createPlayerDTO: ${JSON.stringify(player)}`);
    return player;
  }

  async getAll() {
    return this.players;
  }
}
