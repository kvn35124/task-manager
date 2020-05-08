import { Query } from '../index';

const getAll = () => Query('Select * from tasks');

const getOne = (id: any) => Query('Select * from tasks where id = ?', [id]);

const update = () => Query('');

const deleteOne = () => Query('');

const create = (user_id: number, task_Name: string, task_Description: string, due_Date: Date) => Query('insert into tasks (user_id, task_name,task_description,due_date) values (?)', [[user_id, task_Name, task_Description, due_Date]])





export default {
    getAll,
    getOne,
    update,
    deleteOne,
    create
}