import DoctorCard from '@components/card/DoctorCard';
import {IDoctor} from '../../../types';
import {useDoctorViewModel} from '@viewmodels/doctorViewModel';
import React from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {View} from 'tamagui';
import {config} from 'tamagui.config';

const DoctorList = () => {
  const {doctor} = useDoctorViewModel();

  const renderItem: ListRenderItem<IDoctor> = ({index, item}) => {
    return <DoctorCard doctor={item} />;
  };
  return (
    <View bg={'$backgroundGeneralStandardDefault'} flex={1}>
      <FlatList
        data={doctor}
        renderItem={renderItem}
        keyExtractor={({id}) => id.toString()}
        contentContainerStyle={style.listContainer}
      />
    </View>
  );
};

const style = StyleSheet.create({
  listContainer: {
    rowGap: config.tokens.space.xl.val,
    padding: 12,
  },
});
export default DoctorList;
