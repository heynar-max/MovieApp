import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/home/HomeScreen';
import { DetailsScreen } from '../screen/details/DetailsScreen';

export type RootStackParams = {
    Home: undefined;
    Details: { movieId: number}
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}