import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import SearchInput from "../SearchInput/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
    </HStack>
  );
};

export default NavBar;
