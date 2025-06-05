import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../../application/users/use-cases/create-user.usecase';
import { ListUsersUseCase } from '../../../application/users/use-cases/list-users.usecase';
import { CreateUserDto } from '../../../application/users/dto/create-user.dto';
import { User } from '../../../domain/users/user.entity';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUser: CreateUserUseCase,
    private readonly listUsers: ListUsersUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.createUser.execute(dto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.listUsers.execute();
  }
}
