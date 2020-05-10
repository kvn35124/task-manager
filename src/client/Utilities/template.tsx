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


// ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION