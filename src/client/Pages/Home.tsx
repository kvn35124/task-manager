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
                <ToDo />
                <InProgress />
                <Complete />
                <Create />
            </div>
        )
    }
}


interface IHomeProps {};
interface IHomeState {};


export default Home;