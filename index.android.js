import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Scene, Router, Actions } from 'react-native-router-flux';
import AppShell from './src/MainApp';
import SwipeView from './src/views/swipe-view';
import Test from './src/components/test';
import reducers from './src/reducers';


const createStoreWithMiddleware = applyMiddleware(
  promise,
)(createStore);

function rightButton() {
  return console.log('right button');
}

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="shell" component={AppShell} title="Arctic This Week" onRight={() => { rightButton(); }} rightButtonImage={require('./src/images/menu.png')} />
    <Scene key="swipeView" component={SwipeView} title="Top 5 This Week" onRight={() => { rightButton(); }} rightButtonImage={require('./src/images/menu.png')} />
  </Scene>,
);

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#FFFFFF',
  },
  navTitle: {
    fontFamily: 'knile-semibold',
  },
  leftButton: {
    color: '#000000',
  },
  rightButton: {
    height: 24,
    width: 24,
    marginBottom: 5,
  },
});

export default class arctic_this_week extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router
          scenes={scenes}
          navigationBarStyle={styles.headerStyle}
          titleStyle={styles.navTitle}
          backButtonImage={require('./src/images/back.png')}
          rightButtonIconStyle={styles.rightButton}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('arctic_this_week', () => arctic_this_week);
