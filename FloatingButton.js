import * as React from 'react';
import { StyleSheet, Text,View, Dimensions, Animated, TouchableWithoutFeedback } from 'react-native';
import {AntDesign, Entypo} from "@expo/vector-icons"
export default class FloatingButton extends React.Component{
    render(){
      return(
        <View style={[styles.container, this.props.style]}>
          <TouchableWithoutFeedback>
            <Animated.View style = {[styles.button,styles.menu]}>
            <AntDesign name = "plus" size={24} />
            </Animated.View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <Animated.View style = {[styles.button,styles.menu]}>
            <Entypo name = 'compass' size={24} />
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      position: 'absolute',
    },
    button:{
      position: "absolute",
      width: 60,
      height: 60,
      borderRadius:60/2,
       alignItems:"center",
       justifyContent:"center",
       shadowRadius: 10,
       shadowColor: "#FFF",
       shadowOpacity: 1,
       shadowOffset:{height:10}
    },
    menu:{
      backgroundColor: "#FFFFFF"
    }
  });