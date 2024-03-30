import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

export const styles = StyleSheet.create({
    line: {
        borderColor: theme.colors.dark[600],
        borderBottomWidth: 1,

        width: '100%',
        paddingTop: 10,
    }
})