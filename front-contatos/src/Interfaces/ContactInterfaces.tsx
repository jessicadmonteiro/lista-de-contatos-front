export interface IContactData {
    username: string
    email: string
    telephone: string
}


export interface INewContactData {
    id: number
    username: string
    email: string
    telephone: string
}

export interface IContactContext {
    AddContact: (newData: IContactData) => Promise<void>
    ListContacts: (id: number | undefined) => Promise<void>
    contacts: INewContactData[]
    DeleteContact: (id: number) => Promise<void>
}