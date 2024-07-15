
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { SupabaseGuard } from '@/auth/supabase/supabase.guard';
import { SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Controller()
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('auth/signup')
  async signup(@Request() req) {
    return this.authService.signUp(req.body);
  }

  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @UseGuards(SupabaseGuard)
  @Get('auth/me')
  getProfile(@Request() req) {
    return req.user;
  }
}
