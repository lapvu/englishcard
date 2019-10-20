import Carousel from 'react-native-snap-carousel';
import React, { useRef, useState, useEffect } from "react";
import { View, Dimensions } from "react-native";
import Card from "./Card";
import Tts from 'react-native-tts';
const { height, width } = Dimensions.get("window");

export default function MyCarousel({ state }) {
    const ref = useRef(null);
    const [id, setIndex] = useState(0);
    const playAudio = (index) => {
        Tts.speak(state[index].Word);
    }
    useEffect(() => {
        playAudio(0);
    }, [])

    return (
        <View style={{
            width: width - 20,
            height: height,
        }}>
            <Carousel
                ref={ref}
                data={state}
                renderItem={Card}
                sliderWidth={width - 20}
                itemWidth={width - 100}
                sliderHeight={height}
                itemHeight={height / 2 + 100}
                slideStyle={{
                    marginTop: height / 4 - 30
                }}
                onSnapToItem={index => playAudio(index)}
            />
        </View>
    );
}