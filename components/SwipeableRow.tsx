import { Ionicons } from '@expo/vector-icons';
import React, { Component, PropsWithChildren } from 'react';
import { Animated, StyleSheet, I18nManager, View } from 'react-native';

import { RectButton, Swipeable } from 'react-native-gesture-handler';

const AnimatedView = Animated.createAnimatedComponent(View);

export default class SwipeableRow extends Component<
  PropsWithChildren<unknown & {onDelete: () => void}>
> {

  private renderRightActions = (
    _progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    return (
      <RectButton style={styles.rightAction} onPress={this.close}>
        {/* Change it to some icons */}
        <Ionicons name='trash-outline' color="white" size={24} style={{marginRight: 10}}></Ionicons>
        {/* <AnimatedView style={[styles.actionIcon, { transform: [{ scale }] }]} /> */}
      </RectButton>
    );
  };

  private swipeableRow?: Swipeable;

  private updateRef = (ref: Swipeable) => {
    this.swipeableRow = ref;
  };
  private close = () => {
    this.swipeableRow?.close();
    this.props.onDelete();
  };
  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={80}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderRightActions={this.renderRightActions}>
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({

  rightAction: {
    alignItems: 'center',
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    backgroundColor: '#dd2c00',
    flex: 1,
    justifyContent: 'flex-end',
  },
});