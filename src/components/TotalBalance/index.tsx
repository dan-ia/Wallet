import { useState } from "react";
import { View, Text, Pressable, } from "react-native";

import { useNavigation } from '@react-navigation/native'

import { Octicons } from '@expo/vector-icons';
import { styles } from "./styles";

import { TotalBalanceProps } from "@/components/TotalBalance/TotalBalance";


export default function TotalBalance({ price, button, pnl, pnln }: TotalBalanceProps) {

    const [ChangeIco, setChangeIco] = useState('eye');
    const [ChangeValue, setChangeValue] = useState(price)

    function ToHide() {
        return (
            setChangeIco('eye-closed'),
            setChangeValue('******')
        )
    }

    const { navigate } = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.containeye}>
                <Text style={styles.header}>Total Balance</Text>

                <Pressable
                    onPress={() => ToHide()}
                >
                    <Octicons name={ChangeIco} size={20} color="white" />
                </Pressable>
            </View>


            <View style={styles.containerPrice}>
                <Text style={styles.price}>{ChangeValue}</Text>

                <Pressable
                    onPress={() => navigate('Transfer')}
                    style={styles.containerButton}
                >
                    <Text style={styles.button}>{button}</Text>
                </Pressable>


            </View>

            <View style={styles.pnls}>
                <Text style={styles.PNL}>{pnl}</Text>
                <Text style={styles.PNLN}>{pnln}</Text>
            </View>


        </View>
    )
}

