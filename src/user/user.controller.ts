import { Controller, Get } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';

@Controller('user')
export class UserController {
  constructor(private readonly emailService: EmailService) {}

  @Get('/signin')
  async signin() {
    await this.emailService.signin('pjt3591oo@naver.com');
    return 'signin';
  }

  @Get('/signup')
  async signup() {
    await this.emailService.signup('pjt3591oo@naver.com');
    return 'signup';
  }
}
