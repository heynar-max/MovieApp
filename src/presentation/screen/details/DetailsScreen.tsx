import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { RootStackParams } from '../../navigation/Navigation';

import { Text, View } from 'react-native';
import { useMovie } from '../../hook/useMovie';


interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;

    const {} = useMovie( movieId);



    return (
        <View>
            <Text>Detail screen</Text>
        </View>
    )
}