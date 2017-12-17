import test from 'ava'
import main from '../lib'

test('First test', (t)=> {
  const result = main()
  t.true(result)
})
