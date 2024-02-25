import React, { Component } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Experience from "../pages/experience/Experience";
import Education from "../pages/education/Education";
import Projects from "../pages/projects/projects";
// import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";

export default class Main extends Component {
    render() {
        const theme = this.props.theme;
        console.log(theme);

        return(
            <div>
                
                <HashRouter basename="/">
                    <Routes>
                        <Route 
                          path="/" 
                          exact
                          element={<Home {...this.props} theme={this.props.theme} />}
                        />

                        <Route 
                          path="/home" 
                          exact
                          element={<Home {...this.props} theme={this.props.theme} />}
                        />

                        <Route
                            path="/experience"
                            exact
                            element={
                                <Experience {...this.props} theme={this.props.theme} />
                            }
                        />

                        <Route
                            path="/education"
                            exact
                            element={ 
                                <Education {...this.props} theme={this.props.theme} />
                            }
                        />

                        <Route
                            path="/projects"
                            exact
                            element={ 
                                <Projects {...this.props} theme={this.props.theme} />
                            }
                        />

                        {/* <Route
                            path="/opensource"
                            exact
                            element={ 
                                <Opensource {...this.props} theme={this.props.theme} />
                            }
                        /> */}

                        <Route
                            path="/contact"
                            exact
                            element={ 
                                <Contact {...this.props} theme={this.props.theme} />
                            }
                        />
                    </Routes>
                </HashRouter>
            </div>
        );
    }
}