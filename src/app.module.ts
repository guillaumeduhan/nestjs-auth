import { OrganizationsModule } from '@/routes';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { SupabaseModule } from './auth/supabase/supabase.module';
import { OrganizationsController } from './routes/organizations/organizations.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
      isGlobal: true,
    }),
    AuthModule,
    SupabaseModule,
    OrganizationsModule
  ],
  controllers: [
    AppController,
    AuthController,
    OrganizationsController
  ],
  providers: [],
})
export class AppModule { }
