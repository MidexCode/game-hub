import { Card } from "@chakra-ui/card";
import { CardBody } from "@chakra-ui/card";
import { VStack } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card width={"300px"} borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        {/* <SkeletonText noOfLines={3} spacing={2} /> */}
        <VStack align="stretch" gap={2}>
          <Skeleton height="20px" />
          <Skeleton height="16px" width="80%" />
          <Skeleton height="16px" width="60%" />
        </VStack>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
