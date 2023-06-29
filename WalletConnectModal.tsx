import {WalletConnectModal} from '@walletconnect/modal-react-native';
import React, {FC} from 'react';

const providerMetadata = {
  name: 'App Name',
  url: 'https://appy.xyz',
  description: 'app description',
  icons: [],
  redirect: {
    native: 'appy://',
  },
};

const WalletProvider: FC = () => {
  return (
    <WalletConnectModal
      projectId={'enter_id'}
      providerMetadata={providerMetadata}
    />
  );
};

export default WalletProvider;
