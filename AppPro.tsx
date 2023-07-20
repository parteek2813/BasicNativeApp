import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import FlatCards from './components/FlatCards';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: '#ffffff',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;
