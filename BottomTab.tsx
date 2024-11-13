import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {ColorfulTabBar} from 'react-navigation-tabbar-collection';

const Tab = createBottomTabNavigator();

const DemoScreen = ({route}: any) => (
  <View style={styles.screen}>
    <Text>{route.name}</Text>
  </View>
);

const BottomTab = () => {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        tabBar={props => (
          <ColorfulTabBar
            {...props}
            openIcon={({color, size}:any) => (
              <Icon name="appstore-o" size={size} color={color} />
            )}
            closeIcon={({color, size}: any) => (
              <Icon name="close" size={size} color={color} />
            )}
          />
        )}>
        <Tab.Screen
          name="Home"
          component={DemoScreen}
          options={{
            title: 'Home',
            icon: ({focused, color, size}: any) => (
              <Icon name="home" size={size} color={color} />
            ),
            color: 'primary',
          }}
        />
      </Tab.Navigator>
  );
};



export default BottomTab;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


