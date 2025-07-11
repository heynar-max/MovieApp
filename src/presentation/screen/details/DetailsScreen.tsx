import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../../navigation/Navigation';

import { MovieHeader } from '../../components/movie/MovieHeader';

import { ScrollView } from 'react-native-gesture-handler';
import { useMovie } from '../../hook/useMovie';
import { MovieDetails } from '../../components/movie/movieDetails';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';


interface Props extends StackScreenProps<RootStackParams, 'Details'>{};


export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;
    // const { movieId } = useRoute().params;
    const { isLoading, movie, cast = [] } = useMovie( movieId );

    if (isLoading) {
        return <FullScreenLoader/>
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