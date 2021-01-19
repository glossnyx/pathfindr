/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	plugins: ["@snowpack/plugin-typescript", "@prefresh/snowpack"],
	mount: {
		public: { url: "/", static: true },
		src: { url: "/dist" },
	},
	routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
	optimize: {
		bundle: true,
		minify: true,
		treeshake: true,
	},
	alias: {
		"~": "./src",
	},
};
