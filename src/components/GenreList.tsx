import useGenres from "../hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-optimizer.ts";

const GenreList = () => {
    const {data: genres} = useGenres()
    return (
        <List>
            {
                genres.map(genre => (
                    <ListItem key={genre.id} padding={1.5}>
                        <HStack>
                            <Image boxSize={8} borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                            <Text fontSize={'lg'}>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                ))
            }
        </List>
    );
};

export default GenreList;