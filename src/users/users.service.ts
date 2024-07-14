import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'guillaume',
      password: 'test',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    console.log(this.users)
    return this.users.find(user => user.username === username);
  }
}