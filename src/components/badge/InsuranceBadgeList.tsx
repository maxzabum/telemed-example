import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {Insurance} from '../../types';
import {Image, View, XStack} from 'tamagui';
import Text from '@components/core/Text';

type Props = {
  items: Insurance[];
  maxShow?: number;
};
const InsuranceBadgeList: FC<Props> = ({items, maxShow = 5}) => {
  const mapImage = (item: Insurance) => {
    switch (item) {
      case Insurance.CGD:
        return require('@assets/images/insurance/CGD.png');
      case Insurance.AIA:
        return require('@assets/images/insurance/AIA.png');
      case Insurance.FWD:
        return require('@assets/images/insurance/FWD.png');
      case Insurance.NHSO:
        return require('@assets/images/insurance/NHSO.png');
      case Insurance.SSO:
        return require('@assets/images/insurance/SSO.png');
      default:
        return require('@assets/images/insurance/EX1.png');
    }
  };
  const renderItem = (item: Insurance, index: number) => {
    return <Image key={index} source={mapImage(item)} width={20} height={20} />;
  };
  return (
    <XStack columnGap={'$lg'}>
      <XStack columnGap={'$sm'}>
        {items.slice(0, maxShow).map(renderItem)}
      </XStack>
      {items.length > maxShow && (
        <View
          bg={'$surfaceBadgeFadeBadgeSecondary'}
          justify={'center'}
          px={'$lg'}
          rounded={'$xs'}>
          <Text color={'$textBadgeFadeBadgeSecondary'} fontSize={'$sm'}>
            {items.length - maxShow}+
          </Text>
        </View>
      )}
    </XStack>
  );
};

export default InsuranceBadgeList;

const styles = StyleSheet.create({});
