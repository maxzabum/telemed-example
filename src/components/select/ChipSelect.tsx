import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import Chip from '@components/core/Chip';
import {View} from 'tamagui';
import {config} from 'tamagui.config';

type Props = {
  items: string[];
  onSelectChange?: (item: string) => void;
  selectedItem: string;
};
const ChipSelect: FC<Props> = ({items, onSelectChange, selectedItem}) => {
  const handleSelect = (item: string) => {
    onSelectChange && onSelectChange(item);
  };

  const renderItem: ListRenderItem<string> = ({item, index}) => {
    return (
      <Chip
        onPress={() => handleSelect(item)}
        variant={selectedItem === item ? 'selected' : 'default'}>
        {item}
      </Chip>
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item}
      contentContainerStyle={styles.listContainer}
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ChipSelect;

const styles = StyleSheet.create({
  listContainer: {
    columnGap: config.tokens.space.lg.val,
    paddingHorizontal: config.tokens.space['2xl'].val,
  },
});
