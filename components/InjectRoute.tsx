import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import optionalSlice, { optionalIncrement, optionalDecrement } from '@/redux/OptionalProvider/slice';
import { onOptionalIncrementEffect, onOptionalDecrementEffect } from '@/redux/OptionalProvider/listeners';

import rootReducer from '@/redux/reducers';
import { addAppListener } from '@/redux/configureStore';

// @ts-ignore
const InjectRoute = ({ children }) => {
  const dispatch = useDispatch();
  const [isInitializeDone, setIsInitializeDone] = useState(false);

  useEffect(() => {
    const unsubscribeFn: any[] = [];

    // some condition needed
    rootReducer.inject(optionalSlice);

    unsubscribeFn.push(dispatch(addAppListener({ actionCreator: optionalIncrement, effect: onOptionalIncrementEffect  })))
    unsubscribeFn.push(dispatch(addAppListener({ actionCreator: optionalDecrement, effect: onOptionalDecrementEffect  })))

    setIsInitializeDone(true);

    return () => {
      unsubscribeFn.forEach(fn => fn());
    };
  }, []);

  // other login
  if (!isInitializeDone) return <h1>loading</h1>;

  return children;
};

export default InjectRoute;
