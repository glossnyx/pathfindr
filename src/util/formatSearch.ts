import type QueryOperations from "~/pages/search/models/QueryOperations";

export type FormatOptions = {
	query: QueryOperations;
	offset: number;
};

export const LIMIT = 60;

const createParameters = (parameters: Record<string, any>) => {
	return Object.entries(parameters)
		.filter(([, value]) => value !== undefined)
		.map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
		.join("&");
};

const formatSearch = ({ query, offset }: FormatOptions): string => {
	const { name, sort: index, categories, versions } = query;

	const facets = [
		...categories.map((it) => [it]),
		...versions.map((it) => [it]),
	];

	const parameters = createParameters({
		query: name,
		index,
		facets: facets.length ? JSON.stringify(facets) : undefined,
		limit: LIMIT,
		offset,
	});

	return `/mod?${parameters}`;
};

export default formatSearch;
