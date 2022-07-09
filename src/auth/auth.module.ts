import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersSchema } from 'src/users/schemas/users.schema';
import { AuthService } from './auth.service';
import { AuthController } from './controllers/auth.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
  ],
})
export class AuthModule {}
