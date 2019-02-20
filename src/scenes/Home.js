// @flow
import React from 'react';
import { ScrollView, StatusBar, Button } from 'react-native';

import { SafeAreaView } from 'react-navigation';

const Home = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ horizontal: 'always' }}>
      <Button
        onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
        title="Open profile screen"
      />
      {/* <Button
        onPress={() => navigation.navigate('NotifSettings')}
        title="Open notifications screen"
      />
      <Button
        onPress={() => navigation.navigate('SettingsTab')}
        title="Go to settings tab"
      />
      <Button onPress={() => navigation.goBack(null)} title="Go back" /> */}
    </SafeAreaView>

    <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
  </ScrollView>
);

export default Home;
