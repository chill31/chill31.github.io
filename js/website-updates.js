function formatGitDate(inputDate, format) {
  //parse the input date
  const date = new Date(inputDate);

  //extract the parts of the date
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();    

  //replace the month
  format = format.replace("MM", month.toString().padStart(2,"0"));        

  //replace the year
  if (format.indexOf("yyyy") > -1) {
      format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
      format = format.replace("yy", year.toString().substr(2,2));
  }

  //replace the day
  format = format.replace("dd", day.toString().padStart(2,"0"));

  return format;
}

const flexContainer = document.querySelector(".flex");

fetch("https://api.github.com/repos/chill31/chill31.github.io/commits").then(res => res.json()).then((mainData) => {

  const commits = mainData;
  console.log(mainData);

  commits.forEach(commit => {

    const createdCard = document.createElement("div");
    createdCard.classList.add("commit");

    let verifiedContent = ``;
    if(commit.commit.verification.verified) {
      verifiedContent = `
    <i class="fa-solid fa-check"></i>      
`
    } else {
      verifiedContent = ``;
    }
    
    fetch(commit.commit.url).then(res => res.json()).then(url => {

      createdCard.innerHTML = `
<div class="commit-info">
  <img src="${commit.author.avatar_url}" alt="Author" class="author-pic">
  <span class="author-name">${commit.commit.author.name}</span>
</div>

<a class="commit-message" href="${url.html_url}">${commit.commit.message}</a>

<div class="commit-extra-info">
  <div class="verified">
    ${verifiedContent}
  </div>

  <span class="commit-date">${formatGitDate(commit.commit.committer.date, "dd-MM-yyyy")}</span>
</div>
`;
      flexContainer.append(createdCard);

    });

  })

});