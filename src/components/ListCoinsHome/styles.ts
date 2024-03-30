
import { StyleSheet } from 'react-native';

import { theme } from '@/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 15,
         
    },
    container_item: {
        width: '100%',
        marginTop: 8,
        flexDirection: 'row',
        paddingBottom: 5,
        alignItems: 'center',
    },
    img: {
        width: 27,
        height: 27,
        borderRadius: 50,
        backgroundColor: theme.colors.white,
        
    },
    containerCoin: {
        flex: 1,
        paddingHorizontal: 10,
    },

    title: {
        fontSize:18,
        color: theme.colors.white,
    },
    acronym: {
        fontSize: 15,
        color: theme.colors.dark[500]
    },   

    containerPrice: {
        alignItems: 'flex-end'
    },

    price: {
        paddingBottom: 5,
        fontSize: 20,
        color: theme.colors.white

    },
    valuation: {
        fontWeight: 'bold',
        fontSize: 18,
        color: theme.colors.white
    },

})