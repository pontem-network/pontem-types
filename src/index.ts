import { OverrideBundleDefinition } from '@polkadot/types/types';

export const pontemDefinitions: OverrideBundleDefinition = {
  rpc: {
    mvm: {
      estimateGasExecute: {
        aliasSection: 'mvm',
        description: 'estimate gas for script execution',
        params: [
          {
            name: 'account',
            type: 'AccountId',
          },
          {
            name: 'tx_bc',
            type: 'Bytes',
          },
          {
            name: 'gas_limit',
            type: 'u64',
          },
        ],
        type: 'Estimation',
      },
      estimateGasPublish: {
        aliasSection: 'mvm',
        description: 'estimate gas for module publishing',
        params: [
          {
            name: 'account',
            type: 'AccountId',
          },
          {
            name: 'module_bc',
            type: 'Bytes',
          },
          {
            name: 'gas_limit',
            type: 'u64',
          },
        ],
        type: 'Estimation',
      },
      gasToWeight: {
        aliasSection: 'mvm',
        description: 'convert gas to weight',
        params: [
          {
            name: 'gas',
            type: 'u64',
          },
        ],
        type: 'Weight',
      },
      weightToGas: {
        aliasSection: 'mvm',
        description: 'convert gas to weight',
        params: [
          {
            name: 'weight',
            type: 'Weight',
          },
        ],
        type: 'u64',
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
          owner: 'AccountId',
          amount: 'Balance',
        },
        Collator2: {
          id: 'AccountId',
          bond: 'Balance',
          nominators: 'Vec<AccountId>',
          top_nominators: 'Vec<Bond>',
          bottom_nominators: 'Vec<Bond>',
          total_counted: 'Balance',
          total_backing: 'Balance',
          state: 'CollatorStatus',
        },
        Candidate: {
          bond: 'Balance',
          fee: 'Perbill',
          id: 'AccountId',
          nominators: 'Vec<Bond>',
          state: 'ValidatorStatus',
          total: 'Balance',
        },
        CollatorSnapshot: {
          bond: 'Balance',
          nominators: 'Vec<Bond>',
          total: 'Balance',
        },
        Estimation: {
          gas_used: 'u64',
          status_code: 'u64',
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
        CollatorStatus: {
          _enum: {
            Active: 'Null',
            Idle: 'Null',
            Leaving: 'RoundIndex',
          },
        },
        NominatorStatus: {
          _enum: {
            Active: 'Null',
            Leaving: 'RoundIndex',
          },
        },
      },
    },
  ],
};
