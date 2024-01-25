import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link'

import { selectCount } from '@/redux/CounterProvider/selectors';
import { selectOptionalCount } from '@/redux/OptionalProvider/selectors';
import { increment } from '@/redux/CounterProvider/slice';
import { optionalIncrement } from '@/redux/OptionalProvider/slice';

export default function OtherPage() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const optionalCount = useSelector(selectOptionalCount);


  return (
    <main>
      <h1>Other Page</h1>
      <Link href="/">to Home</Link>
      <h1>count: {count}</h1>
      <h1>optionalCount: {optionalCount}</h1>
      <button onClick={() => { dispatch(increment()) }}>increment count</button>
      <button onClick={() => { dispatch(optionalIncrement()) }}>increment optionalCount</button>
    </main>
  );
}
