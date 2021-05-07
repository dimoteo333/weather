import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Font } from "expo-font";

Font.loadAsync({
    BMDOHYEON: require('./assets/fonts/BMDOHYEON.ttf')
  });

const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#2c3e50", "#4ca1af"],
        title: "가시거리가 짧아요",
        subtitle: "신비로운 풍경을 볼 수도"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#005c97", "#363795"],
        title: "구름이 많이 꼈어요",
        subtitle: "비가 올지도 몰라요"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#000000", "#434343"],
        title: "비바람과 함께 번개",
        subtitle: "외출은 조심하세요"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#2c3e50", "#3498db"],
        title: "비가 조금씩 내려요",
        subtitle: "우산을 꼭 챙길 것"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#e0eafc", "#cfdef3"],
        title: "하늘에서 눈이 내려옵니다",
        subtitle: "제설을 준비해야 할지도"
    },
    Atmosphere: {
        iconName: "weather-fog",
        gradient: ["#ccccb2", "#757519"],
        title: "날씨",
        subtitle: "날씨 정보"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#ff5f6d", "#ffc371"],
        title: "구름 한 점 없이 맑음",
        subtitle: "선크림을 꼭 바르세요"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#4ca1af", "#c4e0e5"],
        title: "이슬비가 내리는 중",
        subtitle: "곧 그칠지도 몰라요"
    },
    Smoke: {
        iconName: "weather-cloudy",
        gradient: ["#304352", "#d7d2cc"],
        title: "가시거리가 짧아요",
        subtitle: "외출 시 주의"
    },
    Dust: {
        iconName: "weather-windy",
        gradient: ["#ba8b02", "#181818"],
        title: "먼지가 조금 많아요",
        subtitle: "마스크를 끼는 편이 좋아요"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#4b79a1", "#283e51"],
        title: "구름이 많이 꼈어요",
        subtitle: "가시거리가 짧으니 주의"
    },
    Sand: {
        iconName: "weather-windy-variant",
        gradient: ["#d1913c", "#ffd194"],
        title: "황사가 오고 있어요",
        subtitle: "외출 시에는 마스크를 꼭"
    }, 
    Ash: {
        iconName: "weather-windy",
        gradient: ["#457fca", "#5691c8"],
        title: "날씨",
        subtitle: "날씨정보"
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ["#1e3c72", "#2a5298"],
        title: "비가 몰아치는 중",
        subtitle: "바깥 외출은 자제"
    },   
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#2980b9", "#2c3e50"],
        title: "태풍이 몰아치고 있어요",
        subtitle: "외출은 위험해요"
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
            <View style={{...styles.halfContainer, ...styles.textContainer}} >
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
        color: "white"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})