import { setupEngine } from './engine';

const engine = setupEngine({} as any);
engine
  .when('User')
  .matches({
    variables: {
      id: '1',
    },
  })
  .response({
    data: {
      user: {
        id: '1',
        username: 'user 1',
      },
    },
  });

engine
  .when('UpdateUser')
  .matches(req => {
    return req.variables.updateUserInput.id === '1';
  })
  .response(req => {
    return {
      data: {
        updateUser: {
          ...req.variables.updateUserInput,
        },
      },
    };
  });
