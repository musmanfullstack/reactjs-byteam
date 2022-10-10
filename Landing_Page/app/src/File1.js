import React, {useState} from "react";
import './file1.css';
function File1(){
    const [data,setData]=useState(null)
    function getData(val){
        setData(val.target.value)
    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <div className={"d-flex justify-content-start"}>
                        <a style={{color:"white"}} className="navbar-brand" href="#">Navbar</a>
                        {/*<img src={"require(./images/unial.png)"} alt="" height={"20px"}/>*/}
                        <img src="images/unial.png" height={"50px"} alt=""/>
                    </div>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item me-3">
                                <a style={{color:"white"}} className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item me-3">
                                <a style={{color:"white"}} className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item me-3">
                                <a style={{color:"white"}} className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item me-5">
                                <a style={{color:"white"}} className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="d-flex me-5" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className={"div1"}>
                <div id={"div2"}>
                    <h1>SPACE</h1>
                    <h4>Research Center</h4>
                    <p><i>An international space research organisation that involve<br/> to discover the new space things.</i></p>
                    <p>{data}</p>
                    <input type="text" onChange={getData} placeholder={"Enter Your Email"}/>
                    <button className={"btn btn-dark"}>Submit</button>
                </div>
            </div>
            <div className={"div4"}>
                <h5>Fun and engaging education</h5>
                <h1><b>ABOUT THE EDUCATION FOUNDATION</b></h1>
                <p><i>The Manned Space Flight Education Foundation inonprofit educational foundation offering extensive science education<br/> programs and a space museum. The cornerstone of its education mission is Space Center Houston, a leading science and<br/> space exploration learning center. It is one of Houston’s top attractions, the area’s No. 1 attraction for international visitors,<br/> the Official Visitor Center of NASA Johnson Space Center and a Smithsonian Affiliate.</i></p>
            </div>
            <div className={"div5"}>
                <div id={"div6"}>
                    <img src={require("./images/2.jpg")} height={"550px"} width={"650px"} alt=""/>
                </div>
                <div id={"div7"}>
                    <h4>To the Moon and Beyond</h4>
                    <h1><b>WELCOME<br/> ABOARD</b></h1>
                    <p>Space Center Houston has welcomed nearly 20<br/> million visitors and currently hosts more than 1<br/> million visitors annually in its 250,000-square-<br/>foot educational complex. Space Center<br/> Houston has a $73 million impact on the<br/> greater Houston economy, according to a 2016<br/> economic study by Jason Murasko and Stephen<br/> Cotten, associate professors of economics at the<br/> University of Houston – Clear Lake.</p>
                </div>
            </div>
            <div className={"div8"}>
                <div id={"div9"}>
                    <form className={"container pt-5 ms-5"}>
                        <div className="mb-3 w-50">
                            <label htmlFor="exampleInputEmail1" className="form-label"><h6>Name</h6></label>
                            <input type="name" className="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
                            <div id="namelHelp" className="form-text">We'll never share your Name with anyone else.</div>
                        </div>
                        <div className="mb-3 w-50">
                            <label htmlFor="exampleInputEmail1" className="form-label"><h6>Email address</h6></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 w-50">
                            <label htmlFor="exampleInputPassword1" className="form-label"><h6>Password</h6></label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div id={"div10"}>
                    <img src={require("./images/6.jpg")} height={"430px"} alt=""/>
                </div>
            </div>
            <div className={"div11 container"}>
                <div id={"div12"}>
                    <img src={require("./images/3.jpeg")} height={"400px"} width={"500px"} alt=""/>
                    <p><i>There is always something new at Space Center Houston with an<br/> amazing array of traveling exhibits and astounding events.</i></p>
                </div>
                <div id={"div13"}>
                    <img src={require("./images/4.jpeg")} height={"400px"} width={"500px"} alt=""/>
                    <p><i>Space Center Houston has the world’s largest collection of moon<br/> rocks and lunar samples for public view.</i></p>
                </div>
            </div>
            <div className={"div14"}>
                <h1>EMPIRE STATE BUILDING</h1>
                <p>350 5th Ave, New York, NY 10118<br/>1 212-736-3100<br/>contacts@esbnyc.com</p>
                <button className={"btn btn-secondary"}>Contact Us</button>
            </div>
            <div className={"div15"}>
                <h4>Certified Autism Center</h4>
                <h1><b>EDUCATIONAL COMPLEX AND<br/> SPACE MUSEUM</b></h1>
                <p>The certification process involves rigorous training for staff, inspections and improvements that enable Space Center<br/> Houston to better welcome and accommodate guests with autism spectrum disorder and other sensory and cognitive<br/> challenges. Space Center Houston was always welcoming to guests with special needs,” McMahon said. “I was able to<br/> help support that commitment by leading informal training for my instructor colleagues on working with guests with<br/> disabilities, including autism.</p>
            </div>
        </div>
    );
}
export default File1;
