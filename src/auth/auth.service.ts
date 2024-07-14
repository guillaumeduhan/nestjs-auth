import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  private supabase: SupabaseClient
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {
    this.supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(body: any) {
    console.log(body)
    const { email, password } = body;
    const { data, error } = await this.supabase
      .auth
      .signInWithPassword({
        email,
        password,
      })

    if (data) console.log(data)
    if (error) console.log(error.message)
    // const payload = { username: user.username, sub: user.userId };
    // return {
    //   access_token: this.jwtService.sign(payload),
    // };
  }

  async signUp(body: any) {
    console.log(body)
    const { email, password } = body;
    const { data, error }: any = await this.supabase
      .auth
      .signUp({
        email,
        password,
      })

    if (data) {
      console.log(data)
    }
    if (error) console.log(error.message)
    // const payload = { username: user.username, sub: user.userId };
    // return {
    //   access_token: this.jwtService.sign(payload),
    // };
  }
}