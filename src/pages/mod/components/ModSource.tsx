import { h } from "preact";
import { useContext } from "preact/hooks";
import styles from "./ModSource.module.css";

import { ModContext } from "~/pages/mod";

const ModSource = () => {
	const mod = useContext(ModContext);

	return (
		<a
			class={styles.container}
			href={mod?.source_url}
			target="_blank"
			rel="noopener"
		>
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
				<path
					d="M30 21.6667V31.6667C30 32.5507 29.6488 33.3986 29.0237 34.0237C28.3986 34.6488 27.5507 35 26.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V13.3333C5 12.4493 5.35119 11.6014 5.97631 10.9763C6.60143 10.3512 7.44928 10 8.33333 10H18.3333"
					stroke="#ECECEC"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M25 5H35V15"
					stroke="#ECECEC"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M16.6667 23.3333L35 5"
					stroke="#ECECEC"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</a>
	);
};

export default ModSource;
