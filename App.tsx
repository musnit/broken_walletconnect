import React from 'react';
import {Button, View} from 'react-native';
import WalletConnectModal from './WalletConnectModal';

import {useWalletConnectModal} from '@walletconnect/modal-react-native';

const App = () => {
  const {open} = useWalletConnectModal();

  return (
    <>
      <WalletConnectModal />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Press me" onPress={open} />
      </View>
    </>
  );
};

export default App;
