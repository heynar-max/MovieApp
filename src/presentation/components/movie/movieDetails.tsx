import { StyleSheet, Text, View } from "react-native";
import { FullMovie } from "../../../core/entities/movie.entity";
import { FlatList } from "react-native-gesture-handler";
import { Formatter } from "../../../config/helpers/formatter";
import { Cast } from "../../../core/entities/cast.entity";
import { CastActor } from "../cast/CastActor";


interface Props {
    movie: FullMovie;
    cast: Cast[]
}

export const MovieDetails = ({movie, cast}: Props) => {
        return (
        <>
        <View style={styles.container}>
            <View style={styles.row}>
            <Text>{movie.rating}</Text>
            <Text style={styles.genres}>- {movie.genres.join(", ")}</Text>
            </View>

            <Text style={styles.sectionTitle}>Historia</Text>
            <Text style={styles.description}>{movie.description}</Text>

            <Text style={styles.sectionTitle}>Presupuesto</Text>
            <Text style={styles.budget}>{Formatter.currency(movie.budget)}</Text>
        </View>

        {/* Casting */}
        <View style={styles.castContainer}>
            <Text style={styles.sectionTitleWithMargin}>Actores</Text>

            <FlatList
            data={cast}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <CastActor actor={item} />}
            />
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    row: {
        flexDirection: "row",
    },
    genres: {
        marginLeft: 5,
    },
    sectionTitle: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: "bold",
    },
    sectionTitleWithMargin: {
        fontSize: 23,
        marginVertical: 10,
        fontWeight: "bold",
        marginHorizontal: 20,
    },
    description: {
        fontSize: 16,
    },
    budget: {
        fontSize: 18,
    },
    castContainer: {
        marginTop: 10,
        marginBottom: 50,
    },
});