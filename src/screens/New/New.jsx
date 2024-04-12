import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import choose_file from "../../assets/New/Choose_file.gif"
import "./New.css"
import { userInputs, productInputs } from "../../formSource";
import { useState } from "react";

function New(inputs) {

    // console.log(inputs.inputs[0].id)
    // console.log(inputs.title)

    const [file, setFile] = useState('');

    // console.log(inputs)
    // console.log(file)

    return(
        <div id="new">
            <Sidebar />            
            <div id="new-container">
                <Navbar />

                <div className="top">
                    <h1>{inputs.title}</h1>
                    {/* <h1>Add new user Cheking</h1> */}
                </div>

                <div className="bottom">

                    <div className="left">
                        <div className="img">
                            <img src=
                            {file ? URL.createObjectURL(file) : ""} alt="NO IMAGE" />
                        </div>
                    </div>

                    <div className="right">
                        <form>
                            <div className="formInput">
                                <p>Choose File:</p>
                                <label htmlFor="file">
                                <img src={choose_file} alt="Choose_file" className="icon" />
                                </label>
                                <input style={{display:'none'}} onChange={e=>setFile(e.target.files[0])} type="file" name="" id="file" />
                            </div>

                        {inputs.inputs.map(input => {
        
                            // console.log(input)
                            
                            return (      
                            
                            <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input type={input.type} 
                                placeholder={input.placeholder} />
                            </div> 

                            
                        )
                        }
                        )}
    
                            {/* <div className="formInput" key='01'>
                                <label>'name</label>
                                <input type='phone' 
                                placeholder='place' />
                            </div> */}

                        </form>
                    </div>

                    <div className="button-container">
                        <button className="learn-more">
                            <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Send Data</span>
                        </button> 
                    </div>

                </div>
            </div>
        </div>
    )
}

export default New;