import { h, Fragment } from "preact";
import styles from "./index.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

import useQuery from "~/pages/search/hooks/useQuery";
import useSearch from "~/pages/search/hooks/useSearch";

import ModCard from "~/pages/search/components/ModCard";
import SearchBox from "~/pages/search/components/SearchBox";

const SearchPage = () => {
	const query = useQuery();
	const { results, loadMore, hasMore } = useSearch(query);

	return (
		<>
			<SearchBox query={query} />
			<InfiniteScroll
				dataLength={results.length}
				next={loadMore}
				hasMore={hasMore}
				loader={null}
			>
				<main class={styles.grid}>
					{results.map((result) => (
						<ModCard key={result.mod_id} mod={result} />
					))}
				</main>
			</InfiniteScroll>
		</>
	);
};

export default SearchPage;
