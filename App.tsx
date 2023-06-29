import React from 'react';
import {Button, View} from 'react-native';
import '@walletconnect/react-native-compat';
import {
  useWalletConnectModal,
} from '@spinamp/walletconnect-react-native';

import {providerMetadata} from './WalletConnectModal';
import { WalletConnectComponent } from './wc-ui/WalletConnectComponent';

const config = {
  projectId:'PROJECT_ID',
  providerMetadata: providerMetadata
}

const App = () => {
  const {recommendedWallets} = useWalletConnectModal(config);

  return (
    <>
      <WalletConnectComponent
        recommendedWallets={recommendedWallets}
      />
    </>
  );
};

export default App;
