import { StyleSheet } from 'react-native';
import { fontSize } from '@config/theme';

export const styles = StyleSheet.create({
    badge: {
        width: 36,
        height: 36,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: fontSize.xs,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});