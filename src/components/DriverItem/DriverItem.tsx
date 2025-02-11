import React, {useCallback} from 'react';
import {IDriverItem} from '../../store/types/drivers';
import {Pressable, StyleSheet} from 'react-native';
import DriverItemRow from './DriverItemRow';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DriverScreenNames, DriverStackParamList} from '../../navigator/types';

interface Props {
  driver: IDriverItem;
}

const DriverItem = ({driver}: Props) => {
  const {driverId, familyName, givenName, url, dateOfBirth, nationality} =
    driver;

  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        DriverStackParamList,
        DriverScreenNames.DRIVER_INFO
      >
    >();

  const onPressDriver = useCallback(() => {
    navigation.navigate(DriverScreenNames.DRIVER_INFO, {driverId});
  }, [navigation, driverId]);

  return (
    <Pressable
      key={driver.driverId}
      onPress={onPressDriver}
      style={({pressed}) => [styles.container, pressed && {opacity: 0.4}]}>
      <DriverItemRow driverKey={'driverId'} driverValue={driverId} />
      <DriverItemRow driverKey={'familyName'} driverValue={familyName} />
      <DriverItemRow driverKey={'givenName'} driverValue={givenName} />
      <DriverItemRow driverKey={'url'} driverValue={url} isLink />
      <DriverItemRow driverKey={'dateOfBirth'} driverValue={dateOfBirth} />
      <DriverItemRow driverKey={'nationality'} driverValue={nationality} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default DriverItem;
