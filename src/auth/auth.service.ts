import { Injectable, NotFoundException } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  private supabase: SupabaseClient
  constructor() {
    this.supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
  }

  async login(body: any) {
    const { email, password } = body;
    if (!email || !password) return {
      status: 401,
      error: "Unauthorized",
      message: 'Invalid email or password.'
    }
    try {
      const { data, error }: any = await this.supabase
        .auth
        .signInWithPassword({
          email,
          password,
        })

      if (error) {
        return {
          status: 400,
          error: "Bad request",
          message: error.message
        }
      }

      if (data) {
        console.log(data)
        const { session } = data;
        const { access_token } = session;
        if (!access_token) return {
          status: 400,
          error: "Bad request",
          message: 'Missing access token in response.'
        }
        return {
          access_token
        }
      }
    } catch (error) {
      throw new NotFoundException('Invalid credentials', error.message);
    }
  }

  async signUp(body: any) {
    const { email, password } = body;
    if (!email || !password) return {
      status: 401,
      message: 'Please enter an email address & a password.'
    }
    try {
      const { data, error }: any = await this.supabase
        .auth
        .signUp({
          email,
          password,
        })

      if (data) {
        const { session } = data;
        const { access_token } = session;
        if (!access_token) return {
          status: 400,
          error: "Bad request",
          message: 'Missing access token in response.'
        }
        return {
          access_token
        }
      }

    } catch (error) {
      throw new NotFoundException('Sign up attempt failed', error.message);
    }
  }

  async getMe(body: any) {
    try {
      console.log("hello it works")
    } catch (error) {
      throw new NotFoundException('Me not found', error.message);
    }
  }
}