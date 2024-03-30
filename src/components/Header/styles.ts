import { StyleSheet, Platform, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 55,
        paddingHorizontal: 15,
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
    },
    logo: {
        width: 40,
        height: 40,
    },

    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50, 
    },


})