export type OwnerType = {
    login: string;
    url: string;
    avatar_url: string;
}

export type DataType = {
    id: number;
    owner: OwnerType;
}

export type RepositoryDataType = {
    items: DataType[]
}