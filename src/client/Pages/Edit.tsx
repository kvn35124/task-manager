import * as React from 'react';
import Calendar from "react-calendar";
import { Link, RouteComponentProps } from 'react-router-dom';
import { json } from '../../server/utilities/api';

class Edit extends React.Component<IEditProps, IEditState>{
    constructor(props: IEditProps) {
        super(props);
        this.state = {
            id: 0,
            task_name: '',
            due_date: new Date,
            task_description: ''
        }
    }


    async componentDidMount() {
        try {
            let [results]: any = await json(`/api/tasks/${this.props.match.params.id}`)
            this.setState({
                id: results.id,
                task_name: results.task_name,
                task_description: results.task_description
            })
        } catch (error) {
            console.log(error);
        }
    }

    onChange = due_date => {
        this.setState({ due_date });
    }

    async handleSubmit() {
        event.preventDefault();
        let updatedTask = {
            task_name: this.state.task_name,
            due_date: this.state.due_date,
            task_description: this.state.task_description
        }
        try {
            let results = await json(`/api/tasks/${this.props.match.params.id}`, 'PUT', updatedTask);
            if (results) {
                this.props.history.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }



    render() {
        return (
            <section className="row">
                <article className="col d-flex justify-content-center">
                    <form className="form-group border shadow border-dark rounded p-3">
                        <h1 className="text-center">Edit This Task</h1>
                        <label className="mt-2">Task:</label>
                        <input type="text" className="form-control" value={this.state.task_name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ task_name: e.target.value })} />
                        <Calendar className="mt-2" value={this.state.due_date} onChange={this.onChange} />
                        <label className="mt-2">Task Description:</label>
                        <textarea className="form-control" name="" id="" cols={30} rows={10} value={this.state.task_description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ task_description: e.target.value })}></textarea>
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-primary mt-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleSubmit()}>Submit</button>
                            <Link to={'/'} className="btn btn-success mt-2">Back to Tasks</Link>
                        </div>
                    </form>
                </article>
            </section>
        )
    }
}


interface IEditProps extends RouteComponentProps<{ id: string }> { };
interface IEditState {
    id: number;
    task_name: string;
    due_date: Date;
    task_description: string;
};


export default Edit;