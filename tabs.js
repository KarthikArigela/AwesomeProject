import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';


export default class BottomNavigator extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'grey'
            }}>

                <View style={{

                    position: 'absolute',
                    alignSelf: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: 35,
                    bottom: 35,
                    
                    zIndex: 10


                }}>

                    <TouchableWithoutFeedback onPress={this.toggleOpen}>
                        <View style={[styles.button, styles.actionBtn]}>

                            <Image style={{ width: 60, height: 40 }}
                                resizeMode="contain"
                                source={{ uri: 'http://simpleicon.com/wp-content/uploads/plus.png' }} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{

                    position: 'absolute',
                    backgroundColor: 'white',
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {

                        height: 3, width: 3
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25


                }}>

                    <View style={{


                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={() => { Alert.alert('click') }}>
                            <Image

                                style={{ width: 30, height: 30 }}

                                source={{ uri: 'http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png' }}

                                onPress={()=>{Alert.alert("")}}
                            >

                            </Image>

                        </TouchableOpacity>
                    </View>
                    
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center',marginStart:30
                    }}>

                        <TouchableOpacity
                            onPress={() => { Alert.alert("click") }}
                        >
                            <Image
                                style={{  width: 30, height: 30 }}
                                source={{ uri: 'http://simpleicon.com/wp-content/uploads/active-search.png' }}
                                onPress={() => { Alert.alert("click") }}
                            />
                       
                        </TouchableOpacity>
                    </View>

                        <View style={{
                             flexDirection: 'column', alignItems: 'center',justifyContent:'space-between',marginStart:80,
                        }}>

                            <TouchableOpacity
                                onPress={() => { Alert.alert("click") }}
                            >
                                <Image
                                    source={{ uri: 'http://simpleicon.com/wp-content/uploads/three.png' }}
                                    onPress={() => { Alert.alert("click") }}
                                    style={{ marginHorizontal: 1, width: 30, height: 30, marginTop:15 }}
                                    containerStyle={{ marginHorizontal: 16 }}
                                />
                       
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'column', alignItems: 'center',justifyContent:'flex-end',
                          
                        }}>
                            <TouchableOpacity
                                onPress={() => { Alert.alert("click") }}
                            >
                                <Image
                                    source={{ uri: 'http://simpleicon.com/wp-content/uploads/gear-8.png' }}

                                    style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                    containerStyle={{ marginHorizontal: 16 }}
                                />
                     
                            </TouchableOpacity>
                           
                        </View>
                </View>
            </View>
        );
    }

    
}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '',
        shadowOpacity: 0,
        shadowOffset: { x: 200, y: 0 },
        shadowRadius: 0,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 1000,
        top: 5,
        left: 200,
        shadowOpacity: 0,

    },
    actionBtn: {
        backgroundColor: '#1E90FF',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'

    }


});