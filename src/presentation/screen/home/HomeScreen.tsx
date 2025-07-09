import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useMovies } from '../../hook/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { PosterCarousel } from '../../components/movies/PosterCarousel'

export const HomeScreen = () => {

    // para que la pagina top quede acorde a la pantalla no tan arriba 
    const { top } = useSafeAreaInsets();

    const {isLoading, nowPlaying} = useMovies();
    
    return (
        <ScrollView>
            <View style={[styles.container, { marginTop: top + 20 }]}>
                <PosterCarousel movies={ nowPlaying }/>
            </View>
        </ScrollView>
        )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 30
    }
});
