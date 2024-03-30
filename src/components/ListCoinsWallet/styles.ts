
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
        alignItems: 'center',
    },
    img: {
        width: 27,
        height: 27,
        borderRadius: 50,
        backgroundColor: theme.colors.white,
        marginBottom: 25,
    },
    containerCoin: {
        flex: 1,
        paddingHorizontal: 10,
    },

    title: {
        fontSize: 20,
        color: theme.colors.white,
    },
    acronym: {
        fontSize: 15,
        color: theme.colors.dark[500]
    },
    PNL: {
        paddingTop: 10,
        fontSize: 12,
        color: theme.colors.dark[500]
    },
    PNLN: {
        paddingTop: 5,
        fontSize: 12,
        color: theme.colors.dark[500]
    },

    containerPrice: {
        alignItems: 'flex-end'
    },

    price: {
        paddingTop: 10,
        paddingBottom: 5,
        fontSize: 20,
        color: '#fff',

    },
    valuation: {
        fontWeight: 'bold',
        fontSize: 20,
    },

})