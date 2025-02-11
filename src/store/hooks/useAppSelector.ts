import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../reducers';
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
