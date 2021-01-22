import { useEffect, useState } from "preact/hooks";
import marked from "marked";
import xss from "xss";

import type Mod from "~/pages/mod/models/Mod";

const xssOptions = { whiteList: { ...(xss as any).whiteList, summary: [] } };
const markedOptions: marked.MarkedOptions = { breaks: true };

const useBody = (mod?: Mod) => {
	const [body, setBody] = useState<string>("");

	const fetchBody: () => void = async () => {
		if (!mod) return;

		const heading = `# ${mod.title}\n`;

		const text = mod.body
			? mod.body
			: await fetch(mod.body_url).then((it) => it.text());

		const withoutHeading = text.startsWith(heading)
			? text.replace(heading, "")
			: text;

		const withoutBreaks = withoutHeading.replace(/<br\s?\/?>/g, "");

		const rendered = xss(marked(withoutBreaks, markedOptions), xssOptions);
		setBody(rendered);
	};

	useEffect(fetchBody, [mod]);

	return body;
};

export default useBody;
