import * as React from 'react';

class Home extends React.Component<IHomeProps, IHomeState>{
    constructor(props: IHomeProps) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <h1>This is the Home page</h1>
        )
    }
}


interface IHomeProps {};
interface IHomeState {};


export default Home;