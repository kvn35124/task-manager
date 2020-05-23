import { Query } from '../index';

const getAll = () => Query('Select * from tasks');

const getOne = (id: any) => Query('Select * from tasks where id = ?', [id]);

const update = (id: any, task_Name: string, task_Description: string, due_Date: Date) => Query('update tasks set task_Name = ?, task_description = ? due_Date = ? where id = ?', [id, task_Name, task_Description, due_Date]);

const deleteOne = (id: any) => Query('delete from tasks where id = ?', [id]);

const create = (user_id: number, task_Name: string, task_Description: string, due_Date: Date) => Query('insert into tasks (user_id, task_name,task_description,due_date) values (?)', [[user_id, task_Name, task_Description, due_Date]])





export default {
    getAll,
    getOne,
    update,
    deleteOne,
    create
}