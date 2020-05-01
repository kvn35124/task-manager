import * as mysql from 'mysql';
import config from '../config';
import tasks from './tables/Tasks';


export const Connection = mysql.createPool(config.mysql);


export const Query = (query: string, values?: any) => {
    return new Promise((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) reject(err);
            return resolve(results);
        })
    })
}

export default {
    tasks
}