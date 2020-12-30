import React from 'react';
import { Text, View ,Image} from 'react-native';

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                       <Text>This is an app called "Instabook". You can navigate between Instagram and Facebook within the same applicaion.</Text>

   <Text>Welcome to Instagram Page</Text>
   <Image
                source={require("../assets/book.png")}
                style={{width:500, height: 100 , alignSelf  : 'center' , marginTop : -575 ,}  }/>
        </View>
      );
    }
  }