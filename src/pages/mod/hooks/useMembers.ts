import { useEffect, useState } from "preact/hooks";

import type Mod from "~/pages/mod/models/Mod";
import type TeamMember from "~/pages/mod/models/TeamMember";
import req from "~/util/req";

const useMembers = (mod: Mod | undefined) => {
	const [members, setMembers] = useState<TeamMember[]>([]);

	const fetchMembers: () => void = async () => {
		if (!mod) return;

		const team = await req<any[]>(`/team/${mod.team}/members`);
		const ids = JSON.stringify(team.map((it) => it.user_id));
		const users = await req<any[]>(`/users?ids=${ids}`);

		const members = users.map<TeamMember>((user) => ({
			id: user.id,
			username: user.username,
			avatar_url: user.avatar_url,
			role: team.find((it) => it.user_id === user.id).role,
		}));

		setMembers(members);
	};

	useEffect(fetchMembers, [mod]);

	return members;
};

export default useMembers;
