import { View, Text, ScrollView, TextInput } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme/colors";
import Title from "@/components/Title";

import { ListAllCoins } from "@/components/ListAllCoins/Index";
import { COINS } from "../../../utils/dataCoins"


export default function Buy() {
    return (
        <View style={styles.container}>

            <View style={styles.ContainerInput}>
                <Text style={styles.text}>Selec Cripto</Text>

                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.dark[500]}
                    placeholder="Pesquisar"
                >
                </TextInput>
            </View>

            <Title text="Principais Pesquisas" />

            <ScrollView>
                <>
                    {COINS.map((coin) => (

                        <ListAllCoins
                            key={coin.id}
                            title={coin.title}
                            ico={coin.ico}
                            acronym={coin.acronym}
                            price={coin.price}
                            valuation="" id="" />
                    ))}
                </>
            </ScrollView>


        </View>


    )
}

