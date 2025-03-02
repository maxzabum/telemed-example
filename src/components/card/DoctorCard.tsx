import Text from '@components/core/Text';
import {IDoctor} from '../../types';
import React, {FC} from 'react';
import {Image, View, XStack, YStack} from 'tamagui';
import {StyleSheet} from 'react-native';
import {config} from 'tamagui.config';
import RateStar from '@assets/svgs/RateStar';
import MarkPin from '@assets/svgs/MarkPin';
import InsuranceBadgeList from '@components/badge/InsuranceBadgeList';
import User01 from '@assets/svgs/User01';

type Props = {
  doctor: IDoctor;
  onPress?: () => void;
};

// This component have to fix lineHeight to render correctly
const DoctorCard: FC<Props> = ({doctor, onPress}) => {
  return (
    <View
      rounded={'$lg'}
      bg={'$backgroundGeneralStandardDefault'}
      boxShadow={'$shadow.onLight-shadowMd'}>
      <XStack>
        <Image
          source={{
            uri: doctor.image,
          }}
          style={styles.image}
        />
        <YStack
          rounded={'$lg'}
          bg={'$backgroundCardGeneralStandardDefault'}
          flex={1}
          p={'$2xl'}
          ml={-16}
          rowGap={'$lg'}>
          <Text
            lineHeight={20}
            color={'$textCardTextGeneralDefault'}
            fontWeight={'600'}>
            {doctor.name}
          </Text>
          <XStack columnGap={'$lg'}>
            <XStack columnGap={'$xs'}>
              <RateStar />
              <Text color={'$textIconIconGeneralSubdueDefault'} lineHeight={20}>
                {doctor.rating}
              </Text>
            </XStack>
            <XStack columnGap={'$sm'}>
              <User01 />
              <XStack columnGap={'$xs'}>
                <Text
                  color={'$textIconIconGeneralSubdueDefault'}
                  lineHeight={20}>
                  {doctor.type}
                </Text>
                <Text
                  color={'$textIconIconGeneralSubdueDefault'}
                  lineHeight={20}>
                  ({doctor.speciality})
                </Text>
              </XStack>
            </XStack>
          </XStack>

          <XStack columnGap={'$sm'}>
            <MarkPin />
            <Text color={'$textIconIconGeneralSubdueDefault'} lineHeight={20}>
              {doctor.location}
            </Text>
          </XStack>
          <View>
            <InsuranceBadgeList items={doctor.insurance} />
          </View>
          <XStack justify={'space-between'}>
            <Text
              color={'$textCardTextGeneralDefault'}
              fontWeight={'600'}
              lineHeight={20}>
              ค่าบริการเริ่มต้น
            </Text>
            <Text
              color={'$textCardTextGeneralHighlight'}
              fontWeight={'600'}
              lineHeight={20}>
              {doctor.minPrice === 0 ? 'ฟรี' : 0}
            </Text>
          </XStack>
        </YStack>
      </XStack>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 123,
    height: 164,
    borderTopLeftRadius: config.tokens.radius.md.val,
    borderBottomLeftRadius: config.tokens.radius.md.val,
  },
});
export default DoctorCard;
