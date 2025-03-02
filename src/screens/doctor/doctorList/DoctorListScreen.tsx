import React, {FC} from 'react';
import {StaticScreenProps} from '@react-navigation/native';
import {View, YStack} from 'tamagui';
import ChipSelect from '@components/select/ChipSelect';
import {SceneMap, TabView} from 'react-native-tab-view';
import DoctorList from './DoctorList';
import TabBar from '@components/tabView/TabBar';
import {useWindowDimensions} from 'react-native';
import {useDoctorViewModel} from '@viewmodels/doctorViewModel';

type Props = StaticScreenProps<{
  disease: string;
}>;

const renderScene = SceneMap({
  active: DoctorList,
  inactive: DoctorList,
});

const routes = [
  {key: 'active', title: 'พร้อมให้บริการ'},
  {key: 'inactive', title: 'ออฟไลน์'},
];

const DoctorListScreen: FC<Props> = ({...props}) => {
  const layout = useWindowDimensions();
  const {doctorType, onSetSelectedDoctorType, selectedDoctorType} =
    useDoctorViewModel();
  const [index, setIndex] = React.useState(1);

  const handleSelectChange = (item: string) => {
    onSetSelectedDoctorType(item);
  };

  return (
    <YStack
      bg={'$backgroundGeneralStandardDefault'}
      mt={'$3xl'}
      rounded={'$lg'}
      flex={1}
      pt={'$3xl'}
      rowGap={'$2xl'}>
      <View>
        <ChipSelect
          items={doctorType}
          onSelectChange={handleSelectChange}
          selectedItem={selectedDoctorType}
        />
      </View>
      <TabView
        navigationState={{index, routes}}
        renderTabBar={TabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </YStack>
  );
};

export default DoctorListScreen;
