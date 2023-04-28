export interface IImage {
	id: string;
	url: string;
	breeds?: any;
	width?: number;
	height?: number
}

export interface IFilterImages {
	id: string,
	url: string
}