export interface IModalList {
    modalListOpen: boolean
    setModalListOpen: boolean | any
}

export interface IModalAdd {
    modalOpen: boolean
    setModalOpen: boolean | any
}

export interface IUserEdit {
    id: number;
    username: string;
    email: string;
    telephone: string;
}

export interface IModalEdit {
    modalEditOpen: boolean
    setModalEditOpen: boolean | any
 
}