import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { RootStackParams } from '../../navigation/Navigation';

import { Text, View } from 'react-native';


interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;



    return (
        <View>
            <Text>Detail screen</Text>
        </View>
    )
}