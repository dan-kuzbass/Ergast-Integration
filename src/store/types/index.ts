import store from '../';
import {DriversAction, DriversState} from './drivers';

export enum ActionType {
  GET_DRIVER_LIST_PENDING = 'GET_DRIVER_LIST_PENDING',
  GET_DRIVER_LIST_SUCCESS = 'GET_DRIVER_LIST_SUCCESS',
  GET_DRIVER_LIST_FAIL = 'GET_DRIVER_LIST_FAIL',

  GET_DRIVER_INFO_PENDING = 'GET_DRIVER_INFO_PENDING',
  GET_DRIVER_INFO_SUCCESS = 'GET_DRIVER_INFO_SUCCESS',
  GET_DRIVER_INFO_FAIL = 'GET_DRIVER_INFO_FAIL',

  SET_OFFSET = 'SET_OFFSET',
  SET_DRIVER_LIST = 'SET_DRIVER_LIST',
}

export type Action = DriversAction;

export type State = DriversState;

export type AppDispatch = typeof store.dispatch;
