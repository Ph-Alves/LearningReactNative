import { LinearGradient } from 'expo-linear-gradient';
import { Stack, router } from 'expo-router';
import { ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CategoryCard } from '../components/CategoryCard';
import { GameItem } from '../components/GameItem';
import { MatchesHeader } from '../components/MatchesHeader';
import { ProfileHeader } from '../components/ProfileHeader';

const cards = [
    {id: 1, tipo: 'Ranqueada', image: require('../../assets/images/ranked.png')},
    {id: 2, tipo: 'Duelo 1x1', image: require('../../assets/images/duel.png')},
    {id: 3, tipo: 'Diversão', image: require('../../assets/images/fun.png')},
    {id: 4},
]

const games = [
    {id: 1, image: require('../../assets/images/league.png'), title: 'Lendários', date: '18/06 às 21:00h', type: 'Ranqueada', host: true},
    {id: 2, image: require('../../assets/images/reddead.png'), title: 'Yeah, boy', date: '23/06 às 19:00h', type: 'Diversão', host: false},
    {id: 3, image: require('../../assets/images/csgo.png'), title: 'Rumo ao topo', date: '20/06 às 09:00h', type: '1x1', host: true},
    {id: 4, image: require('../../assets/images/apex.png'), title: 'Bora queimar tudo', date: '20/06 às 14:20h', type: 'Ranqueada', host: true},
    {id: 5, image: require('../../assets/images/valorant.png'), title: 'Valorosos', date: '18/06 às 21:00h', type: 'Diversão', host: true},
]

export default function home() {

    const insets = useSafeAreaInsets()

  return (
    <LinearGradient 
        colors={['#0E1647', '#0A1033']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[styles.container, {paddingTop: insets.top}]}>
        <Stack.Screen options={{ headerShown: false }} />

        <ProfileHeader onAddPress={() => { router.push('/match') }} />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexGrow: 0}} contentContainerStyle={ styles.cardsScroll}>
            {cards.map((card) => (
                <CategoryCard key={card.id} tipo={card.tipo} image={card.image} />
            ))}
        </ScrollView>

        <MatchesHeader />

        <ScrollView style={{flexGrow: 0}} contentContainerStyle={styles.gamesContainer}>
            {games.map((game) => (
                <GameItem
                    key={game.id}
                    image={game.image}
                    title={game.title}
                    date={game.date}
                    type={game.type}
                    host={game.host}
                    onPress={game.id === 1 ? () => router.push('/details') : undefined}
                />
            ))}
        </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },

    cardsScroll: {
        flexDirection: 'row', 
        gap: 8, 
        marginLeft: 24,
    },

    gamesContainer: {
        gap: 33,
    },
});
