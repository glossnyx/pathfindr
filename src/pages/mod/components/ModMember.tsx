import { createContext, h } from "preact";
import styles from "./ModMember.module.css";

import type TeamMember from "~/pages/mod/models/TeamMember";
import MemberIcon from "~/pages/mod/components/MemberIcon";
import MemberText from "~/pages/mod/components/MemberText";

export const MemberContext = createContext<TeamMember>(undefined!!);

const ModMember = ({ member }: { member: TeamMember }) => (
	<MemberContext.Provider value={member}>
		<div class={styles.container}>
			<MemberIcon />
			<MemberText />
		</div>
	</MemberContext.Provider>
);

export default ModMember;
