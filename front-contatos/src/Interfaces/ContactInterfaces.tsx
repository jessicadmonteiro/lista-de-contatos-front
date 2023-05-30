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
}