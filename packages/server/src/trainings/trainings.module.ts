import { Module } from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { TrainingsController } from './trainings.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [TrainingsController],
  providers: [TrainingsService],
  imports: [DatabaseModule]
})
export class TrainingsModule {}
