import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.dark[700]
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        gap: 10,
        // paddingVertical: 20,
    },
    box: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 190,
        height: 200,
        backgroundColor: theme.colors.dark[600],
        padding: 20,
        borderRadius: 30,
    },
    title: {
        color: theme.colors.white,
        fontSize: 23,

    },
    description: {
        color: theme.colors.dark[500],
        fontSize: 18,
        textAlign: 'center',
    },
})