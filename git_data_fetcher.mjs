import fetch from "node-fetch";
import fs from "fs";


const openSource = {
    githubConvertedToken : "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",
    githubUsername: "cnu1328",
};

const query_pr = {
    query: `
    query {
        user(login: "${openSource.githubUsername}") {
            pullRequests(last : 100, orderBy: {field: CREATED_AT, direction: DESC}) {
                totalCount
                nodes {
                    id
                    title
                    url
                    state
                    mergeBy {
                        avatarUrl
                        url
                        login
                    }
                    createdAt
                    number
                    changedFiles
                    additioins
                    deletions
                    baseRepository {
                        name
                        url
                        owner {
                            avatarUrl
                            login
                            url
                        }
                    }
                }
            }
        }
    }
    `,
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
    "Content-Type": "application/json",
    Authorization: "bearer" + openSource.githubConvertedToken,
};

fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(query_pr),
})
   .then((response) => response.text())
   .then((txt) => {
     const data = JSON.parse(txt);
     var cropped = { data : [] };
     cropped["data"] = data["data"]["user"]["pullRequests"]["nodes"];
 
     var open = 0;
     var closed = 0;
     var merged = 0;

     for(let i = 0; i < cropped["data"].length; i++) {
        if(cropped["data"][i]["state"] === "OPEN") open++;
        else if(cropped["data"][i]["state"] === "MERGED") merged++;
        else closed++;
     }

     cropped["open"] = open;
     cropped["closed"] = closed;
     cropped["merged"] = merged;
     cropped["totalCount"] = cropped["data"].length;

    console.log("Fetching the Pull Request Data.\n");

    fs.writeFile(
        "./src/shared/opensource/pull_requests.json",
        JSON.stringify(cropped),
        function(err) {
            if(err) {
                console.log(err);
            }
        }
    );

   })
   .catch((error) => console.log(JSON.stringify(error)));