export interface IContactData {
    username: string
    email?: string | null | undefined
    telephone: string
}

export interface INewContactData {
    id?: number| undefined
    username?: string | undefined;
    email?: string | null | undefined;
    telephone?: string | undefined;
    userId?: number | undefined
}

export interface IArrayUserContacts {
    id: number
    username: string
    email: string
    telephone: string
    contacts: INewContactData[]
}

export interface IContactContext {
    AddContact: (newData: IContactData) => Promise<void>
    DeleteContact: (id: number) => Promise<void>
    setIdContact: React.Dispatch<React.SetStateAction<number | "">>
    ToEdit: (data: INewContactData) => Promise<void>
    contactFilter: IArrayUserContacts[]
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
    idContact: number | ""
    setArrayContacts: React.Dispatch<React.SetStateAction<IArrayUserContacts[]>>
    arrayContacts: IArrayUserContacts[]
}