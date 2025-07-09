import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../../navigation/Navigation';

import { MovieHeader } from '../../components/movie/MovieHeader';

import { ScrollView } from 'react-native-gesture-handler';
import { useMovie } from '../../hook/useMovie';
import { Text } from 'react-native';
import { MovieDetails } from '../../components/movie/movieDetails';


interface Props extends StackScreenProps<RootStackParams, 'Details'>{};


export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;
    // const { movieId } = useRoute().params;
    const { isLoading, movie, cast = [] } = useMovie( movieId );

    if (isLoading) {
        return <Text>hola</Text>
    }

    return (
        <ScrollView>
        
        {/* Header */}
        <MovieHeader 
            originalTitle={ movie!.originalTitle} 
            title={ movie!.title}
            poster={ movie!.poster }
        />

        {/* Details */}
        <MovieDetails movie={ movie! } cast={cast} />

        </ScrollView>
    )
}