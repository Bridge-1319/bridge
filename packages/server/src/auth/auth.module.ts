import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from '../users/users.module';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy/local.strategy';
import { DatabaseModule } from 'src/database/database.module';
import { EmailsModule } from 'src/emails/emails.module';


@Module({
  imports: [
    UsersModule,
    PassportModule,
    DatabaseModule,
    EmailsModule // import NestJS' passport module
  ],
  providers: [
    AuthService,
    LocalStrategy, // add our local strategy to our list of providers
  ],
  controllers: [AuthController],
})
export class AuthModule {}