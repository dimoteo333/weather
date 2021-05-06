import React from 'react';
import {Alert} from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "4195e192485005e28a9bf0ad23ffae83";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${API_KEY}`
    );
    console.log(data);
  };
  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      // Send to API and get weather
    } catch (error) {
      Alert.alert("Can't find you.","So sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

