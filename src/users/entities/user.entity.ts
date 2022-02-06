import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;
}
