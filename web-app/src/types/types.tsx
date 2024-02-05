export type event = {
	id: string;
	eventName: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string;
	admin: string[]; //array of people ids
	invited?: [going?: string[], maybe?: string[], invited?: string[], notGoing?: string[]];
	posts: string[]; //array of post ids
};
