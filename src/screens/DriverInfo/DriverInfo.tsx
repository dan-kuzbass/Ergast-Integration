import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {DriverScreenNames, DriverStackParamList} from '../../navigator/types';
import {IDriverInfo} from '../../store/types/drivers';
import {DriverItemRow} from '../../components';
import {AppColors} from '../../ui/theme/light';

interface Props {
  getDriverInfo: (driverId: string) => void;
  route: RouteProp<DriverStackParamList, DriverScreenNames.DRIVER_INFO>;
  navigation: NavigationProp<
    DriverStackParamList,
    DriverScreenNames.DRIVER_INFO
  >;
  driverInfo?: IDriverInfo;
  isLoading: boolean;
}

const DriverInfo = ({
  getDriverInfo,
  route,
  driverInfo,
  navigation,
  isLoading,
}: Props) => {
  useEffect(() => {
    getDriverInfo(route?.params?.driverId);
  }, [getDriverInfo, route?.params?.driverId]);

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        title: `Информация о гонщике ${route?.params?.driverId}`,
      });
    }, [navigation, route?.params?.driverId]),
  );

  if (isLoading) {
    return (
      <ActivityIndicator
        style={styles.loader}
        size="large"
        color={AppColors.LOADER}
      />
    );
  }

  return (
    <View style={styles.container}>
      <DriverItemRow driverKey="driverId" driverValue={driverInfo?.driverId} />
      <DriverItemRow
        driverKey="dateOfBirth"
        driverValue={driverInfo?.dateOfBirth}
      />
      <DriverItemRow
        driverKey="familyName"
        driverValue={driverInfo?.familyName}
      />
      <DriverItemRow
        driverKey="givenName"
        driverValue={driverInfo?.givenName}
      />
      <DriverItemRow
        driverKey="nationality"
        driverValue={driverInfo?.nationality}
      />
      <DriverItemRow driverKey="url" driverValue={driverInfo?.url} isLink />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DriverInfo;
