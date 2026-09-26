import { LinearGradient } from 'expo-linear-gradient';
import { Stack, router } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DateTimeField } from '../components/DateTimeField';
import { SelectableCard } from '../components/SelectableCard';
import { ServerSelect } from '../components/ServerSelect';

const categories = [
    {id: 1, tipo: 'Ranqueada', image: require('../../assets/images/ranked.png')},
    {id: 2, tipo: 'Duelo 1x1', image: require('../../assets/images/duel.png')},
    {id: 3, tipo: 'Diversão', image: require('../../assets/images/fun.png')},
    {id: 4},
]

export default function Match() {
    const insets = useSafeAreaInsets()

    const [category, setCategory] = useState<number | null>(null)
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')
    const [description, setDescription] = useState('')

    return (
        <LinearGradient 
            colors={['#0E1647', '#0A1033']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={[styles.header, {paddingTop: insets.top}]}>
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                        <Image source={require('../../assets/images/arrow.png')} style={styles.backArrow}></Image>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Agendar partida</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View>
                    <Text style={[styles.sectionTitle, styles.horizontalPadding]}>Categoria</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsScroll} contentContainerStyle={styles.cardsContent}>
                        {categories.map((c) => (
                            <SelectableCard
                                key={c.id}
                                tipo={c.tipo}
                                image={c.image}
                                selected={category === c.id}
                                onPress={() => setCategory(c.id)}
                            />
                        ))}
                    </ScrollView>
                </View>

                <ServerSelect />

                <View style={styles.dateRow}>
                    <DateTimeField title="Dia e mês" separator="/" first={day} second={month} onChangeFirst={setDay} onChangeSecond={setMonth} />
                    <DateTimeField title="Hora e minuto" separator=":" first={hour} second={minute} onChangeFirst={setHour} onChangeSecond={setMinute} />
                </View>

                <View style={styles.horizontalPadding}>
                    <View style={styles.descriptionHeader}>
                        <Text style={styles.sectionTitle}>Descrição</Text>
                        <Text style={styles.descriptionMax}>Max 100 caracteres</Text>
                    </View>
                    <TextInput style={styles.descriptionInput}
                        value={description}
                        onChangeText={setDescription}
                        maxLength={100}
                        multiline
                        textAlignVertical="top" />
                </View>
            </View>

            <TouchableOpacity style={[styles.scheduleButton, {marginBottom: insets.bottom + 16}]}>
                <Text style={styles.scheduleText}>Agendar</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: '#1D2766',
        paddingBottom: 24,
    },

    headerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 24,
    },

    backButton: {
        position: 'absolute',
        left: 20,
        top: 24,
        bottom: 0,
        justifyContent: 'center',
    },

    backArrow: {
        width: 16,
        height: 16,
    },

    headerTitle: {
        fontWeight: 700,
        fontSize: 20,
        color: '#DDE3F0'
    },

    content: {
        flex: 1,
        gap: 32,
        paddingTop: 32,
    },

    horizontalPadding: {
        paddingHorizontal: 24,
    },

    sectionTitle: {
        color: '#DDE3F0',
        fontSize: 18,
        fontWeight: 700,
    },

    cardsScroll: {
        flexGrow: 0,
        marginTop: 16,
    },

    cardsContent: {
        gap: 8,
        paddingHorizontal: 24,
    },

    dateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },

    descriptionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },

    descriptionMax: {
        fontWeight: 400,
        fontSize: 13,
        color: '#ABB1CC'
    },

    descriptionInput: {
        borderRadius: 8,
        borderColor: '#243189',
        borderWidth: 1,
        backgroundColor: '#1D2766',
        height: 100,
        padding: 12,
        color: '#DDE3F0',
    },

    scheduleButton: {
        borderRadius: 8,
        backgroundColor: '#E51C44',
        height: 56,
        marginHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },

    scheduleText: {
        fontWeight: 500,
        fontSize: 15,
        color: '#DDE3F0'
    },
})
