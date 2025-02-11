import {connect} from 'react-redux';
import {getDriverInfoAction} from '../../store/actions/drivers';
import {RootState} from '../../store/reducers';
import DriverInfo from './DriverInfo';
import {AppDispatch} from '../../store/types';

const mapStateToProps = (state: RootState) => ({
  driverInfo: state.drivers.driverInfo,
  isLoading: state.drivers.isInfoLoading,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getDriverInfo: (driverId: string) => dispatch(getDriverInfoAction(driverId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DriverInfo);
