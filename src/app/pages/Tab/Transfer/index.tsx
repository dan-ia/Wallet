import { View, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native'

import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles";

import Title from "@/components/Title";
import Header from "@/components/Header";


export default function Transfer() {

    const { navigate } = useNavigation()

    return (
        <View style={styles.container}>

            <Header />

            <Title text="Transfer" />

            <View style={styles.screen}>
                <Pressable onPress={() => navigate('Buy')} style={styles.box}>
                    <FontAwesome5 name="hand-holding-medical" size={35} color="#ffd500" />
                    <Text style={styles.title}>Buy</Text>
                    <Text style={styles.description}>Buy coins with BRL</Text>
                </Pressable>

                <Pressable onPress={() => navigate('Sell')} style={styles.box}>
                    <MaterialIcons name="clean-hands" size={45} color="#ffd500" />
                    <Text style={styles.title}>Sell</Text>
                    <Text style={styles.description}>Sell cripto to BRL</Text>
                </Pressable>

                <Pressable onPress={() => navigate('Convert')} style={styles.box}>
                    <MaterialIcons name="repeat" size={45} color="#ffd500" />
                    <Text style={styles.title}>Convert</Text>
                    <Text style={styles.description}>Exchange one coin for another with 0 fee</Text>
                </Pressable>

                <Pressable onPress={() => navigate('Deposit')} style={styles.box}>
                    <FontAwesome5 name="download" size={35} color="#ffd500" />
                    <Text style={styles.title}>Deposit</Text>
                    <Text style={styles.description}>Deposit with fiat and crypto currency</Text>
                </Pressable>

            </View>


        </View >



    )
}


