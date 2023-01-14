import { buildSchemaSync } from "type-graphql";
import {
  CreateOnePostResolver,
  CreateOneUserResolver,
  FindManyUserResolver,
  FindUniqueUserResolver,
  UserRelationsResolver,
} from "../generated/typegraphql-prisma";

export const schema = buildSchemaSync({
  resolvers: [
    FindManyUserResolver,
    FindUniqueUserResolver,
    UserRelationsResolver,
    CreateOneUserResolver,
    CreateOnePostResolver,
  ],
  validate: false,
});
