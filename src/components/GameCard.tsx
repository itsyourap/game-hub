import {Game} from "../hooks/useGames.ts";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-optimizer.ts";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image height={200} src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <HStack marginTop={3} justifyContent={'space-between'}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;