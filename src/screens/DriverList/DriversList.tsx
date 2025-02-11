import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import React, {useCallback, useEffect} from 'react';

import {useAppSelector} from '../../store/hooks/useAppSelector';
import {DriverItem} from '../../components';
import {IDriverItem} from '../../store/types/drivers';
import {AppColors} from '../../ui/theme/light';
import {DRIVER_PAGE_LIMIT} from '../../constants';

interface Props {
  driverList: IDriverItem[];
  getDriverList: (limit: number, offset: number) => void;
  setOffset: (offset: number) => void;
  setDriverList: (list: IDriverItem[]) => void;
  offset: number;
  isLoading: boolean;
}

const DriversList = ({
  getDriverList,
  driverList,
  isLoading,
  offset,
  setOffset,
  setDriverList,
}: Props) => {
  const driversTotal = useAppSelector(state => state.drivers.driversTotal);

  useEffect(() => {
    getDriverList(DRIVER_PAGE_LIMIT, offset);
  }, [getDriverList, offset]);

  const onRefresh = useCallback(() => {
    setOffset(0);
    setDriverList([]);
    getDriverList(DRIVER_PAGE_LIMIT, 0);
  }, [setOffset, setDriverList, getDriverList]);

  const onEndReached = useCallback(() => {
    if (driverList.length < driversTotal) {
      setOffset(offset + 10);
    }
  }, [setOffset, driverList.length, driversTotal, offset]);

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onRefresh}
          tintColor={AppColors.LOADER}
        />
      }
      refreshing={false}
      data={driverList}
      renderItem={({item}) => <DriverItem driver={item} />}
      contentContainerStyle={styles.container}
      onEndReachedThreshold={0.1}
      onEndReached={onEndReached}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 10,
  },
});

export default DriversList;
