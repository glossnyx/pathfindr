import { h } from "preact";
import styles from "./ModPage.module.css";

type ModPageProps = { id: string };

const ModPage = (props: ModPageProps) => (
	<div class={styles.div}>Mod {props.id}</div>
);

export default ModPage;
