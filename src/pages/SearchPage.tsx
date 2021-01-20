import { h, Fragment } from "preact";
import styles from "./SearchPage.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

import useQuery from "~/hooks/useQuery";
import useSearch from "~/hooks/useSearch";

import ModCard from "~/components/ModCard";
import SearchBox from "~/components/SearchBox";

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
				<div class={styles.grid}>
					{results.map((result) => (
						<ModCard key={result.mod_id} mod={result} />
					))}
				</div>
			</InfiniteScroll>
		</>
	);
};

export default SearchPage;
