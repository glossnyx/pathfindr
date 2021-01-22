const PREFIX = "https://api.modrinth.com/api/v1";

const req = async <T = any>(path: string): Promise<T> => {
	const response = await fetch(`${PREFIX}${path}`);
	return response.json();
};

export default req;
