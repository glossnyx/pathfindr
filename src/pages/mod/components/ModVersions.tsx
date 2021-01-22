import { h } from "preact";
import { useContext } from "preact/hooks";
import styles from "./ModVersions.module.css";

import { ModContext } from "~/pages/mod";

const ModVersions = () => {
	const mod = useContext(ModContext);

	return <div class={styles.container}>versions</div>;
};

export default ModVersions;
