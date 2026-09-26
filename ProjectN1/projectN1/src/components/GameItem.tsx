import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type GameItemProps = {
  image: ImageSourcePropType;
  title: string;
  date: string;
  type: string;
  host: boolean;
  onPress?: () => void;
};

export function GameItem({ image, title, date, type, host, onPress }: GameItemProps) {
  return (
    <TouchableOpacity style={styles.gameContent} onPress={onPress} disabled={!onPress}>
      <Image source={image} style={styles.gameImage}></Image>

      <View style={{flex: 1, gap: 12}}>
        <View style={styles.gameRow}>
          <Text style={styles.matchesTitle}>{title}</Text>
          <Text style={styles.matchesCount}>{type}</Text>
        </View>
        <View style={styles.gameRow}>
          <View style={{flexDirection: 'row', gap: 6}}>
            <Image source={require('../../assets/images/calendar.png')} style={styles.gameCalendar}/>
            <Text style={styles.gameDate}>{date}</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 6}}>
            <Image source={require('../../assets/images/person.png')} style={[styles.gamePerson, {tintColor: host ? '#E51C44' : '#34C759'}]}></Image>
            <Text style={{ color: host ? '#E51C44' : '#34C759' }}>
              {host ? 'Anfitrião' : 'Visitante'}
            </Text>
          </View>
        </View>
        <View style={styles.gameDivisor}/>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  matchesTitle: {
    color: '#DDE3F0',
    fontWeight: 700,
    fontSize: 18,
  },

  matchesCount: {
    color: '#ABB1CC',
    fontSize: 13,
    fontWeight: 400,
  },

  gameContent: {
    flexDirection: 'row',
    flex: 1,
  },

  gameImage: {
    width: 64,
    height: 68,
    marginRight: 20,
    marginLeft: 24,
  },

  gameRow: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    marginRight: 24
  },

  gameCalendar: {
    width: 13,
    height: 13
  },

  gamePerson: {
    width: 10,
    height: 14,
  },

  gameDate: {
    color: '#DDE3F0',
    fontSize: 13,
    fontWeight: 500,
  },

  gameDivisor: {
    backgroundColor: '#1D2766',
    height: 1,
  },
});
