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
        gap: 16,
        marginHorizontal: 20,
        // paddingVertical: 20,
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 140,
        backgroundColor: theme.colors.dark[600],
        padding: 20,
        gap: 5,
        borderRadius: 16,
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