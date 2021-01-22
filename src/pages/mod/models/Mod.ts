type Mod = {
	id: string;
	slug?: string;
	team: string;
	title: string;
	description: string;
	body: string;
	body_url: string;
	published: Date;
	updated: Date;
	status: string;
	license: {
		id: string;
		name: string;
		url: string;
	};
	client_side: string;
	server_side: string;
	downloads: number;
	categories: string[];
	versions: string[];
	icon_url?: string;
	issues_url?: string;
	source_url?: string;
	wiki_url?: any;
	discord_url?: string;
	donation_urls: any[];
};

export default Mod;
