import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 10,
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
        color: theme.colors.dark[500],
        fontWeight: 'bold',
    },

})