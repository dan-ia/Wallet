import { Pressable, Text, View } from "react-native"
import { PropsButton } from "./ButtonFastBuy";

export default function ButtonFastBuy({ title, enviar }: PropsButton) {


    return (
        <View>
            <Pressable onPress={() => enviar}>
                <Text>{title}</Text>
            </Pressable>
        </View>

    )
} 