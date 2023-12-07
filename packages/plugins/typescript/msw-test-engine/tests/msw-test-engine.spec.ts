import { parse } from 'graphql';
import { plugin } from '../src';

describe('msw-test-engine', () => {
  const queryName = 'User';
  const mutationName = 'UpdateUser';
  const documents = [
    { document: parse(`query ${queryName} { name }`) },
    { document: parse(`mutation ${mutationName} { name }`) },
  ];

  it('Should generate engine', async () => {
    const result = await plugin(null, documents, {});

    expect(result.prepend).toMatchSnapshot('imports');
    expect(result.content).toMatchSnapshot('content');
  });
});
