import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    containeye: {
        flexDirection: 'row',
        gap:10,
    },
    header: {
        fontSize: 15,
        color: theme.colors.white,
    },
    containerPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    price: {
        fontSize: 40,
        color: theme.colors.white,
        // fontWeight: 'bold',
    },
    pnls: {
        paddingTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    PNL: {
        fontSize: 12,
        color: theme.colors.dark[500]
    },
    PNLN: {
        fontSize: 12,
        color: theme.colors.green
    },
    containerButton: {
        backgroundColor: theme.colors.yellow,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    button: {
        width: 120,
        height: 40,
        paddingHorizontal: 20,
        paddingVertical: 5,
        textAlign: 'center',
        paddingTop: 8,
        fontSize: 20,
        color: theme.colors.black,
    },
})