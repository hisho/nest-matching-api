import { CreateUserInput } from '@src/users/dto/create-user.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;
}
