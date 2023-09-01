import useGenres from "../hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Skeleton, SkeletonText, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-optimizer.ts";

const GenreList = () => {
    const {data: genres, isLoading} = useGenres()
    return (
        <List>
            {
                isLoading && [...Array(20)].map(x => (
                    <ListItem key={x} paddingY={3}>
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
                            <Text fontSize={'lg'}>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                ))
            }
        </List>
    );
};

export default GenreList;