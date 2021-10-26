import React from 'react';
import Mockup from '../images/mockup.svg';
import './Main.css';
class Main extends React.Component {
    render() {
        return (
            <>
                <div className='row '>
                    <div className="col-md-7"> <img src={Mockup} alt="" width='100%' /> </div>
                    <div className="col-md-5 text-light p-5 " id='content'>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>Huddle re-imagines the way we build communities. You have a voice,
                            but so does your audience. Create connections with your users as you engage in genuine discussion.
                        </p>
                        <button className='btn btn-lg btn-light rounded-pill px-5 py-2 mt-2' id="hov">Register</button>
                    </div>
                </div>
                <div className='col-sm-4 w-100 text-light px-5' id="icon">
                    <i className='fa fa-facebook fa-2x mx-3' id="hov" ></i>
                    <i className='fa fa-twitter fa-2x mx-3' id="hov"></i>
                    <i className='fa fa-instagram fa-2x mx-3'id="hov"></i>
                </div>
            </>
        )
    }
}
export default Main;