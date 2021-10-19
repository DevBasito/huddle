import React from 'react';
import Mockup from '../images/mockup.svg';
class Main extends React.Component {
    render() {
        return (
            <>
                <div className='row container-fluid'>
                    <div className="col-md-6"> <img src={Mockup} alt="" width='100%' /> </div>
                    <div className="col-md-6 text-light text-center p-5 ">
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>Huddle re-imagines the way we build communities. You have a voice,
                         but so does your audience. Create connections with your users as you engage in genuine discussion.
                         </p>
                         <button className='btn btn-lg btn-light border-radius-3'>Register</button>
                    </div>
                </div>
            </>
        )
    }
}
export default Main;