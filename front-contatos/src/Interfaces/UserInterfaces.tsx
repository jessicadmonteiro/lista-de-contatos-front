import { IArrayUserContacts } from "./ContactInterfaces"
import { ILoginFormData } from "./LoginInterfaces"
import { IRegisterFormData } from "./RegisterInterfaces"

export interface IUserContextLogin {
    userLogin: (formData: ILoginFormData) => Promise<void>
    user: IUser | null
    setUser: React.Dispatch<React.SetStateAction<IUser | null >>
    loading: boolean
    arrayContacts: IArrayUserContacts[]
    setArrayContacts: React.Dispatch<React.SetStateAction<IArrayUserContacts[]>>
    firstNameUser: string | undefined
}

export interface IUserContextRegister {
    userRegister: (formData: IRegisterFormData) => Promise<void>
    loading: boolean
}

export interface IUserProviderProps {
    children: React.ReactNode
}

export interface IUser {
    username: string
    email: string
    telephone: string
    id: number
    createdAt: Date
	updatedAt: Date
	deletedAt: Date | null
}

export interface IUserLogin {
    email: string
}