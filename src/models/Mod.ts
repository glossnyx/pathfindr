type Mod = {
	mod_id: string;
	slug?: string;
	author: string;
	title: string;
	description: string;
	categories: string[];
	versions: string[];
	downloads: number;
	page_url: string;
	icon_url?: string;
	author_url: string;
	date_created: Date;
	date_modified: Date;
	latest_version: string;
	license: string;
	client_side: string;
	server_side: string;
	host: string;
};

export default Mod;
