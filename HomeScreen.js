import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
constructor(){
  super();
  this.state={
    like:0,
    dislike:0
  }
}
likecount=()=>{
  this.setState({like:this.state.like+1});
}
dislikecount=()=>{
  this.setState({dislike:this.state.dislike+1});
}
  render() {
    return (
      <View>
        <View>
      
       
   


          
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin:5 }}>Rate Instabook</Text>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:20}}>
             <Text>{this.state.like}</Text>
             <Text>{this.state.dislike}</Text>
             </View>
            <TouchableOpacity onPress ={this.likecount}>
            
              <Image
                style={{ width: 50, height: 50, marginLeft: 5 }}
                source={require('../assets/dislike.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress ={this.dislikecount}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 100,
                }}
                source={require('../assets/like.jpg')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
