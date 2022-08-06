import instance from "./instance";
import User from "../model/user";
export const singup = (user: User) => {
    const url = `/users`
    return instance.post(url, user)
};
export const signin = (user: User) => {
    return instance.post(`/login`, user);
};