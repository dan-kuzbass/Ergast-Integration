import {getDriverInfo, getDrivers} from '../../api/drivers';
import {ActionType, AppDispatch} from '../types';
import {GetDriverInfoResponse, GetDriversResponse} from '../../api/types';
import {IDriverItem} from '../types/drivers';

export function getDriverListAction(limit: number, offset: number) {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: ActionType.GET_DRIVER_LIST_PENDING,
      });
      const apiReq: GetDriversResponse = await getDrivers(limit, offset);
      const driverlist = apiReq?.MRData?.DriverTable?.Drivers || [];
      const driversTotal = +(apiReq?.MRData?.total ?? 0);
      dispatch({
        type: ActionType.GET_DRIVER_LIST_SUCCESS,
        payload: driverlist,
        driversTotal,
      });
      return apiReq;
    } catch (error) {
      dispatch({
        type: ActionType.GET_DRIVER_LIST_FAIL,
        error,
      });
    }
  };
}

export function getDriverInfoAction(driverId: string) {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: ActionType.GET_DRIVER_INFO_PENDING,
      });
      const apiReq: GetDriverInfoResponse = await getDriverInfo(driverId);
      dispatch({
        type: ActionType.GET_DRIVER_INFO_SUCCESS,
        payload: apiReq?.MRData?.DriverTable?.Drivers?.[0],
      });
      return apiReq;
    } catch (error) {
      console.error(error);
    }
  };
}

export function setOffsetAction(offset: number) {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: ActionType.SET_OFFSET,
      payload: offset,
    });
  };
}

export function setDriverListAction(driverList: IDriverItem[]) {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: ActionType.SET_DRIVER_LIST,
      payload: driverList,
    });
  };
}
