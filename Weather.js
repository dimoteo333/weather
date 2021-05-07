import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";


const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#2c3e50", "#4ca1af"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#005c97", "#363795"]
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#000000", "#434343"]
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#2c3e50", "#3498db"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#e0eafc", "#cfdef3"]
    },
    Atmosphere: {
        iconName: "weather-fog",
        gradient: ["#ccccb2", "#757519"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#ff5f6d", "#ffc371"]
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#4ca1af", "#c4e0e5"]
    },
    Smoke: {
        iconName: "weather-cloudy",
        gradient: ["#304352", "#d7d2cc"]
    },
    Dust: {
        iconName: "weather-windy",
        gradient: ["#ba8b02", "#181818"]
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#4b79a1", "#283e51"]
    },
    Sand: {
        iconName: "weather-windy-variant",
        gradient: ["#d1913c", "#ffd194"]
    }, 
    Ash: {
        iconName: "weather-windy",
        gradient: ["#457fca", "#5691c8"]
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ["#1e3c72", "#2a5298"]
    },   
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#2980b9", "#2c3e50"]
    }
}

export default function Weather({ temp, condition }){
    return (
        <LinearGradient
        // Background Linear Gradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar hidden={false} barStyle="white-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName} 
                    color="white" 
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer} />
                <View>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.subtitle}>Subtitle</Text>
                </View>
        </LinearGradient>

    );

}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand", 
        "Ash",
        "Squall",   
        "Tornado"]).isRequired

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontWeight: "100",
        fontSize: 44,
        color: "white",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        fontSize: 24,
        color: "white",
    }
})