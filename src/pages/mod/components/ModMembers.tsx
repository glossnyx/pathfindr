import { h } from "preact";
import { useContext } from "preact/hooks";
import styles from "./ModMembers.module.css";

import { ModContext } from "~/pages/mod";
import useMembers from "~/pages/mod/hooks/useMembers";
import ModMember from "~/pages/mod/components/ModMember";

const ModMembers = () => {
	const mod = useContext(ModContext);
	const members = useMembers(mod);

	return (
		<div class={styles.container}>
			{members.map((member) => (
				<ModMember member={member} />
			))}
		</div>
	);
};

export default ModMembers;
