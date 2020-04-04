import * as React from 'react';

class Complete extends React.Component<ICompleteProps, ICompleteState>{
    constructor(props: ICompleteProps) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <div className="col-4">
                <div className="card shadow">
                    <div className="card-header">
                        Completed
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


interface ICompleteProps {};
interface ICompleteState {};


export default Complete;