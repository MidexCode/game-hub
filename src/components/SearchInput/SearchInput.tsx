import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup
      flex={"1"}
      startElement={<BsSearch />}
      width="300px"
      marginLeft="300px"
      marginRight="300px"
      alignItems={"center"}
    >
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant={"subtle"}
        pl={10}
        // width={"300px"}
        // marginLeft={"40px"}
        // marginRight={5}
        // alignItems={"center"}
        // justifyContent={"flex-start"}
      />
    </InputGroup>
  );
};

export default SearchInput;
