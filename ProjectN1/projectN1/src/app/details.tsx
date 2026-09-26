import { LinearGradient } from 'expo-linear-gradient';
import { Stack, router } from 'expo-router';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PlayerItem } from '../components/PlayerItem';

const players = [
    {id: 1, image: require('../../assets/images/playerone.png'), name: 'Tiago Luchtenberg', available: true},
    {id: 2, image: require('../../assets/images/playerTwo.png'), name: 'Rodrigo Gonçalves', available: false},
    {id: 3, image: require('../../assets/images/playerthree.png'), name: 'Diego Fernandes', available: false},
]

export default function Details() {
    const insets = useSafeAreaInsets()

    return (
        <LinearGradient
            colors={['#0E1647', '#0A1033']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={[styles.container, {paddingTop: insets.top}]}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={require('../../assets/images/arrow.png')} style={styles.icon}></Image>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Detalhes</Text>
                <Image source={require('../../assets/images/share.png')} style={styles.icon}></Image>
            </View>

            <ImageBackground source={require('../../assets/images/detailsbckg.png')} style={styles.banner}>
                <Text style={styles.bannerTitle}>Lendários</Text>
                <Text style={styles.bannerText}>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
            </ImageBackground>

            <View style={styles.playersHeader}>
                <Text style={styles.playersTitle}>Jogadores</Text>
                <Text style={styles.playersCount}>Total 3</Text>
            </View>

            <View style={styles.playersList}>
                {players.map((player, index) => (
                    <PlayerItem
                        key={player.id}
                        image={player.image}
                        name={player.name}
                        available={player.available}
                        last={index === players.length - 1}
                    />
                ))}
            </View>

            <View style={[styles.joinButton, {marginBottom: insets.bottom + 16}]}>
                <TouchableOpacity style={styles.discordArea}>
                    <Image source={require('../../assets/images/discord.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.joinArea}>
                    <Text style={styles.joinText}>Entrar na partida</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 20,
    },

    icon: {
        width: 16,
        height: 16,
    },

    headerTitle: {
        fontWeight: 700,
        fontSize: 20,
        color: '#DDE3F0',
    },

    banner: {
        height: 260,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        paddingBottom: 30,
        gap: 12,
    },

    bannerTitle: {
        color: '#DDE3F0',
        fontSize: 28,
        fontWeight: 700,
    },

    bannerText: {
        color: '#DDE3F0',
        fontSize: 15,
        lineHeight: 22,
    },

    playersHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 24,
        marginTop: 32,
        marginBottom: 24,
    },

    playersTitle: {
        color: '#DDE3F0',
        fontSize: 18,
        fontWeight: 700,
    },

    playersCount: {
        color: '#ABB1CC',
        fontSize: 13,
    },

    playersList: {
        flex: 1,
        paddingHorizontal: 24,
    },

    joinButton: {
        flexDirection: 'row',
        marginHorizontal: 24,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#E51C44',
        overflow: 'hidden',
    },

    discordArea: {
        width: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#991F36',
    },

    joinArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    joinText: {
        color: '#DDE3F0',
        fontSize: 15,
        fontWeight: 500,
    },
});
