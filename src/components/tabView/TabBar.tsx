import {
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  useAnimatedValue,
} from 'react-native';
import React, {FC, useEffect} from 'react';
import {
  Route,
  SceneRendererProps,
  NavigationState,
  TabDescriptor,
} from 'react-native-tab-view';
import {config} from 'tamagui.config';
import {View, YStack} from 'tamagui';
import Text from '@components/core/Text';

const TabBar = ({
  ...props
}: SceneRendererProps & {
  navigationState: NavigationState<{
    key: string;
    title: string;
  }>;
  options:
    | Record<
        string,
        TabDescriptor<{
          key: string;
          title: string;
        }>
      >
    | undefined;
}) => {
  const {navigationState, layout, position} = props;
  const slideAnim = useAnimatedValue(0);

  useEffect(() => {
    //create indicator slide animation
    const indicatorWith = getIndicatorWidth();

    Animated.spring(slideAnim, {
      toValue: navigationState.index * indicatorWith,
      useNativeDriver: true,
    }).start();
  }, [navigationState]);

  //get indicator width
  const getIndicatorWidth = () => {
    const {width} = layout;

    let percent = 100 / props.navigationState.routes.length;
    const indicatorWith = (percent / 100) * width;

    return indicatorWith;
  };

  const renderItem =
    ({
      navigationState,
      position,
    }: {
      navigationState: NavigationState<{
        key: string;
        title: string;
      }>;
      position: Animated.AnimatedInterpolation<number>;
    }) =>
    ({route, index}: {route: Route; index: number}) => {
      //create text opacity animation
      const inputRange = navigationState.routes.map((_, i) => i);

      const activeOpacity = position.interpolate({
        inputRange,
        outputRange: inputRange.map((i: number) => (i === index ? 1 : 0)),
      });
      const inactiveOpacity = position.interpolate({
        inputRange,
        outputRange: inputRange.map((i: number) => (i === index ? 0 : 1)),
      });

      return (
        <View flex={1}>
          <Animated.View style={[styles.item, {opacity: inactiveOpacity}]}>
            <Text style={[styles.inactive]}>{route.title}</Text>
          </Animated.View>
          <Animated.View
            style={[styles.item, styles.activeItem, {opacity: activeOpacity}]}>
            <Text style={[styles.active]}>{route.title}</Text>
          </Animated.View>
        </View>
      );
    };
  return (
    <YStack
      bg="$backgroundGeneralStandardDefault"
      flexDirection="row"
      justify="space-between"
      py={'$lg'}
      borderBottomWidth={1}
      borderBlockColor={'$borderTabTabLineDefault'}
      position="relative">
      {navigationState.routes.map((route: Route, index: number) => {
        return (
          <TouchableWithoutFeedback
            key={route.key}
            onPress={() => props.jumpTo(route.key)}>
            {renderItem(props)({route, index})}
          </TouchableWithoutFeedback>
        );
      })}
      <Animated.View
        style={[
          styles.tabIndicator,
          {
            width: getIndicatorWidth(),
            transform: [
              {
                translateX: slideAnim,
              },
            ],
          },
        ]}
      />
    </YStack>
  );
};

const styles = StyleSheet.create({
  tabIndicator: {
    borderWidth: 1,
    borderColor: config.tokens.color.borderTabTabLineCurrent.val,
    position: 'absolute',
    bottom: -1,
    // width: '100%',
  },
  tabBar: {
    backgroundColor: config.tokens.color.backgroundGeneralStandardDefault.val,
  },
  incatiorContainer: {
    borderColor: config.tokens.color.borderTabTabLineDefault.val,
    borderBottomWidth: 1,
  },
  tabbars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
  },
  label: {
    fontSize: 10,
    marginTop: 3,
    marginBottom: 1.5,
    backgroundColor: 'transparent',
  },

  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4.5,
  },
  activeItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  active: {
    color: '#0084ff',
  },
  inactive: {
    color: '#939393',
  },
});
export default TabBar;
