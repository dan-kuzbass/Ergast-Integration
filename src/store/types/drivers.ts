import {ActionType} from '.';

export interface IDriverItem {
  driverId: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface IDriverInfo extends IDriverItem {}

interface IGetDriversPending {
  type: ActionType.GET_DRIVER_LIST_PENDING;
}

interface IGetDriversSuccess {
  type: ActionType.GET_DRIVER_LIST_SUCCESS;
  payload: IDriverItem[];
  driversTotal: number;
}

interface IGetDriversFail {
  type: ActionType.GET_DRIVER_LIST_FAIL;
  payload: string;
}

interface IGetDriverInfoPending {
  type: ActionType.GET_DRIVER_INFO_PENDING;
}

interface IGetDriverInfoSuccess {
  type: ActionType.GET_DRIVER_INFO_SUCCESS;
  payload: IDriverInfo;
}

interface IGetDriverInfoFail {
  type: ActionType.GET_DRIVER_INFO_FAIL;
  payload: string;
}

interface ISetDriverList {
  type: ActionType.SET_DRIVER_LIST;
  payload: IDriverItem[];
}

interface ISetOffset {
  type: ActionType.SET_OFFSET;
  payload: number;
}

export type DriversAction =
  | IGetDriversPending
  | IGetDriversSuccess
  | IGetDriversFail
  | IGetDriverInfoPending
  | IGetDriverInfoSuccess
  | IGetDriverInfoFail
  | ISetDriverList
  | ISetOffset;

export type DriversState = {
  list: IDriverItem[];
  isListLoading: boolean;
  isInfoLoading: boolean;
  error: string | null;
  driversTotal: number;
  driverInfo?: IDriverInfo;
  offset: number;
};
