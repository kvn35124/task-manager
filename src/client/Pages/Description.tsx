import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { json } from '../../server/utilities/api';

class Description extends React.Component<IDescriptionProps, IDescriptionState>{
    constructor(props: IDescriptionProps) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            date: new Date,
            description: ''
        }
    }


    async componentDidMount() {
        try {
            let [task]: any = await json(`/api/tasks/${this.props.match.params.id}`)
            this.setState({
                id: task.id,
                title: task.task_name,
                date: task.due_date,
                description: task.task_description
            })
        } catch (error) {
            console.log(error);
        }
    }


    async handleDelete() {
        event.preventDefault()
        try {
            let results = await json(`/api/tasks/${this.props.match.params.id}`, 'DELETE');
            console.log(results)
            if (results) {
                this.props.history.push('/');
            }
        } catch (error) {
            console.log(error)
        }
    }



    render() {
        return (
            <section className="row">
                <article className="col">
                    <div className="card">
                        <div className="card-body text-center">
                            <h1 className="task title">{this.state.title}</h1>
                            {/* <p className="due_date">{this.state.date}</p> */}
                            <p className="description">{this.state.description}</p>
                            <div className="d-flex justify-content-around"> 
                                <Link to={`/edit/${this.state.id}`} className="btn btn-primary">Edit</Link>
                                <Link to={'/'} className="btn btn-success">Back to Events</Link>
                                <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleDelete()} className="btn btn-danger">Delete</button>
                                
                            </div>

                        </div>
                    </div>
                </article>
            </section>
        )
    }
}


interface IDescriptionProps extends RouteComponentProps<{ id: string }> { };
interface IDescriptionState {
    title: string;
    id: number;
    date: Date;
    description: string;
};


export default Description;






