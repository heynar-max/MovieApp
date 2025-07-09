import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import { MovieDBMovie } from '../../../infrastruture/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastruture/mappers/movie.mappers';
import {FullMovie} from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
    fetcher: HttpAdapter,
    movieId: number,
    ): Promise<FullMovie> => {
    try {
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
        const fullMovie = MovieMapper.fromMovieDBToEntity(movie);
        return fullMovie;
        
    } catch (error) {
        throw new Error(`Cannot get movie by id: ${movieId}`);
    }
};