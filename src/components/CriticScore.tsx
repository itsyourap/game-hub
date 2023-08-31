import {Badge} from "@chakra-ui/react";

interface Props {
    score: number
}

const CriticScore = ({score}: Props) => {
    const color = score >= 80 ? 'green' : score >= 50 ? 'yellow' : score >= 30 ? 'orange' : 'red'
    return (
        <Badge colorScheme={color} fontSize={14} paddingX={2} borderRadius={5}>{score}</Badge>
    );
};

export default CriticScore;