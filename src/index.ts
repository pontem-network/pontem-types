import { OverrideBundleDefinition } from '@polkadot/types/types';

export const pontemDefinitions: OverrideBundleDefinition = {
  types: [
    {
      minmax: [0, undefined],
      types: {
        AccountInfo: 'AccountInfoWithDualRefCount',
        AuthorId: '[u8;32]',
        Balance: 'u64',
        RegistrationInfo: {
          account: 'AccountId',
          deposit: 'Balance',
        },
        RoundIndex: 'u32',
        MoveModuleId: {
          address: 'AccountId',
          name: 'Text',
        },
        MoveStructTag: {
          address: 'AccountId',
          module: 'Text',
          name: 'Text',
        },
        MoveTypeTag: {
          _enum: [
            'Bool',
            'U8',
            'U64',
            'U128',
            'Address',
            'Signer',
            'Vector',
            'Struct',
          ],
          Bool: '',
          U8: '',
          U64: '',
          U128: '',
          Address: '',
          Signer: '',
          Vector: 'MoveTypeTag',
          Struct: 'MoveStructTag',
        },
      },
    },
  ],
};
