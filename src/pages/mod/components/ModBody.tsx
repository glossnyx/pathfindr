import { h } from "preact";
import { useContext } from "preact/hooks";
import styles from "./ModBody.module.css";

import "github-markdown-css";

import useBody from "~/pages/mod/hooks/useBody";
import { ModContext } from "~/pages/mod";

const ModBody = () => {
	const mod = useContext(ModContext);
	const body = useBody(mod);

	return (
		<div class={styles.container} dangerouslySetInnerHTML={{ __html: body }} />
	);
};

export default ModBody;
