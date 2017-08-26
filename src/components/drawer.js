import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import Drawer from 'react-native-drawer';
import { Actions, DefaultRenderer } from 'react-native-router-flux';
import SideMenu from './sidemenu';

class DefaultDrawer extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    // const state = this.props.navigationState;
    // const children = state.children;
    // <Drawer
    //   ref="navigation"
    //   open={state.open}
    //   onOpen={() => Actions.refresh({ key: state.key, open: true })}
    //   onClose={() => Actions.refresh({ key: state.key, open: false })}
    //   type="displace"
    //   content={<SideMenu />}
    //   tapToClose
    //   openDrawerOffset={0.2}
    //   panCloseMask={0.2}
    //   negotiatePan
    //   tweenHandler={(ratio) => ({
    //     main: { opacity: Math.max(0.54, 1 - ratio) },
    //   })}
    // >
    //   <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
    // </Drawer>
    return (
      <View><Text>Test</Text></View>
    );
  }
}

export default DefaultDrawer;
