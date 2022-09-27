import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Animated, TouchableWithoutFeedback } from 'react-native';
import {AntDesign, Entypo} from "@expo/vector-icons"
import FloatingButton from './FloatingButton';
import {useColorScheme} from 'react-native';
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';
import { useTheme } from '@react-navigation/native';
import { BottomNavigation } from '@material-ui/core';
import BottomNavigator from './tabs';
const mapDarkStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];

const mapStandardStyle = [
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
];

const Toggle = (props) => {
  const { setTheme, theme } = React.useContext(ThemeContext);

  return (
    <TouchableOpacity onPress={() => setTheme(theme === DefaultTheme ? DarkTheme : DefaultTheme)}>
      
    </TouchableOpacity>
  )
}

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const toggleTheme = ()=>{
    setIsDarkTheme(!isDarkTheme);
  }
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      provider = {PROVIDER_GOOGLE}
      customMapStyle = {theme.dark ? mapDarkStyle : mapStandardStyle}
        initialRegion={{
      latitude: 50.09314472807997,
      longitude: 14.446695299687166,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.002421,
    }}
    >
    <Marker
    coordinate={{
      latitude: 50.09314472807997,
      longitude: 14.446695299687166,
      //50.09314472807997, 14.446695299687166
    }}
    pincolor="black"/>
    </MapView>
    <FloatingButton style = {{top: 150, right:50}} value = {isDarkTheme}>

    <TouchableWithoutFeedback onPress={() => {toggleTheme()}}/>
    </FloatingButton>
    <FloatingButton style = {{top: 230, right:50}}  />
    <BottomNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});