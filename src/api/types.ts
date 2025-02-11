import {IDriverItem} from '../store/types/drivers';

export interface GetDriversResponse {
  MRData: {
    DriverTable: {
      Drivers: IDriverItem[];
    };
    total?: number;
  };
}

export interface GetDriverInfoResponse {
  MRData: {
    DriverTable: {
      Drivers: IDriverItem[];
    };
  };
}
