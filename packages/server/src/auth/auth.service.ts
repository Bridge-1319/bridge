import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ emailAddress: email });
    if (user && await this.isPasswordMatch(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async isPasswordMatch(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  // other methods...
}