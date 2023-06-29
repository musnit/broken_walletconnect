import { StyleSheet, View } from 'react-native';
import InitialExplorer from './InitialExplorer';

export function WalletConnectComponent({recommendedWallets}:any) {

  return (
      <View
        style={[styles.container]}
      >
        <View
          style={[
            styles.connectWalletContainer,
          ]}
        >
          <InitialExplorer recommendedWallets={recommendedWallets} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  connectWalletContainer: {
    paddingBottom: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
