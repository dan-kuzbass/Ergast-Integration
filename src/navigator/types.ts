export enum DriverScreenNames {
  DRIVER_LIST = 'DriverList',
  DRIVER_INFO = 'DriverInfo',
}

export type DriverStackParamList = {
  [DriverScreenNames.DRIVER_LIST]: undefined;
  [DriverScreenNames.DRIVER_INFO]: {driverId: string};
};
