export type OwnerType = {
    login: string;
    url: string;
    avatar_url: string;
}

export type DataType = {
    id: number;
    owner: OwnerType;
}

export type RepositoryType = {
    data: DataType[];
    statusLoad: boolean;
    updateData: (payload: DataType[]) => void;
    deleteData: (id: number) => void;
    editData: (payload: DataType) => void;
    getData: () => DataType[];
    setStatus: (payload: boolean) => void;
    filterList: () => void;
}