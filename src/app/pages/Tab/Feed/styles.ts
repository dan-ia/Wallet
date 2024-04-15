import { theme } from "@/theme"
import { StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.dark[700]
    },
    containerButton: {
        position: 'absolute',
        backgroundColor: theme.colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        top: 145,
        right: 15,
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