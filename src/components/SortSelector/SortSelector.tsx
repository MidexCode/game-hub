import { Button, HStack, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-date", label: "Date added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu.Root>
      {/* <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
          >
            Order by: {currentSortOrder?.label || "Relevance"} <BsChevronDown />
          </span>
        </Button>
      </Menu.Trigger> */}

      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <HStack gap={1}>
            <span>Order by: {currentSortOrder?.label || "Relevance"}</span>
            <BsChevronDown />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {sortOrders.map((order) => (
            <Menu.Item
              key={order.value}
              value={order.value}
              onClick={() => onSelectSortOrder(order.value)}
            >
              {order.label}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
