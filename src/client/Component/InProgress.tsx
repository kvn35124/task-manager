import * as React from 'react';

class InProgress extends React.Component<IInProgressProps, IInProgressState>{
    constructor(props: IInProgressProps) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <div className="col-md-4">
                <div className="card shadow">
                    <div className="card-header">
                        In Progress
                </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">To Do Test</li>
                        <li className="list-group-item">To Do Test</li>
                        <li className="list-group-item">To Do Test</li>
                        <li className="list-group-item">To Do Test</li>
                        <li className="list-group-item">To Do Test</li>
                    </ul>
                </div>
            </div>
        )
    }
}


interface IInProgressProps { };
interface IInProgressState { };


export default InProgress;