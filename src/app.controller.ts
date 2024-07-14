import { AuthService } from '@/auth/auth.service';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { SetMetadata } from '@nestjs/common';
import { SupabaseGuard } from './auth/supabase/supabase.guard';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Controller()
export class AppController {
  constructor(private authService: AuthService) { }

  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @Post('auth/signup')
  async signup(@Request() req) {
    return this.authService.signUp(req.body);
  }

  @UseGuards(SupabaseGuard)
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }
}
