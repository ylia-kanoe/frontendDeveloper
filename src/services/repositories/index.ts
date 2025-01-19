import axios, { AxiosResponse } from "axios";
import { RepositoryDataType } from "./types";

export const repositoryApi = {
    async getData(nextPage: number): Promise<AxiosResponse<RepositoryDataType>> {
        return await axios.get(
            'https://api.github.com/search/repositories?q=javascript&sort=stars&order=asc&page=' + nextPage
        );
    }
}
