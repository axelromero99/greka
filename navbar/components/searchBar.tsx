import * as React from "react";
import type {NextPage} from "next";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {InputGroup, Input, InputLeftElement} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";

import useDebounce from "../../utils/hooks/useDebounce";

/**
 * It's a search bar that uses debounce to prevent the user from spamming the search function.
 * @returns A component that renders a searchbar.
 */
const SearchBar: NextPage = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string | null>(null);

  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    function searchURL(search) {
      router.push(`/search/${search}`);
    }

    if (debouncedSearch) searchURL(search.toLocaleLowerCase());
  }, [debouncedSearch]);

  return (
    <InputGroup width="50%">
      <InputLeftElement children={<AiOutlineSearch color="gray.300" />} pb={2} />
      <Input
        _focus={{boxShadow: "none"}}
        backgroundColor="#f8f8f8"
        border="1px solid rgba(1,1,1,0.5)"
        _focusVisible={{
          border: "1px solid rgba(1,1,1,0.9)"
        }}
        borderRadius="10"
        placeholder="Buscar productos..."
        size="sm"
        type="text"
        variant={"flushed"}
        onChange={(e) => setSearch(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchBar;
