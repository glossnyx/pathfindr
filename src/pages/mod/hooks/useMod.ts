import { useEffect, useState } from "preact/hooks";

import type Mod from "~/pages/mod/models/Mod";
import req from "~/util/req";

const useMod = (id: string) => {
	const [mod, setMod] = useState<Mod | undefined>(undefined);

	const fetchMod = () => {
		req<Mod>(`/mod/${id}`).then(setMod);
	};

	useEffect(fetchMod, [id]);

	return mod;
};

export default useMod;
