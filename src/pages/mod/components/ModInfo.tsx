import { h } from "preact";
import { useContext } from "preact/hooks";
import styles from "./ModInfo.module.css";

import { ModContext } from "~/pages/mod";

const ModInfo = () => {
	const mod = useContext(ModContext);

	return <div class={styles.container}>info</div>;
};

export default ModInfo;
