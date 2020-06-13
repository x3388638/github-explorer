import { to3DigitsThousand } from '../../src/util/numberUtil'

describe('util/numberUtil', () => {
  it('to3DigitsThousand should work with bad param', () => {
    expect(to3DigitsThousand()).toEqual('0')
    expect(to3DigitsThousand(null)).toEqual('0')
    expect(to3DigitsThousand('null')).toEqual('0')
  })

  it('to3DigitsThousand should return correct format', () => {
    expect(to3DigitsThousand(300)).toEqual('300')
    expect(to3DigitsThousand(3000)).toEqual('3k')
    expect(to3DigitsThousand(3100)).toEqual('3.1k')
    expect(to3DigitsThousand(3110)).toEqual('3.11k')
    expect(to3DigitsThousand(31111)).toEqual('31.1k')
    expect(to3DigitsThousand(31100)).toEqual('31.1k')
    expect(to3DigitsThousand(31000)).toEqual('31k')
  })
})
