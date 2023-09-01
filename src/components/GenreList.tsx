import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Button, HStack, Image, List, ListItem, Skeleton, SkeletonText} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-optimizer.ts";

interface Props {
    onSelectGenre: (genre: Genre) => void
}

const GenreList = ({onSelectGenre}: Props) => {
    const {data: genres, isLoading} = useGenres()
    return (
        <List>
            {
                isLoading && [...Array(20)].map((_x, i) => (
                    <ListItem key={i} paddingY={3}>
                        <HStack>
                            <Skeleton boxSize={8} borderRadius={5} marginRight={2}/>
                            <SkeletonText noOfLines={1} width={'70px'}/>
                        </HStack>
                    </ListItem>
                ))
            }
            {
                genres && genres.map(genre => (
                    <ListItem key={genre.id} paddingY={3}>
                        <HStack>
                            <Image marginRight={2} boxSize={8} borderRadius={8}
                                   src={getCroppedImageUrl(genre.image_background)}/>

                            <Button onClick={() => onSelectGenre(genre)} fontSize={'lg'}
                                    variant={'link'}>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))
            }
        </List>
    );
};

export default GenreList;