import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { theme } from '@/theme';
import { CoinsPropsHome } from '@/components/ListAllCoins/ListCoinHome';


export function ListAllCoins({ title, ico, acronym, valuation, price, ...props }: CoinsPropsHome) {


    const isNegative = valuation && valuation.startsWith('-');
    const isPositive = valuation && valuation.startsWith('+');

    return (

        <View style={styles.container} {...props}>
            <TouchableOpacity
                activeOpacity={0.4}>
                <View style={styles.container_item}>
                    <Image style={styles.img} source={ico} />

                    <View style={styles.containerCoin}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.acronym}>{acronym}</Text>
                    </View>

                    <View style={styles.containerPrice}>
                        <Text style={[styles.valuation, { color: isNegative ? theme.colors.red : isPositive ? theme.colors.green : '#6C6C6C' }]}>
                            {valuation}
                        </Text>
                        <Text style={styles.price}>{`$ ${price}`}</Text>
                    </View>
                </View >
            </TouchableOpacity>

        </View>

    );

}