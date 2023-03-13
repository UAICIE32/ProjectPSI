import { License } from "../license";

enum TeamAction {
    JOIN,
    LEAVE
}

export class TeamRequest extends Request {
    team: License;
    action: TeamAction
}