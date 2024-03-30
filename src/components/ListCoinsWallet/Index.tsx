import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { theme } from '@/theme';
import { styles } from './styles';

import Line from '@/components/Line';
import { CoinsPropsWallet } from '@/components/ListCoinsWallet/ListCoinWallet';


export function ListCoinsWallet({ title, ico, coins, ihave, acronym, PNL, PNLN, ...props }: CoinsPropsWallet) {

    const isNegative = PNLN && PNLN.startsWith('-');
    const isPositive = PNLN && PNLN.startsWith('+');

    if (parseFloat(ihave) > 0) {

        return (

            <View style={styles.container} {...props}>
                <TouchableOpacity
                    activeOpacity={0.4}>
                    <View style={styles.container_item}>
                        <Image style={styles.img} source={ico} />

                        <View style={styles.containerCoin}>
                            <Text style={styles.title}>{acronym}</Text>
                            <Text style={styles.acronym}>{title}</Text>
                            <Text style={styles.PNL}>{PNL}</Text>
                        </View>

                        <View style={styles.containerPrice}>
                            <Text style={styles.price}>{coins}</Text>
                            <Text style={styles.acronym}>{`$ ${parseFloat(ihave).toFixed(2)}`}</Text>
                            <Text style={[styles.PNLN, { color: isNegative ? theme.colors.red : isPositive ? theme.colors.green : theme.colors.dark[500]}]}>{PNLN}</Text>
                        </View>
                    </View >
                </TouchableOpacity>

                <Line></Line>

            </View>

        );
    }
}

