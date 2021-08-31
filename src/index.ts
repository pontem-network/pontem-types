import { OverrideBundleDefinition } from '@polkadot/types/types';

export const pontemDefinitions: OverrideBundleDefinition = {
  rpc: {
    mvm: {
      gasToWeight: {
        aliasSection: 'mvm',
        description: 'convert gas to weight',
        params: [
          {
            name: 'gas',
            type: 'u64',
          },
        ],
        type: 'Result<Weight>',
      },
    },
  },
  types: [
    {
      minmax: [0, undefined],
      types: {
        AuthorId: '[u8;32]',
        Balance: 'u64',
        Bond: {
          amount: 'Balance',
          owner: 'AccountId',
        },
        Candidate: {
          bond: 'Balance',
          fee: 'Perbill',
          id: 'AccountId',
          nominators: 'Vec<Bond>',
          state: 'ValidatorStatus',
          total: 'Balance',
        },
        Collator2: {
          bond: 'Balance',
          bottom_nominators: 'Vec<Bond>',
          id: 'AccountId',
          nominators: 'Vec<AccountId>',
          state: 'CollatorStatus',
          top_nominators: 'Vec<Bond>',
          total_backing: 'Balance',
          total_counted: 'Balance',
        },
        CollatorSnapshot: {
          bond: 'Balance',
          nominators: 'Vec<Bond>',
          total: 'Balance',
        },
        ExitQ: {
          candidate_schedule: 'Vec<(AccountId, RoundIndex)>',
          candidates: 'Vec<AccountId>',
          nominator_schedule: 'Vec<(AccountId, Option<AccountId>, RoundIndex)>',
          nominators_leaving: 'Vec<AccountId>',
        },
        InflationInfo: {
          annual: 'RangePerbill',
          expect: 'RangeBalance',
          round: 'RangePerbill',
        },
        MoveStructTag: {
          address: 'AccountId',
          module: 'Text',
          name: 'Text',
        },
        MoveTypeTag: {
          Address: '',
          Bool: '',
          Signer: '',
          Struct: 'MoveStructTag',
          U128: '',
          U64: '',
          U8: '',
          Vector: 'MoveTypeTag',
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
        },
        Nominator: {
          nominations: 'Vec<Bond>',
          total: 'Balance',
        },
        Nominator2: {
          nominations: 'Vec<Bond>',
          revocations: 'Vec<AccountId>',
          scheduled_revocations_count: 'u32',
          scheduled_revocations_total: 'Balance',
          status: 'NominatorStatus',
          total: 'Balance',
        },
        NominatorAdded: {
          _enum: {
            AddedToBottom: 'Null',
            AddedToTop: 'Balance',
          },
        },
        OrderedSet: 'Vec<Bond>',
        ParachainBondConfig: {
          account: 'AccountId',
          percent: 'Percent',
        },
        Range: 'RangeBalance',
        RangeBalance: {
          ideal: 'Balance',
          max: 'Balance',
          min: 'Balance',
        },
        RangePerbill: {
          ideal: 'Perbill',
          max: 'Perbill',
          min: 'Perbill',
        },
        RegistrationInfo: {
          account: 'AccountId',
          deposit: 'Balance',
        },
        RoundIndex: 'u32',
        RoundInfo: {
          current: 'RoundIndex',
          first: 'BlockNumber',
          length: 'u32',
        },
        ValidatorStatus: {
          _enum: {
            Active: 'Null',
            Idle: 'Null',
            Leaving: 'RoundIndex',
          },
        },
      },
    },
  ],
};
