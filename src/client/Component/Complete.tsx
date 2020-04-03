import * as React from 'react';

class Complete extends React.Component<ICompleteProps, ICompleteState>{
    constructor(props: ICompleteProps) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <h1>This is the complete page</h1>
        )
    }
}


interface ICompleteProps {};
interface ICompleteState {};


export default Complete;