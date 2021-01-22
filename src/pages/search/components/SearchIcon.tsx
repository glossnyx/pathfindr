import { h } from "preact";
import styles from "./SearchIcon.module.css";

const SearchIcon = () => {
	return (
		<svg
			class={styles.icon}
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
		>
			<path
				d="M28 28L20 20L28 28ZM22.6667 13.3333C22.6667 18.488 18.488 22.6667 13.3333 22.6667C8.17868 22.6667 4 18.488 4 13.3333C4 8.17868 8.17868 4 13.3333 4C18.488 4 22.6667 8.17868 22.6667 13.3333Z"
				stroke="#ACACAC"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default SearchIcon;
