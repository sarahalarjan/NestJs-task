import { Body, Controller, Post, ValidationPipe,Request ,UseGuards,Get,Res,HttpStatus} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import {JwtAuthGuard} from './jwt-auth.guard'
import { CreateUserDTO } from '../user/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) createUserDTO: CreateUserDTO
  ): Promise<void> {
    return await this.authService.signUp(createUserDTO);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Request() req) {
    return this.authService.signIn(req.user);
  }
  
}