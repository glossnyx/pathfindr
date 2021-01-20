import { h } from "preact";
import styles from "./SearchBox.module.css";
import type QueryOperations from "~/models/QueryOperations";

const categoryRegex = /categories:\w+/g;
const versionRegex = /versions:[\w-]+/g;
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
				onInput={(event) => handleInput(event.currentTarget.value, query)}
			/>
			<svg
				class={styles.icon}
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M28 28L20 20L28 28ZM22.6667 13.3333C22.6667 18.488 18.488 22.6667 13.3333 22.6667C8.17868 22.6667 4 18.488 4 13.3333C4 8.17868 8.17868 4 13.3333 4C18.488 4 22.6667 8.17868 22.6667 13.3333Z"
					stroke="#ACACAC"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				></path>
			</svg>
		</div>
	);
};

export default SearchBox;
