import { StyleSheet } from 'react-native';

import { theme } from '../../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.dark[700],
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    settings: {
        position: 'absolute',
        top: 60,
        right: 10,
    },

    containerImg: {
        flexDirection: 'row',
        marginTop: 110,
        marginBottom: 10,
        marginLeft: 10,
        gap: 10,
    },
    id: {
        color: theme.colors.dark[500],
        fontSize: 18,
    },
    text: {
        color: theme.colors.white,
        fontSize: 22,
        fontWeight: 'bold',
    },
    containerTag: {
        backgroundColor: theme.colors.greens,
        marginTop: 10,
        borderRadius: 5,
    },
    tag: {
        color: theme.colors.green,
        fontSize: 18,
        padding: 4,
        textAlign: 'center',
    },
    img: {

        width: 64,
        height: 64,
        borderRadius: 10,

    }
})