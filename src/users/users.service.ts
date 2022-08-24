import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './interfaces/users.interface';
import { PatchUsersDTO } from './dto/patch_users.dto';
@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private usersModel: Model<Users>) {}

  /**
   * Patch user's data (name and health_info)
   * @param id - id of user whose data will be patched 
   * @param userData - new user's data to be patched
   * @returns JSON containing user's patched data
   */
  async patch(id: string, userData: PatchUsersDTO) {
    const { name, health_info } = userData;
    const newUserData = { name, health_info }; // extract data to be patched

    const user = await this.usersModel
      .findByIdAndUpdate({ _id: id }, newUserData, { new: true });
    
    if (!user) {
      throw new NotFoundException();
    }

    return this.getUser(user['_id']);
  }

  /**
   * Get user's data from database
   * @param id - user's id (extracted from Bearer token)
   * @returns JSON containing user's data
   */
  async getUser(id: string) {
    const user = await this.usersModel.findById({ _id: id });

    return {
      id: user['_id'],
      email: user['email'],
      name: user['name'],
      type: user['type'],
      health_info: user['health_info']
    };
  }
}
