import { useState } from "preact/hooks";

import type QueryOperations from "~/pages/search/models/QueryOperations";

const useQuery = (): QueryOperations => {
	const [name, setName] = useState("");
	const [sort, setSort] = useState("relevance");
	const [categories, setCategories] = useState<string[]>([]);
	const [versions, setVersions] = useState<string[]>([]);

	return {
		name,
		sort,
		categories,
		versions,

		setName,
		setSort,
		setCategories,
		setVersions,

		*[Symbol.iterator]() {
			yield name;
			yield sort;
			yield categories;
			yield versions;
		},
	};
};

export default useQuery;
