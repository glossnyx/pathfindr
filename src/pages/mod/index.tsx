import { createContext, h } from "preact";
import styles from "./index.module.css";

import type Mod from "~/pages/mod/models/Mod";

import useMod from "~/pages/mod/hooks/useMod";

import ModIcon from "~/pages/mod/components/ModIcon";
import ModTitle from "~/pages/mod/components/ModTitle";
import ModSource from "~/pages/mod/components/ModSource";
import ModDescription from "~/pages/mod/components/ModDescription";
import ModBody from "~/pages/mod/components/ModBody";
import ModInfo from "~/pages/mod/components/ModInfo";
import ModMembers from "~/pages/mod/components/ModMembers";
import ModVersions from "~/pages/mod/components/ModVersions";

export const ModContext = createContext<Mod | undefined>(undefined);

const ModPage = ({ id }: { id: string }) => {
	const mod = useMod(id);

	return (
		<ModContext.Provider value={mod}>
			<nav class={styles.header}>
				<ModIcon />
				<ModTitle />
				<ModSource />
			</nav>
			<main class={styles.content}>
				<ModDescription />
				<ModBody />
				<ModInfo />
				<ModMembers />
				<ModVersions />
			</main>
		</ModContext.Provider>
	);
};

export default ModPage;
