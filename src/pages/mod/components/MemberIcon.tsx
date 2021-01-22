import { h } from "preact";
import { useContext } from "preact/hooks";
import styles from "./MemberIcon.module.css";

import { MemberContext } from "~/pages/mod/components/ModMember";

const MemberIcon = () => {
	const member = useContext(MemberContext);

	return (
		<div class={styles.container}>
			<img
				src={member.avatar_url || "https://cdn.modrinth.com/placeholder.svg"}
				class={styles.icon}
				alt={member.username}
				width="64"
				height="64"
			/>
		</div>
	);
};

export default MemberIcon;
