import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>창흠아 제주도 계획 좀 도와줘</Text>
      <StatusBar style="auto" />
      
      <Image source={require('./assets/baduck.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#000',
    fontWeight:'bold',
    fontSize: '30px'
  }
});
