import { Injectable } from '@nestjs/common';
import { Users } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor() {}

  /**
   * Extracts relevant user's data from MongoDB Document
   * @param user - user's object
   * @returns relevant user's data.
   */
  extractUserData(user: Users) {
    return {
      id: user['_id'],
      email: user['email'],
      name: user['name'],
      type: user['type'],
      health_info: user['health_info']
    };
  }
}
