import { Injectable } from '@nestjs/common';
import { CreateUserInput } from '@src/users/dto/create-user.input';
import { UpdateUserInput } from '@src/users/dto/update-user.input';
import { PrismaService } from '@src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({
      data: {
        name: createUserInput.name,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: { id },
      data: {
        name: updateUserInput.name,
      },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
