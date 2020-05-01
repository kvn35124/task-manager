import * as React from 'react';
import Calendar from 'react-calendar'
import { json } from '../../server/utilities/api';

class Create extends React.Component<ICreateProps, ICreateState>{
    constructor(props: ICreateProps) {
        super(props);
        this.state = {
            startDate: new Date(),
            user_id: 1,
            task_name: '',
            task_description: '',
        }
    }


    async handleSubmit() {
        event.preventDefault();
        let newTask = {
            user_id: this.state.user_id,
            task_name: this.state.task_name,
            task_description: this.state.task_description,
            due_date: this.state.startDate
        }
        try {
            let results = await json('/api/tasks', 'POST', newTask);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

    onChange = (date: Date) => this.setState({startDate : date})


    render() {
        return (
            <form className="border border-dark rounded mt-1">
                <div className="form-row">
                    <div className="form-group col-6 m-2">
                        <label>Task Name:</label>
                        <input type="text" value={this.state.task_name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({task_name: e.target.value})} className="form-control" placeholder="What is the name of the task..." />
                    </div>
                    <div className="form-group col-4 m-2">
                        <label>Pick a Due Date:</label>
                        <Calendar onChange={this.onChange} value={this.state.startDate}/>
                    </div>
                    <div className="form-group m-2">
                        <label>Description:</label>
                        <textarea value={this.state.task_description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({task_description: e.target.value})} name="" id="" cols={140} rows={10}  className="form-control" placeholder="Task Description..."></textarea>
                    </div>
                </div>
                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleSubmit()} className="btn btn-dark ml-2 mb-2">Submit</button>
            </form>
        )
    }
}


interface ICreateProps { };
interface ICreateState { 
    startDate: Date;
    user_id: number;
    task_name: string;
    task_description: string;
};


export default Create;