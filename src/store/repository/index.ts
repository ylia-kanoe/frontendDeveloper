import { makeAutoObservable, toJS } from "mobx"
import { RepositoryType } from "./types"

function repositoryState() {
    return makeAutoObservable<RepositoryType>({
        data: [],
        statusLoad: false,
        deleteData(id) {
            this.data = this.data.filter((item) => item.id !== id)
        },
        editData(payload) {
            this.data = this.data.map((item) => item.id === payload.id ? payload : item)
        },

        updateData(payload) {
            this.data = [...this.data, ...payload]
        },
        getData() {
            return toJS(this.data)
        },
        setStatus (payload){
            this.statusLoad = payload
        },
        filterList (){
            this.data = this.data.sort((a, b) => a.owner.login.toUpperCase() > b.owner.login.toUpperCase() ? 1 : -1)
            console.log(toJS(this.data))
        }
    }, {}, { autoBind: true })
}

export const repositoryStore = repositoryState()
