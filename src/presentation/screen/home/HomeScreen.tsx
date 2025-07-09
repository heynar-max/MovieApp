import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useMovies } from '../../hook/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { PosterCarousel } from '../../components/movies/PosterCarousel'
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel'
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader'

export const HomeScreen = () => {

    // para que la pagina top quede acorde a la pantalla no tan arriba 
    const { top } = useSafeAreaInsets();

    const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

    if (isLoading) {
        return <FullScreenLoader/>
    }
    
    return (
        <ScrollView>
            <View style={[styles.container, { marginTop: top + 20 }]}>

                {/* principal  */}
                <PosterCarousel movies={ nowPlaying }/>

                {/* populares  */}
                <HorizontalCarousel 
                    movies={popular} 
                    title='Populares'
                    loadNextPage={ popularNextPage }
                    />

                {/* top Rated  */}
                <HorizontalCarousel movies={topRated} title='Mejor Calificadas'/>

                {/* populares  */}
                <HorizontalCarousel movies={upcoming} title='Próximanente'/>

            </View>
        </ScrollView>
        )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 30
    }
});
