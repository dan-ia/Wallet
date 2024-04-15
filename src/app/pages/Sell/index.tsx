import { View, Text, ScrollView, TextInput } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme/colors";
import Title from "@/components/Title";

import { COINS } from "@/utils/dataCoins";
import { ListMyCoins } from "@/components/ListMyCoins/Index";


export default function Sell() {
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
                        <ListMyCoins
                            key={coin.title}
                            title={coin.title}
                            ico={coin.ico}
                            acronym={coin.acronym}
                            ihave={coin.ihave}
                            coins={coin.coins}
                            PNL=""
                            PNLN=""
                            id=""
                            price="" />
                    ))}
                </>
            </ScrollView>


        </View>


    )
}