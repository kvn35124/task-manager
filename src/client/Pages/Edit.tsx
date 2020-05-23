import * as React from 'react';
import Calendar from "react-calendar";
import { Link, RouteComponentProps } from 'react-router-dom';
import { json } from '../../server/utilities/api';

class Edit extends React.Component<IEditProps, IEditState>{
    constructor(props: IEditProps) {
        super(props);
        this.state = {
            title: '',
            date: new Date,
            description: ''
        }
    }


    async componentDidMount() {
        try {
            let [results]: any = await json(`/api/tasks/${this.props.match.params.id}`)
            this.setState({
                title: results.task_name,
                description: results.task_description
            })
        } catch (error) {
            console.log(error);
        }
    }

    onChange = date => {
        this.setState({ date });
        console.log(this.state.date);
    }

    async handleSubmit() {
        event.preventDefault();
        let updatedTask = {
            title: this.state.title,
            date: this.state.date,
            description: this.state.description
        }
        try {
            let results = await json(`/api/tasks/${this.props.match.params.id}`, 'PUT', updatedTask);
            console.log(results);
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
                        <input type="text" className="form-control" value={this.state.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ title: e.target.value })} />
                        <Calendar className="mt-2" value={this.state.date} onChange={this.onChange} />
                        <label className="mt-2">Task Description:</label>
                        <textarea className="form-control" name="" id="" cols={30} rows={10} value={this.state.description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ description: e.target.value })}></textarea>
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
    title: string;
    date: Date;
    description: string;
};


export default Edit;