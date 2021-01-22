import type { StateUpdater } from "preact/hooks";

type QueryOperations = {
	name: string;
	sort: string;
	categories: string[];
	versions: string[];

	setName: StateUpdater<string>;
	setSort: StateUpdater<string>;
	setCategories: StateUpdater<string[]>;
	setVersions: StateUpdater<string[]>;

	[Symbol.iterator](): Generator;
};

export default QueryOperations;
