import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { useState, useRef } from 'react';
import { createStyles } from './RaceCard.styles';
import { formatRaceDate } from '@utils/formatDate';
import { useCountdown } from '@hooks/useCountdown';
import { useTheme } from '../../context/ThemeContext';
import type { Race } from '@f1types/f1';
import { SessionRow } from '@components/SessionRow/SessionRow';

interface Props {
    race: Race;
}

export function RaceCard({ race }: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const countdown = useCountdown(race.date, race.time);
    const [expanded, setExpanded] = useState(false);
    const animationHeight = useRef(new Animated.Value(0)).current;

    const toggleExpanded = () => {
        if (expanded) {
            Animated.timing(animationHeight, {
                toValue: 0,
                duration: 250,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(animationHeight, {
                toValue: 1,
                duration: 250,
                useNativeDriver: false,
            }).start();
        }
        setExpanded(!expanded);
    };

    const chevronRotation = animationHeight.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={toggleExpanded}>
                <Text style={styles.label}>NEXT RACE</Text>
                <View style={styles.titleRow}>
                    <Text style={styles.raceName}>{race.raceName}</Text>
                    <Animated.Text
                        style={[styles.chevron, { transform: [{ rotate: chevronRotation }] }]}
                    >
                        ▼
                    </Animated.Text>
                </View>
                <Text style={styles.info}>
                    📍 {race.Circuit.Location.locality}, {race.Circuit.Location.country}
                </Text>
                <Text style={styles.info}>🗓 {formatRaceDate(race.date)}</Text>
                <View style={styles.countdownContainer}>
                    <Text style={styles.countdown}>⏱ {countdown}</Text>
                </View>
            </TouchableOpacity>

            {expanded && (
                <Animated.View
                    style={[styles.sessions, { opacity: animationHeight }]}
                >
                    <View style={styles.sessionsDivider} />
                    {race.FirstPractice && (
                        <SessionRow label="FP1" date={race.FirstPractice.date} time={race.FirstPractice.time} />
                    )}
                    {race.SecondPractice && (
                        <SessionRow label="FP2" date={race.SecondPractice.date} time={race.SecondPractice.time} />
                    )}
                    {race.ThirdPractice && (
                        <SessionRow label="FP3" date={race.ThirdPractice.date} time={race.ThirdPractice.time} />
                    )}
                    {race.Sprint && (
                        <SessionRow label="Sprint" date={race.Sprint.date} time={race.Sprint.time} />
                    )}
                    {race.Qualifying && (
                        <SessionRow label="Qualifying" date={race.Qualifying.date} time={race.Qualifying.time} />
                    )}
                    <SessionRow label="🏁 Race" date={race.date} time={race.time} />
                </Animated.View>
            )}
        </View>
    );
}