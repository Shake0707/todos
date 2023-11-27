import axios from "axios";
import { EApi, ITodo } from "../../types";

class Todo {
    private API = EApi.gloabal;

    async getAll() {
        return axios.get<ITodo[]>(this.API);
    }

    async getAllWithFilter(query: string) {
        return axios.get<ITodo[]>(this.API + query);
    }

    async create(todo: ITodo) {
        return axios.post<ITodo[]>(this.API, todo);
    }

    async delete(id: number) {
        return axios.delete<ITodo>(this.API + `/${id}`);
    }

    async toggleIsComlate(data: ITodo) {
        axios.put<ITodo>(this.API + `/${data._id}`, data);
    }

    async deleteComplated() {
        return axios.delete(this.API + '/complated');
    }
}

export default new Todo();