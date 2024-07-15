import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'MY_AMAZING_SECRET', // TODO
      signOptions: { expiresIn: '86000s' },
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy
  ],
  exports: [AuthService],
})
export class AuthModule { }
