import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { UsersDTO } from "src/users/dto/users.dto";
import { AuthService } from "../auth.service";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body(ValidationPipe) usersDTO: UsersDTO): Promise<void> {
    return await this.authService.signUp(usersDTO);
  }
}
