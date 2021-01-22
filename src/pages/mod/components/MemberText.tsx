import { h } from "preact";
import { useContext } from "preact/hooks";
import styles from "./MemberText.module.css";

import { MemberContext } from "~/pages/mod/components/ModMember";

const MemberText = () => {
	const member = useContext(MemberContext);
	const url = `https://modrinth.com/user/${member.id}`;

	return (
		<a class={styles.container} href={url}>
			<h1 class={styles.heading}>{member.username}</h1>
			<h2 class={styles.role}>{member.role}</h2>
		</a>
	);
};

export default MemberText;
