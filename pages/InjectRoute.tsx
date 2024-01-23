
import optionalSlice, { optionalIncrement, optionalDecrement } from '@/redux/OptionalProvider/slice';
import { onOptionalIncrementEffect, onOptionalDecrementEffect } from '@/redux/OptionalProvider/listeners';
import  { listenerMiddleware } from '@/redux/configureStore';
import rootReducer from '@/redux/reducers';


rootReducer.inject(optionalSlice);
// @ts-ignore
listenerMiddleware.startListening({ actionCreator: optionalIncrement, effect: onOptionalIncrementEffect });
// @ts-ignore
listenerMiddleware.startListening({ actionCreator: optionalDecrement, effect: onOptionalDecrementEffect });

// @ts-ignore
const InjectRoute = ({ children }) => {
  // other login
  return children;
};

export default InjectRoute;
