import React, { Component } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio";
import ProjectsData from "../../shared/opensource/projects.json";
import "./projects.css";
import ProjectImg from "./projectImg";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";

class Projects extends Component {
    render() {
        const theme = this.props.theme;

        const gitHubProjects = ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme}/>
        });
        
        return(
            <div className="projects-main">
                <Header theme={theme} />

                <div className="basic-projects">
                    <Fade bottom duration={2000} distance="40px">
                        <div className="projects-heading-div">
                            <div className="projects-heading-img-div">
                                <ProjectImg theme={theme} />
                            </div>

                            <div className="projects-heading-text-div">
                                <h1 className="projects-heading-text" style={{color: theme.text}}>
                                    {projectsHeader.title}
                                </h1>

                                <p className="projects-header-detail-text subTitle" style={{color: theme.secondaryText}}>
                                    {projectsHeader.description}
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div className="repo-cards-div-main">
                    {gitHubProjects}
                </div>

                <Button
                    text={"More Projects"}
                    className="project-button"
                    href={greeting.githubProfile}
                    newTab={true}
                    theme={theme}
                ></Button>

                <Footer theme={theme} />
                <TopButton theme={theme} />
            </div>
        );
    }
}

export default Projects;

