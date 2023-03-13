import { License } from "../license";

enum LicenseAction {
    REGISTER,
    REVOKE,
    PAUSE
}
export class LicenseRequest extends Request {
    license: License;
    action: LicenseAction
}