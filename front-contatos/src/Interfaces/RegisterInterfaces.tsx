import { IUser } from "./UserInterfaces"

export interface IRegisterFormData {
    username: string
    email: string
    telephone: string
    password: string
}

export interface IUserRegisterResponse{
    user: IUser

}

