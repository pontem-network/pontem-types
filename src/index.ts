import { OverrideBundleDefinition } from '@polkadot/types/types';

export const pontemDefinitions: OverrideBundleDefinition = {
  types: [
    {
      minmax: [0, undefined],
      types: {
        AccountInfo: 'AccountInfoWithDualRefCount',
        Balance: 'u64',
        RoundIndex: 'u32',
        AuthorId: '[u8;32]',
        RegistrationInfo: {
          account: 'AccountId',
          deposit: 'Balance',
        },
        MoveModuleId: {
          address: 'AccountId',
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
        MoveStructTag: {
          address: 'AccountId',
          module: 'Text',
          name: 'Text',
        },
      },
    },
  ],
};
