import { INIT_CODE_HASH } from '../src/constants'

import { bytecode } from 'into-the-fathom-swap-smart-contracts/artifacts/contracts/core/UniswapV2Pair.sol/UniswapV2Pair.json'
import { keccak256 } from '@into-the-fathom/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    })
  })
})
