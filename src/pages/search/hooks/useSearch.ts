import { useEffect, useState } from "preact/hooks";
import { useDebouncedCallback } from "use-debounce";

import formatSearch, { FormatOptions, LIMIT } from "~/util/formatSearch";
import type ModSearchResult from "~/pages/search/models/ModSearchResult";
import type QueryOperations from "~/pages/search/models/QueryOperations";
import req from "~/util/req";

const fetchMods = async (options: FormatOptions) => {
	const response = await req(formatSearch(options));
	return response.hits as ModSearchResult[];
};

const useSearch = (query: QueryOperations) => {
	const [offset, setOffset] = useState(0);
	const [hasMore, setHasMore] = useState(true);
	const [results, setResults] = useState<ModSearchResult[]>([]);

	const load: () => void = useDebouncedCallback(async () => {
		const mods = await fetchMods({ query, offset: 0 });
		setHasMore(mods.length >= LIMIT);
		setResults(mods);
		setOffset(mods.length);
	}, 300).callback;

	const loadMore = async () => {
		if (!hasMore) return;
		const mods = await fetchMods({ query, offset });
		if (mods.length < LIMIT) setHasMore(false);
		setResults([...results, ...mods]);
		setOffset(offset + mods.length);
	};

	useEffect(load, [...query]);

	return { results, loadMore, hasMore };
};

export default useSearch;
