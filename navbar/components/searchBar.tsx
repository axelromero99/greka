import * as React from "react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
    <input
      background-color="bg"
      placeholder="Buscar productos..."
      style={{
        borderRadius: 10,
        padding: "5px 15px",
        border: "1px solid #a2a2a2",
        width: "100%",
      }}
      type="text"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
