// CSS Modules

declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}

// CSS

declare module "*.css";

// Images

declare module "*.svg" {
	const ref: string;
	export default ref;
}

declare module "*.bmp" {
	const ref: string;
	export default ref;
}

declare module "*.gif" {
	const ref: string;
	export default ref;
}

declare module "*.jpg" {
	const ref: string;
	export default ref;
}

declare module "*.jpeg" {
	const ref: string;
	export default ref;
}

declare module "*.png" {
	const ref: string;
	export default ref;
}
