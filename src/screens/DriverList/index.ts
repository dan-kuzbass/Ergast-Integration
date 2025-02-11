import {connect} from 'react-redux';
import {
  getDriverListAction,
  setDriverListAction,
  setOffsetAction,
} from '../../store/actions/drivers';
import DriversList from './DriversList';
import {RootState} from '../../store/reducers';
import {AppDispatch} from '../../store/types';
import {IDriverItem} from '../../store/types/drivers';

const mapStateToProps = (state: RootState) => ({
  driverList: state.drivers.list,
  isLoading: state.drivers.isListLoading,
  offset: state.drivers.offset,
  driversTotal: state.drivers.driversTotal,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getDriverList: (limit: number, offset: number) =>
    dispatch(getDriverListAction(limit, offset)),
  setDriverList: (list: IDriverItem[]) => dispatch(setDriverListAction(list)),
  setOffset: (offset: number) => dispatch(setOffsetAction(offset)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DriversList);
