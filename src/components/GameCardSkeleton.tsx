import {Card, CardBody, HStack, Skeleton, SkeletonText} from "@chakra-ui/react";

const GameCardSkeleton = () => {
    return (
        <Card overflow={'hidden'} borderRadius={10}>
            <Skeleton height={200} width={'inherit'}/>
            <CardBody>
                <SkeletonText noOfLines={5} />
                <HStack marginTop={5} justifyContent={'space-between'}>
                    <SkeletonText noOfLines={1} width={100}/>
                    <SkeletonText noOfLines={1} width={6}/>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCardSkeleton;