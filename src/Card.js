import React, { useEffect } from 'react'
import { Text, Dimensions, TouchableOpacity } from "react-native";
import CardFlip from "react-native-card-flip";
const { height } = Dimensions.get('window');

export default function Card({ item, index }) {
    const color = [
        "#74b9ff",
        "#a29bfe",
        "#00b894",
        "#00cec9",
        "#0984e3",
        "#6c5ce7",
        "#b2bec3",
        "#fab1a0",
        "#ff7675",
        "#fd79a8",
        "#636e72",
        "#fdcb6e",
        "#e17055",
        "#d63031",
        "#e84393",
    ]

    return (
        <Flip color={color[(index + 15) % 15]} item={item} index={index} />
    )
}

class Flip extends React.Component {
    render() {
        const { color, item, index } = this.props;
        return (
            <CardFlip ref={(card) => this.card = card} style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <TouchableOpacity style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: color,
                    height: height / 2 + 30,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    width: "100%"
                }}
                    activeOpacity={1}
                    onPress={() => this.card.flip()}
                >
                    <Text style={{ color: "#fff", textAlign: "center", textTransform: "uppercase", fontSize: 22 }}>{item.Word}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 30,
                    paddingVertical: 40,
                    backgroundColor: color,
                    height: height / 2 + 30,
                    borderRadius: 10
                }}
                    activeOpacity={1}
                    onPress={() => this.card.flip()}
                >
                    <Text style={{ color: "#fff", textAlign: "center", fontSize: 18, marginVertical: 14 }}>{item.Word}{item.Type && " (" + item.Type + ")"}</Text>
                    <Text style={{ color: "#fff", textAlign: "center", marginVertical: 10 }}>{"/ "}{item.Pronounce}{" /"}</Text>
                    <Text style={{ color: "#fff", textAlign: "center", marginVertical: 10 }}>{item.Meaning}</Text>
                </TouchableOpacity>
            </CardFlip>
        )
    }

}