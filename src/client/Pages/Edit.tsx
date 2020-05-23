import * as React from 'react';
import Calendar from "react-calendar";
import { Link } from 'react-router-dom';

class Edit extends React.Component<IEditProps, IEditState>{
    constructor(props: IEditProps) {
        super(props);
        this.state = {
            title: '',
            date: new Date,
            description: ''
        }
    }



    render() {
        return (
            <section className="row">
                <article className="col d-flex justify-content-center">
                    <form className="form-group border shadow border-dark rounded p-3">
                        <h1 className="text-center">Edit This Task</h1>
                        <label className="mt-2">Task:</label>
                        <input type="text" className="form-control" />
                        <Calendar className="mt-2" />
                        <label className="mt-2">Task Description:</label>
                        <textarea className="form-control" name="" id="" cols={30} rows={10} value={this.state.description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ description: e.target.value })}></textarea>
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-primary mt-2">Submit</button>
                            <Link to={'/'} className="btn btn-success mt-2">Back to Tasks</Link>
                        </div>
                    </form>
                </article>
            </section>
        )
    }
}


interface IEditProps { };
interface IEditState {
    title: string;
    date: Date;
    description: string;
};


export default Edit;