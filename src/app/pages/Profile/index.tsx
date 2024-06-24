import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Ionicons as Icon } from '@expo/vector-icons';

import Title from "@/components/Title";
import Line from "@/components/Line";
import { theme } from "@/theme";

const perfil = require('../../../assets/perfil.jpg')

export default function Profile() {

    return (
        <View style={styles.container}>

            <View style={styles.settings}>
                <TouchableOpacity>
                    <Icon name="settings-sharp" size={24} color={theme.colors.white} />
                </TouchableOpacity>
            </View>

            <View style={styles.containerImg}>
                <Image style={styles.img} resizeMode="contain" source={perfil} />

                <View>
                    <Text style={styles.id}>{`ID: 187790937`}</Text>
                    <Text style={styles.text}>D44ns</Text>

                    <View style={styles.containerTag}>
                        <Text style={styles.tag}>Verificado</Text>
                    </View>
                </View>
            </View>

            <Line />
        </View>
    )
}

