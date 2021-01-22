import { h } from "preact";
import { useContext } from "preact/hooks";
import styles from "./ModDescription.module.css";

import { ModContext } from "~/pages/mod";

const ModDescription = () => {
	const mod = useContext(ModContext);

	return <div class={styles.container}>{mod?.description}</div>;
};

export default ModDescription;
