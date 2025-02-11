import {removeDuplicateFromArray} from '../../helpers/removeDuplicates';
import {Action, ActionType, State} from '../types';

const initialState = {
  list: [],
  isListLoading: false,
  isInfoLoading: false,
  error: null,
  driversTotal: 0,
  offset: 0,
};

const driversReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_DRIVER_LIST_PENDING:
      return {
        ...state,
        isListLoading: true,
        error: null,
      };
    case ActionType.GET_DRIVER_LIST_SUCCESS: {
      return {
        ...state,
        driversTotal: action.driversTotal,
        isListLoading: false,
        list: removeDuplicateFromArray(
          [...state.list, ...action.payload],
          'driverId',
        ),
        error: null,
      };
    }
    case ActionType.GET_DRIVER_LIST_FAIL:
      return {
        ...state,
        driversTotal: 0,
        isListLoading: false,
        error: action.payload,
        list: [],
      };

    case ActionType.GET_DRIVER_INFO_PENDING:
      return {
        ...state,
        isInfoLoading: true,
        error: null,
      };
    case ActionType.GET_DRIVER_INFO_SUCCESS:
      return {
        ...state,
        driverInfo: action.payload,
        isInfoLoading: false,
        error: null,
      };
    case ActionType.GET_DRIVER_INFO_FAIL:
      return {
        ...state,
        isInfoLoading: false,
        error: action.payload,
        driverInfo: undefined,
      };

    case ActionType.SET_DRIVER_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case ActionType.SET_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };
    default:
      return state;
  }
};

export default driversReducer;
