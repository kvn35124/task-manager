import * as React from 'react';

class Template extends React.Component<ITemplateProps, ITemplateState>{
    constructor(props: ITemplateProps) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <h1>This is a template</h1>
        )
    }
}


interface ITemplateProps {};
interface ITemplateState {};


export default Template;