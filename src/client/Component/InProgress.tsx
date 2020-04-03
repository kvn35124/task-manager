import * as React from 'react';

class InProgress extends React.Component<IInProgressProps, IInProgressState>{
    constructor(props: IInProgressProps) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <h1>This is progress component</h1>
        )
    }
}


interface IInProgressProps {};
interface IInProgressState {};


export default InProgress;