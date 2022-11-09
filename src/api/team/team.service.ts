import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TEAM_REPONE } from './team.constant';
import { TeamRepository } from './team.repository';
import DataSource from '../../configs/typeorm.config';
import { TeamEntity } from './team.entity';

@Injectable()
export class TeamService {
  constructor(private readonly teamRepository: TeamRepository) {}

  async createTeam(data: CreateTeamDto) {
    try {
      const team = await this.teamRepository.save(data);
      return team;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  getList() {
    return this.teamRepository.findAllByConditions(
      {},
      {
        sortBy: 'name',
      },
    );
  }

  async updateTeam(id: string, data: UpdateTeamDto) {
    try {
      const updateData = await this.teamRepository.update(id, data);
      if (updateData.affected === 1) {
        return {
          success: true,
        };
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteTeam(id: string) {
    const team = await this.teamRepository.findOneByCondition({
      where: {
        id: id,
      },
      relations: {
        user: true,
      },
    });

    if (!team) {
      throw new BadRequestException(TEAM_REPONE.TEAM_NOT_FOUND);
    }
    if (team.user.length > 0) {
      throw new BadRequestException(TEAM_REPONE.TEAM_HAVE_USER);
    }
    const res = await DataSource.getRepository(TeamEntity)
      .createQueryBuilder('team')
      .softDelete()
      .where('team.id = :id', { id: id })
      .execute();
    if (res.affected) {
      return {
        success: true,
      };
    }
    throw new BadRequestException(TEAM_REPONE.BAD_REQUEST);
  }
}
