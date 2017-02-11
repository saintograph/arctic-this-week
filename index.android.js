import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Scene, Router, Actions } from 'react-native-router-flux';
import AppShell from './src/MainApp';
import SwipeView from './src/views/swipe-view';
import Drawer from './src/components/drawer';
import reducers from './src/reducers';
import About from './src/views/about';
import Contact from './src/views/contact';


const createStoreWithMiddleware = applyMiddleware(
  promise,
)(createStore);

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#FFFFFF',
  },
  navTitle: {
    fontFamily: 'knile-semibold',
  },
  leftButton: {
    paddingRight: 40,
  },
  rightButton: {
    height: 24,
    width: 24,
    marginBottom: 5,
  },
});

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="drawer" component={Drawer} open={false}>
      <Scene key="main" tabs={false}>
        <Scene key="shell" component={AppShell} title="Arctic This Week" />
        <Scene key="swipeView" component={SwipeView} title="Top 5 This Week" />
        <Scene key="contact" component={Contact} title="Contact" />
        <Scene key="about" component={About} title="About Us" />
      </Scene>
    </Scene>
  </Scene>,
);

export default class arctic_this_week extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router
          scenes={scenes}
          navigationBarStyle={styles.headerStyle}
          leftButtonIconStyle={styles.leftButton}
          titleStyle={styles.navTitle}
          drawerImage={require('./src/images/hamburger.png')}
          backButtonImage={require('./src/images/back.png')}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('arctic_this_week', () => arctic_this_week);
