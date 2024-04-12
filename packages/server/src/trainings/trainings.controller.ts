import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { Prisma } from '@prisma/client';

@Controller('trainings')
export class TrainingsController {
  constructor(private readonly trainingsService: TrainingsService) { }

  @Post()
  create(@Body() createTrainingDto: Prisma.TrainingCreateInput) {
    return this.trainingsService.createTraining(createTrainingDto);
  }

  @Get()
  findAll() {
    return this.trainingsService.findAllTrainings();
  }

  @Get('mock')
  findAllMock(){
    return this.trainingsService.findAllMock();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingsService.findTrainingById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainingDto: Prisma.TrainingUpdateInput) {
    return this.trainingsService.updateTraining(+id, updateTrainingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingsService.deleteTraining(+id);
  }
}
