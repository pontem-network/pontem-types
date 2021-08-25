import { OverrideVersionedType } from '@polkadot/types/types/registry';
import { pontemDefinitions } from './index';

const fields: string[] = [
  'AccountInfo',
  'AuthorId',
  'Balance',
  'RegistrationInfo',
  'RoundIndex',
  'MoveModuleId',
  'MoveStructTag',
  'MoveTypeTag',
];

describe('Pontem Definitions', () => {
  test('Pontem Snapshot', () => {
    expect(pontemDefinitions).toMatchSnapshot();
  });

  test('Pontem Types', () => {
    expect(pontemDefinitions).toBeInstanceOf(Object);
    expect(pontemDefinitions).toHaveProperty('types');

    const types: OverrideVersionedType[] =
      pontemDefinitions.types as OverrideVersionedType[];

    expect(types).toBeInstanceOf(Array);
    expect(types.length).toBeGreaterThan(0);

    const type: OverrideVersionedType = types[0];
    expect(type).toHaveProperty('minmax');
    expect(type.minmax).toBeInstanceOf(Array);
    expect(type.minmax.length).toBe(2);

    expect(type).toHaveProperty('types');
    expect(type.types).toBeInstanceOf(Object);

    for (const field of fields) {
      expect(type.types).toHaveProperty(field);
      expect(type.types[field]).toBeTruthy();
    }
  });
});
