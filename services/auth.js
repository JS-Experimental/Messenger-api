import {User} from "../model/User";

/*export async const login = (phone, password) => {

}*/

export const signUp = ({phone, password}) => {
    const user = User.build({phone, password});
    user.save();
}