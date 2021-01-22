import { h } from "preact";
import styles from "./SearchBox.module.css";

import type QueryOperations from "~/pages/search/models/QueryOperations";

import SearchIcon from "~/pages/search/components/SearchIcon";

const categoryRegex = /categories:\w+/g;
const versionRegex = /versions:[\w.-]+/g;
const sortRegex = /sort:\w+/g;

const findMatches = (value: string, regex: RegExp) => value.match(regex);

const handleInput = (value: string, query: QueryOperations) => {
	const categoryMatches = findMatches(value, categoryRegex);
	const versionMatches = findMatches(value, versionRegex);
	const sortMatches = findMatches(value, sortRegex);

	query.setCategories(categoryMatches ?? []);
	query.setVersions(versionMatches ?? []);
	query.setSort(sortMatches?.[0].replace("sort:", "") ?? "relevance");

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
