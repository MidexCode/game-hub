import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ marginLeft: "auto", width: "fit-content" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup
        flex={"1"}
        startElement={<BsSearch />}
        maxW="500px"
        px={{ base: 4, md: 8 }}
        alignItems={"center"}
        // marginLeft={{ base: "20px", sm: "50px", md: "150px", lg: "300px" }}
        // marginRight={{ base: "20px", sm: "50px", md: "150px", lg: "300px" }}
        // maxW="500px"
        // mx="auto"
        // px={{ base: 4, md: 8 }}
        // alignItems={"center"}
      >
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant={"subtle"}
          // pl={10}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
