import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IDriverItem} from '../../store/types/drivers';
import PressableOrNotChild from '../PressableOrNotChild';
import {AppColors} from '../../ui/theme/light';

interface Props {
  driverKey: keyof IDriverItem;
  driverValue?: string;
  isLink?: boolean;
}

const DriverItemRow = ({driverKey, driverValue, isLink}: Props) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{`${driverKey}: `}</Text>
      <PressableOrNotChild url={isLink ? driverValue : null}>
        <Text
          style={StyleSheet.flatten([styles.value, isLink && styles.link])}
          numberOfLines={1}>
          {driverValue ?? '-'}
        </Text>
      </PressableOrNotChild>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  label: {
    fontSize: 16,
    fontWeight: '700',
  },
  value: {
    fontSize: 16,
  },
  link: {color: AppColors.LINK},
});

export default DriverItemRow;
