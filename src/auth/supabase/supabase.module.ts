import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { Supabase } from '@/auth/supabase';
import { SupabaseGuard } from '@/auth/supabase/supabase.guard';
import { SupabaseStrategy } from '@/auth/supabase/supabase.strategy';

@Module({
  imports: [ConfigModule],
  providers: [Supabase, SupabaseStrategy, SupabaseGuard],
  exports: [Supabase, SupabaseStrategy, SupabaseGuard],
})
export class SupabaseModule { }