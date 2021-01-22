import { h } from "preact";
import { useContext } from "preact/hooks";
import styles from "./ModTitle.module.css";

import { ModContext } from "~/pages/mod";

const ModTitle = () => {
	const mod = useContext(ModContext);

	return (
		<div class={styles.container}>
			<h1 class={styles.heading}>{mod?.title}</h1>
		</div>
	);
};

export default ModTitle;
