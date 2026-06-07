import { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

interface Props {
    width: number | `${number}%`;
    height: number;
    borderRadius?: number;
}

export function Skeleton({ width, height, borderRadius = 8 }: Props) {
    const { colors } = useTheme();
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const opacity = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.3, 0.7],
    });

    return (
        <View
            style={{
                width,
                height,
                borderRadius,
                backgroundColor: colors.bgSubtle,
                overflow: 'hidden',
            }}
        >
            <Animated.View
                style={[
                    StyleSheet.absoluteFill,
                    {
                        backgroundColor: colors.bgElevated,
                        opacity,
                    },
                ]}
            />
        </View>
    );
}
