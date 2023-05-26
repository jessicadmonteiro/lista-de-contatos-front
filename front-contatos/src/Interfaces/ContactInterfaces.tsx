
export interface IContactData {
    username: string
    email: string
    telephone: string
}

export interface IContactContext {
    AddContact: (data: IContactData) => Promise<void>
    contact: never[]
    setContact: React.Dispatch<React.SetStateAction<never[]>>
    setIdContact: React.Dispatch<React.SetStateAction<string>>
    ToEdit(data: any): Promise<void>
    DeleteContact(id: number): Promise<any | undefined>
}