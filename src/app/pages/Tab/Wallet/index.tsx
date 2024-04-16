import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";


import Header from "@/components/Header";
import Title from "@/components/Title";
import { COINS } from "@/utils/dataCoins";
import TotalBalance from "@/components/TotalBalance";
import { ListMyCoins } from "@/components/ListMyCoins/Index";


export default function Wallet() {
    return (
        <View style={styles.container}>
            <Header />

            <TotalBalance price={'$1303.24'} button='Buy' pnl="PNL De Hoje:" pnln="+$109,94(+13.0%)" />

            <Title text="Wallet" />

            <ScrollView>
                <>
                    {COINS.map((coin) => (
                        <ListMyCoins
                            key={coin.title}
                            title={coin.title}
                            ico={coin.ico}
                            acronym={coin.acronym}
                            PNL={coin.PNL}
                            PNLN={coin.PNLN}
                            ihave={coin.ihave}
                            coins={coin.coins} id=" " price=" " />
                    ))}
                </>
            </ScrollView>
        </View>
    )
}

