import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { TrainingsModule } from './trainings/trainings.module';
import { RolesModule } from './roles/roles.module';
import { SkillsModule } from './skills/skills.module';
import { EmailsModule } from './emails/emails.module';
import { LocationsModule } from './locations/locations.module';
import { AuditsModule } from './audits/audits.module';
import { EvidencesModule } from './evidences/evidences.module';
import { OrganisationsModule } from './organisations/organisations.module';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [DatabaseModule, UsersModule, TrainingsModule, RolesModule, SkillsModule, EmailsModule, LocationsModule, AuditsModule, EvidencesModule, OrganisationsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService,
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true
      })
    }
  ],
})
export class AppModule { }
