import { View, Image, TouchableOpacity, Linking } from "react-native";

import Line from "@/components/Line";
import { styles } from "./styles";

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>

                <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/d44ns/') }}>
                    <Image style={styles.logo} source={require('../../assets/images/white.png')}></Image>
                </TouchableOpacity>
            
                    <TouchableOpacity >
                        <Image style={styles.avatar} source={require('../../assets/images/perfil.jpg')}></Image>
                    </TouchableOpacity>
            </View>
            <Line></Line>
        </View>
    )
}



