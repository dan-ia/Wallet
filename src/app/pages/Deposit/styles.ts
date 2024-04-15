import { StyleSheet } from 'react-native';

import { theme } from '../../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.dark[600],
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 40,
    }
})