import { h } from "preact";
import { useContext } from "preact/hooks";
import styles from "./ModIcon.module.css";

import { ModContext } from "~/pages/mod";

const ModIcon = () => {
	const mod = useContext(ModContext);

	return (
		<a class={styles.container} href="/">
			<img
				src={mod?.icon_url || "https://cdn.modrinth.com/placeholder.svg"}
				class={styles.icon}
				alt={`${mod?.title ?? "loading"} icon`}
				width="64"
				height="64"
			/>
		</a>
	);
};

export default ModIcon;
