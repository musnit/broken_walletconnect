import { Image, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import Touchable from './Touchable';

import {
  WalletApp,
} from '@spinamp/walletconnect-react-native';

interface Props {
  walletInfo: WalletApp;
  style?: StyleProp<ViewStyle>;
}

export const ITEM_HEIGHT = 80;

function WalletItem({ walletInfo, style }: Props) {

  return (
    <Touchable
      onPress={walletInfo.deepLink}
      key={walletInfo.id}
      style={[styles.container, style]}
    >
      <Image
        style={[styles.icon]}
        source={{
          uri: walletInfo.imageURL,
        }}
      />
      <Text
        style={[styles.name]}
        numberOfLines={1}
      >
        {walletInfo.name}
      </Text>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    alignItems: 'center',
    marginVertical: 16,
  },
  icon: {
    height: 60,
    width: 60,
    borderRadius: 16,
    borderWidth: 1,
  },
  name: {
    marginTop: 5,
    maxWidth: 100,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default WalletItem;
