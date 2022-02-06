import { Module } from '@nestjs/common';
import { UsersService } from '@src/users/users.service';
import { UsersResolver } from '@src/users/users.resolver';
import { PrismaService } from '@src/prisma/prisma.service';

@Module({
  providers: [UsersResolver, UsersService, PrismaService],
})
export class UsersModule {}
