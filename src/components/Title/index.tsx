import { View, Text, } from "react-native";

import { styles } from "./styles";

import { TitleProps } from "@/components/Title/Title";

export default function Title({ text }: TitleProps) {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.title}>{text}</Text>
            </View>

        </View>
    )
}
