
import optionalSlice, { optionalIncrement, optionalDecrement } from '@/redux/OptionalProvider/slice';
import { onOptionalIncrementEffect, onOptionalDecrementEffect } from '@/redux/OptionalProvider/listeners';
import rootReducer from '@/redux/reducers';
import { startAppListening } from '@/redux/configureStore';


rootReducer.inject(optionalSlice);
startAppListening({ actionCreator: optionalIncrement, effect: onOptionalIncrementEffect });
startAppListening({ actionCreator: optionalDecrement, effect: onOptionalDecrementEffect });

// @ts-ignore
const InjectRoute = ({ children }) => {
  // other login
  return children;
};

export default InjectRoute;
