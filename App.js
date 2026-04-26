import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { useState } from 'react';

const MAP_URL = process.env.EXPO_PUBLIC_MAP_URL || 'http://10.0.2.2:3000/map';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator
          style={StyleSheet.absoluteFill}
          size="large"
          color="#6366f1"
        />
      )}
      <WebView
        source={{ uri: MAP_URL }}
        style={styles.webview}
        onLoadEnd={() => setLoading(false)}
        geolocationEnabled
        javaScriptEnabled
        domStorageEnabled
        allowsFullscreenVideo
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});
