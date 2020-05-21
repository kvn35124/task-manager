import * as React from 'react';
import { json } from '../../server/utilities/api';
import { Link } from 'react-router-dom';



class ToDo extends React.Component<IToDoProps, IToDoState>{
    constructor(props: IToDoProps) {
        super(props);
        this.state = {
            tasks: []
        }
    }


    async componentDidMount() {
        try {
            let tasks = await json("/api/tasks");
            this.setState({ tasks });
        } catch (error) {
            console.log(error);
        }
    }



    render() {
        return (
            <div className="col-md-4">
                <div className="card shadow">
                    <div className="card-header">
                        To Do
                    </div>
                    <ul className="list-group list-group-flush">
                        {this.state.tasks.map(task => (
                            <Link to={`/tasks/${task.id}`} ><li className="list-group-item" draggable="true">{task.task_name} <hr/></li></Link>
                            
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export interface ITasks {
    id: number;
    user_id: number;
    task_name: string;
    task_description: string;
    due_date: Date;
    created: Date;
}


interface IToDoProps { };
interface IToDoState {
    tasks: Array<ITasks>;
};


export default ToDo;