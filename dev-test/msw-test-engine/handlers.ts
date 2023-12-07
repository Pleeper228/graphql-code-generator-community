import { graphql } from 'msw';

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUserQuery((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ user })
 *   )
 * })
 */
export const mockUserQuery = (
  resolver: Parameters<typeof graphql.query<UserQuery, UserQueryVariables>>[1],
) => graphql.query<UserQuery, UserQueryVariables>('User', resolver);

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateUserMutation((req, res, ctx) => {
 *   const { updateUserInput } = req.variables;
 *   return res(
 *     ctx.data({ updateUser })
 *   )
 * })
 */
export const mockUpdateUserMutation = (
  resolver: Parameters<typeof graphql.mutation<UpdateUserMutation, UpdateUserMutationVariables>>[1],
) => graphql.mutation<UpdateUserMutation, UpdateUserMutationVariables>('UpdateUser', resolver);
