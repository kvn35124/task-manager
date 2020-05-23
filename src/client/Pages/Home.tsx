import * as React from 'react';
import ToDo from '../Component/ToDo';
import InProgress from '../Component/InProgress';
import Complete from '../Component/Complete';
import Create from '../Component/Create';
import { RouteComponentProps } from 'react-router-dom';

class Home extends React.Component<IHomeProps, IHomeState>{
    constructor(props: IHomeProps) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <div className="row justify-content-center">
                <h2 className="col-12 text-center">Manage Your Tasks</h2>
                <div className="row justify-content-center">
                    <ToDo />
                    <InProgress />
                    <Complete />
                </div>
                <h2 className="col-12 text-center mt-3">Create a New Task</h2>
                <Create />
            </div>
        )
    }
}


interface IHomeProps extends RouteComponentProps { };
interface IHomeState { };


export default Home;