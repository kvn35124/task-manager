import { Query } from '../index';

const getOne = (id: number) => Query('Select * from users where id ?', [id]);

const createUser = (username: string, password: string) => Query('insert into users (username, password) values (?)', [[username, password]]);



export default {
    getOne,     
    createUser
}