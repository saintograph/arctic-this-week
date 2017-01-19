import React from 'react';
import { Header, Button, Title, Icon } from 'native-base';

function MenuBar() {
  return (
    <Header>
      <Button transparent>
        <Icon name="ios-arrow-back" />
      </Button>
      <Title>Arctic This Week</Title>
      <Button transparent>
        <Icon name="ios-menu" />
      </Button>
    </Header>
  );
}

export default MenuBar;
