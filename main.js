const Http = new XMLHttpRequest();
const urlLeetCode='https://leetcode.com/graphql';
const leetCodeGraphqlQuery = {
    query:`{
        matchedUser(username: "sidechko") {
            contestBadge {
              name
              expired
              hoverText
              icon
            }
            username
            githubUrl
            twitterUrl
            linkedinUrl
            profile {
                ranking
                userAvatar
                realName
                aboutMe
                school
                websites
                countryName
                company
                jobTitle
                skillTags
                postViewCount
                postViewCountDiff
                reputation
                reputationDiff
                solutionCount
                solutionCountDiff
                categoryDiscussCount
                categoryDiscussCountDiff
            }
      }
    }`
}
let leetCodeResponseText;

Http.withCredentials = true
Http.responseType = 'json';
Http.open("POST", urlLeetCode);
Http.setRequestHeader('Content-Type', 'application/json');
Http.onload = function (){
    leetCodeResponseText = Http.response;
    console.log(leetCodeResponseText)
}
Http.onerror = function (){
    console.log(Http.status)
    console.log(Http.statusText)
}
Http.send(JSON.stringify(leetCodeGraphqlQuery));

