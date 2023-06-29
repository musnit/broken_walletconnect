import React from 'react';
import {Button, View} from 'react-native';
import '@walletconnect/react-native-compat';
import {
  useWalletConnectModal,
  WalletConnectModal,
} from '@walletconnect/modal-react-native';

import {providerMetadata} from './WalletConnectModal';

const App = () => {
  const {open} = useWalletConnectModal();

  return (
    <>
      <WalletConnectModal
        projectId={'04052d4d89dc7ad8240fa0565cb37213'}
        providerMetadata={providerMetadata}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Press me" onPress={open} />
      </View>
    </>
  );
};

export default App;
