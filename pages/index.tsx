import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link'

import { selectCount } from '@/redux/CounterProvider/selectors';
import { selectOptionalCount } from '@/redux/OptionalProvider/selectors';
import { increment } from '@/redux/CounterProvider/slice';
import optionalSlice, { optionalIncrement, optionalDecrement } from '@/redux/OptionalProvider/slice';
import { onOptionalIncrementEffect, onOptionalDecrementEffect } from '@/redux/OptionalProvider/listeners';
import rootReducer from '@/redux/reducers';
import { startAppListening } from '@/redux/configureStore';

// approach 1
rootReducer.inject(optionalSlice);
startAppListening({ actionCreator: optionalIncrement, effect: onOptionalIncrementEffect });
startAppListening({ actionCreator: optionalDecrement, effect: onOptionalDecrementEffect });

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const optionalCount = useSelector(selectOptionalCount);


  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/other">to other</Link>
      <h1>count: {count}</h1>
      <h1>optionalCount: {optionalCount}</h1>
      <button onClick={() => { dispatch(increment()) }}>increment count</button>
      <button onClick={() => { dispatch(optionalIncrement()) }}>increment optionalCount</button>
    </main>
  );
}
