import { Injectable } from '@nestjs/common';
import { CreateUserInput } from '@src/users/dto/create-user.input';
import { UpdateUserInput } from '@src/users/dto/update-user.input';
import { User } from '@src/users/entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Kotaro',
    },
    {
      id: 2,
      name: 'Ayaka',
    },
  ];
  create(createUserInput: CreateUserInput) {
    const newUser: User = {
      id: this.users.length + 1,
      name: createUserInput.name,
    };

    this.users = [...this.users, newUser];

    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((n) => n.id === id);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    const targetUser = this.findOne(id);

    targetUser.name = updateUserInput.name;

    return targetUser;
  }

  remove(id: number) {
    const targetUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);

    return targetUser;
  }
}
