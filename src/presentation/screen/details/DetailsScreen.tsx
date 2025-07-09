import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { RootStackParams } from '../../navigation/Navigation';

import {  Text, View } from 'react-native';
import { useMovie } from '../../hook/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';


interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;

    const {isLoading, movie} = useMovie( movieId);

    if ( isLoading ) {
        return <Text>Loading</Text>
    }

    return (
        <View>
            <MovieHeader originalTitle={movie!.originalTitle}
            title={movie!.title}
            poster={movie!.poster}
            />
        </View>
    )
}