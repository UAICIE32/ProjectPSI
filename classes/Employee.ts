import { Entity } from "./Entity";
import { License } from "./license";
import { Team } from "./Team";

enum JobLevel {
	L1,
	L2,
	L3,
	SDE,
	MSDE,
	SSDE,
	DSDE,
}

export class Employee extends Entity {
	private firstName: string;
	private lastName: string;
	private phone: string;
	private email: string;

	private username: string;
	private jobLevel: JobLevel;

	public team: Team;
	public licences: Array<License>;
}
