import { h } from "preact";
import styles from "./SearchBox.module.css";

import type QueryOperations from "~/pages/search/models/QueryOperations";

import SearchIcon from "~/pages/search/components/SearchIcon";

const categoryRegex = /categories:\w+/g;
const versionRegex = /versions:[\w.-]+/g;
const sortRegex = /sort:\w+/g;

const handleInput = (value: string, query: QueryOperations) => {
	const categoryMatches = value.match(categoryRegex);
	const versionMatches = value.match(versionRegex);
	const sortMatches = value.match(sortRegex);

	query.setCategories(categoryMatches ?? []);
	query.setVersions(versionMatches ?? []);
	query.setSort(sortMatches?.[0].slice(5) ?? "relevance");

	query.setName(
		value
			.replace(categoryRegex, "")
			.replace(versionRegex, "")
			.replace(sortRegex, "")
			.trim(),
	);
};

const SearchBox = ({ query }: { query: QueryOperations }) => {
	return (
		<div class={styles.container}>
			<input
				class={styles.input}
				placeholder="Search"
				aria-label="Search"
				onInput={(event) => handleInput(event.currentTarget.value, query)}
			/>
			<SearchIcon />
		</div>
	);
};

export default SearchBox;
