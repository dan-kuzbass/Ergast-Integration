import apiClient from './client';
import {GetDriverInfoResponse, GetDriversResponse} from './types';

export const getDrivers = (
  limit: number,
  offset: number,
): Promise<GetDriversResponse> =>
  apiClient.get('drivers', {params: {limit, offset}});

export const getDriverInfo = (
  driverId: string,
): Promise<GetDriverInfoResponse> => apiClient.get(`drivers/${driverId}`);
