import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { UsersDTO } from 'src/users/dto/users.dto';
import { Users } from 'src/users/interfaces/users.interface';

@Injectable()
export class AuthService {
  constructor(@InjectModel('Users') private usersModel: Model<Users>) {}

  async signUp(usersDTO: UsersDTO): Promise<void> {
    const { name, email, password, type, health_info } = usersDTO;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new this.usersModel({ name, email, password: hashedPassword, type, health_info });

    try {
      await user.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
  }
}
