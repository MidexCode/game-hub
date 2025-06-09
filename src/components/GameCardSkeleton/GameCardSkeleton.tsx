import { Card } from "@chakra-ui/card";
import { CardBody } from "@chakra-ui/card";
import { SkeletonText, VStack } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <VStack align="stretch" gap={2}>
          <SkeletonText noOfLines={3} gap={2} />
          {/* <Skeleton height="20px" />
          <Skeleton height="16px" width="80%" />
          <Skeleton height="16px" width="60%" /> */}
        </VStack>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
