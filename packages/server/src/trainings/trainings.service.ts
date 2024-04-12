
import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TrainingsService {
  constructor(private prisma: DatabaseService) { }

  async findAllTrainings() {
    return this.prisma.training.findMany();
  }
  findAllMock() {
    return [
      {
        priority: 'High',
        training: 'Training 1',
        skill: 'Skill 1',
        target: 1,
        updatedBy: 'User 1',
        completionDate: '2022-01-01'
      },
      {
        priority: 'Medium',
        training: 'Training 2',
        skill: 'Skill 2',
        target: 2,
        updatedBy: 'User 2',
        completionDate: '2022-02-02'
      },
      {
        priority: 'Low',
        training: 'Training 3',
        skill: 'Skill 3',
        target: 3,
        updatedBy: 'User 3',
        // completionDate is optional, so we can omit it
      }
    ];
  }
  async findTrainingById(id: number) {
    return this.prisma.training.findUnique({ where: { id } });
  }

  async createTraining(data: any) {
    return this.prisma.training.create({ data });
  }

  async updateTraining(id: number, data: any) {
    return this.prisma.training.update({
      where: { id },
      data,
    });
  }

  async deleteTraining(id: number) {
    return this.prisma.training.delete({ where: { id } });
  }

  // Example of additional function for User operations
  async findAllUsers() {
    return this.prisma.user.findMany();
  }

  // Similarly, you can add more methods for other entities like Skills, Organizations, etc.
}
