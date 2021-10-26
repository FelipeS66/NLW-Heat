//sintaxa de um objeto variavel const ou let "nomeDaVariavel" = {"nomeDoObjeto:"valor do objeto, }
const LinksSocialMedia = {
  github: 'FelipeS66',
  youtube: 'channel/UCqERHnfxKKcbhMtRjUNMRIg',
  facebook: 'FelipeS66',
  instagram: 'felipe.s66',
  twitter: 'Felip_S66'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //  alert(li.children[0].href)
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
