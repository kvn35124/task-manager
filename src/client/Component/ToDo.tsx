import * as React from 'react';

class ToDo extends React.Component<IToDoProps, IToDoState>{
    constructor(props: IToDoProps) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <h1>This is the to do component</h1>
        )
    }
}


interface IToDoProps {};
interface IToDoState {};


export default ToDo;