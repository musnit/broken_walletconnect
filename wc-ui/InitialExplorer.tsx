import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import WalletItem from './WalletItem';
import {
  WalletApp
} from '@spinamp/walletconnect-react-native';

function InitialExplorer({recommendedWallets}:any) {

  const wallets = useMemo(() => {
    return recommendedWallets.slice(0, 7);
  }, [recommendedWallets]);

  return (
    <View style={styles.explorerContainer}>
      {wallets.map((item: WalletApp) => (
        <WalletItem
          walletInfo={item}
          key={item.id}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  explorerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wallet: {
    width: '25%',
  },
});

export default InitialExplorer;
