import {
  Controller,
  Get,
  UseGuards,
  Request,
  Patch,
  Body,
  ValidationPipe
} from "@nestjs/common";

import { JwtAuthGuard } from "src/common/guards/jwt-auth.guard";
import { PatchUsersDTO } from "../dto/patch_users.dto";
import { UsersService } from "../users.service";

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService
  ) {}

  /**
   * GET /users/user - get user's data
   * @param req - user's payload extracted from Bearer token, which contains user's id(sub)
   * @returns JSON with user's data
   */
  @UseGuards(JwtAuthGuard)
  @Get('user')
  async getUser(@Request() req) {
    return await this.usersService.getUser(req.user['user']['sub']);
  }

  /**
   * PATCH /users/user - patch user's information such as name and health_info
   * @param req - user's payload, which contains user's id (sub)
   * @param newUserData - user's new data to be patched 
   * @returns JSON containing patched user's data
   */
  @UseGuards(JwtAuthGuard)
  @Patch('user')
  patchUser(@Request() req, @Body(ValidationPipe) newUserData: PatchUsersDTO) {
    return this.usersService.patch(req.user['user']['sub'], newUserData);
  }
}
