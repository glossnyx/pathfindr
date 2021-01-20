import { useEffect, useState } from "preact/hooks";
import formatRequest, { FormatOptions, LIMIT } from "~/util/formatRequest";
import type Mod from "~/models/Mod";
import { useDebouncedCallback } from "use-debounce";
import type QueryOperations from "~/models/QueryOperations";

const fetchMods = async (options: FormatOptions): Promise<Mod[]> => {
	const response = await fetch(formatRequest(options));
	const json = await response.json();
	return json.hits;
};

const useSearch = (query: QueryOperations) => {
	const [offset, setOffset] = useState(0);
	const [hasMore, setHasMore] = useState(true);
	const [results, setResults] = useState<Mod[]>([]);

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
