import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import RootNavigation from './src/navigation/RootNavigation';

export default function App() {
  return (
   <RootNavigation/>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
