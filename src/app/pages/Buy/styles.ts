import { StyleSheet } from 'react-native';

import { theme } from '../../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        backgroundColor: theme.colors.dark[700],
        // justifyContent: 'center',

    },
    ContainerInput: {
        width: '100%',
        alignItems: 'center',

    },

    text: {
        paddingTop: 54,
        color: 'white',
        fontSize: 22,
        marginBottom: 20,
    },

    input: {
        width: '95%',
        backgroundColor: theme.colors.dark[600],
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        color: theme.colors.white,
        fontSize: 16,
    }
})