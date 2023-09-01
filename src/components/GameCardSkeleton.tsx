import {Card, CardBody, HStack, Skeleton, SkeletonText} from "@chakra-ui/react";

const GameCardSkeleton = () => {
    return (
        <Card height={350} width={300} overflow={'hidden'} borderRadius={10}>
            <Skeleton height={200} width={300}/>
            <CardBody>
                <SkeletonText noOfLines={2} fontSize={'2xl'}/>
                <HStack marginTop={3} justifyContent={'space-between'}>
                    <SkeletonText noOfLines={1} width={100}/>
                    <SkeletonText noOfLines={1} width={6}/>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCardSkeleton;