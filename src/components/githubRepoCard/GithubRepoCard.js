import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

function GithubRepoCard({repo, theme}) {

    function openRepoInNewTab(url) {
        const win = window.open(url, "_blank");
        win.focus();
    }
    
    return(
        <div>
            <Fade bottom duration={2000} distance="40px">
                <div 
                    className="repo-card-div"
                    key={repo.id}
                    onClick={() => openRepoInNewTab(repo.url)}
                    style={{backgroundColor: theme.highlight}}
                >
                    <div className="repo-name-div">
                        <i class="fa-solid fa-code"></i>
                        
                        <p className="repo-name" style={{color: theme.text}}>
                            {repo.name}
                        </p>
                    </div>

                    <p className="repo-description" style={{color: theme.text}}>
                        {repo.description}

                    </p>

                    <div className="repo-details SubTitle">
                        <p className="repo-creation-date" style={{ color: theme.secondaryText }}>
                            Created on {repo.createdAt.split("T")[0]}
                        </p>     
                    </div>

                    <ProjectLanguages className="repo-languages" logos={repo.languages} />

                </div>
            </Fade>
        </div>
    );
}

export default GithubRepoCard;