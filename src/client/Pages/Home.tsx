import * as React from 'react';
import ToDo from '../Component/ToDo';
import InProgress from '../Component/InProgress';
import Complete from '../Component/Complete';
import Create from '../Component/Create';

class Home extends React.Component<IHomeProps, IHomeState>{
    constructor(props: IHomeProps) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <div className="row">
                <h2>Manage Your Tasks</h2>
                <ToDo />
                <InProgress />
                <Complete />
                <h2>Create a New Task</h2>
                <Create />
            </div>
        )
    }
}


interface IHomeProps {};
interface IHomeState {};


export default Home;