import * as React from 'react';
import { Link } from 'react-router-dom';

class Description extends React.Component<IDescriptionProps, IDescriptionState>{
    constructor(props: IDescriptionProps) {
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
                <article className="col">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="task title"></h1>
                            <p className="due_date"></p>
                            <p className="description"></p>
                            <Link to={`/edit/:id`} className="btn btn-primary">Edit</Link>
                            <button className="btn btn-danger">Delete</button>

                        </div>
                    </div>
                </article>
            </section>
        )
    }
}


interface IDescriptionProps {};
interface IDescriptionState {
    title: string;
    date: Date;
    description: string;
};


export default Description;






