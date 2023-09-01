import useGenres from "../hooks/useGenres.ts";

const GenreList = () => {
    const {data: genres} = useGenres()
    return (
        <ul>
            {
                genres.map(genre => <li key={genre.id}>{genre.name}</li>)
            }
        </ul>
    );
};

export default GenreList;