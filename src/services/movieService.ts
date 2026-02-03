import axios from 'axios';
import type { Movie } from '../types/movie';

    interface MovieProps {
        results: Movie[];
    }

export default async function fetchMovies (query:string): Promise<Movie[]> {
        const config = {
            params: {
                query
            },
            headers:{ 
                accept: 'application/json' ,
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTY1YzI1ZGJiY2E1MzI4NWQ0MWVmZWY4NGNjY2IxNCIsIm5iZiI6MTc2OTk2ODkyOC43ODcwMDAyLCJzdWIiOiI2OTdmOTUyMDViMDk3NDk0YTMxYmQ2YTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2oxtqdj3AbLPDg1tHcelZQIM1PjCZmurlCoAtGB9oJQ`
            }
        };

        const urlResponse = await axios.get<MovieProps>('https://api.themoviedb.org/3/search/movie',config);
        return urlResponse.data.results;
    }; 
