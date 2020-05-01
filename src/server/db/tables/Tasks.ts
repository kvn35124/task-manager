import { Query } from '../index';

const getAll = () => Query('Select * from tasks');

const getOne = (id: any) => Query('Select * from tasks where id = ?', [id]);



export default {
    getAll,
    getOne
}