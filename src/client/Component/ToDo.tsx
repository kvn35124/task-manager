import * as React from 'react';

class ToDo extends React.Component<IToDoProps, IToDoState>{
    constructor(props: IToDoProps) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <div className="col-4">
                <div className="card shadow">
                    <div className="card-header">
                        To Do
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">To Do Test</li>
                        <li className="list-group-item">To Do Test</li>
                        <li className="list-group-item">To Do Test</li>
                    </ul>
                </div>
            </div>
        )
    }
}


interface IToDoProps { };
interface IToDoState { };


export default ToDo;