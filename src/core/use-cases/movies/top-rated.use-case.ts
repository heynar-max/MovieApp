import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMoviesResponse } from '../../../infrastruture/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastruture/mappers/movie.mappers';
import type { Movie } from '../../entities/movie.entity';



export const moviesTopRatedUseCase = async ( fetcher: HttpAdapter  ):Promise<Movie[]> => {
    try {

        const topRated = await fetcher.get<MovieDBMoviesResponse>('/top_rated');

        return topRated.results.map(  MovieMapper.fromMovieDBResultToEntity );

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - TopRated');
    }


}