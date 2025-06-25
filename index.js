require('dotenv').config()
const express = require('express')
const app = express()
const port = 4001
const gitdata={
  "login": "AkshatGoel-321",
  "id": 112797136,
  "node_id": "U_kgDOBrkl0A",
  "avatar_url": "https://avatars.githubusercontent.com/u/112797136?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AkshatGoel-321",
  "html_url": "https://github.com/AkshatGoel-321",
  "followers_url": "https://api.github.com/users/AkshatGoel-321/followers",
  "following_url": "https://api.github.com/users/AkshatGoel-321/following{/other_user}",
  "gists_url": "https://api.github.com/users/AkshatGoel-321/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AkshatGoel-321/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AkshatGoel-321/subscriptions",
  "organizations_url": "https://api.github.com/users/AkshatGoel-321/orgs",
  "repos_url": "https://api.github.com/users/AkshatGoel-321/repos",
  "events_url": "https://api.github.com/users/AkshatGoel-321/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AkshatGoel-321/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 26,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2022-09-04T06:53:46Z",
  "updated_at": "2025-06-21T11:37:21Z"
}
app.get('/', (req, res) => {
  res.send('Hello dfdfdWorld!')
})
app.get('/github', (req, res) => {
    res.json(gitdata)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
