import * as React from 'react';
import Calendar from 'react-calendar'

class Create extends React.Component<ICreateProps, ICreateState>{
    constructor(props: ICreateProps) {
        super(props);
        this.state = {
            startDate: new Date()
        }
    }



    render() {
        return (
            <form className="border border-dark rounded mt-1">
                <div className="form-row">
                    <div className="form-group col-6 m-2">
                        <label>Task Name:</label>
                        <input type="text" className="form-control" placeholder="What is the name of the task..." />
                    </div>
                    <div className="form-group col-4 m-2">
                        <label>Pick a Due Date:</label>
                        <Calendar />
                    </div>
                    <div className="form-group m-2">
                        <label>Description:</label>
                        <textarea name="" id="" cols={140} rows={10}  className="form-control" placeholder="Task Description..."></textarea>
                    </div>
                </div>
                <button className="btn btn-dark ml-2 mb-2">Submit</button>
            </form>
        )
    }
}


interface ICreateProps { };
interface ICreateState { };


export default Create;