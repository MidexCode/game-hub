import type { Platform } from "@/Hooks/useGames";
import usePlatforms from "@/Hooks/usePlatforms";
import { Button, HStack, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      {/* <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
          >
            {selectedPlatform?.name || "Platforms"} <BsChevronDown />
          </span>
        </Button>
      </Menu.Trigger> */}

      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <HStack gap={1}>
            <span>{selectedPlatform?.name || "Platforms"}</span>
            <BsChevronDown />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data.map((platform) => (
            <Menu.Item
              value={platform.id.toString()}
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
