import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Instagram: {screen: TransactionScreen},
  Facebook: {screen: SearchScreen},
  Rate: {screen: HomeScreen},

},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Instagram"){
        return(
          <Image
          source={require("./assets/insta.webp")}
          style={{width:60, height:60 , marginTop : -40 ,}}
        />
        )
        
      }
      else if(routeName === "Facebook"){
        return(
          <Image
          source={require("./assets/fb.webp")}
          style={{width:60, height:60 , marginTop : -50 ,}}
        />)
        
      }

      else if(routeName === "Rate"){
        return(
          <Image
          source={require("./assets/rateus.png")}
          style={{width:60, height:60 , marginTop : -10 ,}}
        />)
        
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});