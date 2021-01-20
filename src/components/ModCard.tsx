import { h } from "preact";
import type Mod from "~/models/Mod";
import styles from "./ModCard.module.css";

const ModCard = ({ mod }: { mod: Mod }) => {
	const url = `/mod/${mod.slug ?? mod.mod_id.replace("local-", "")}`;

	return (
		<a class={styles.card} href={url}>
			<img
				src={mod.icon_url || "https://cdn.modrinth.com/placeholder.svg"}
				class={styles.icon}
				width="64"
				height="64"
				alt={`${mod.title} icon`}
			/>
			<h1 class={styles.title}>{mod.title}</h1>
			<p class={styles.description}>{mod.description}</p>
		</a>
	);
};

export default ModCard;
