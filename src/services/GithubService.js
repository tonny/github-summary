const apiPath = 'https://api.github.com';

class GithubServices {
  /**
   * Get users from github api
   * @param {number} since - The parameter represent from which user id will be
   * requested to github api.
   * @return {[Object]} The response from server is a list whit the following objects
   [
    {
        "login": "bs",
        "id": 68,
        "node_id": "MDQ6VXNlcjY4",
        "avatar_url": "https://avatars0.githubusercontent.com/u/68?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/bs",
        "html_url": "https://github.com/bs",
        "followers_url": "https://api.github.com/users/bs/followers",
        "following_url": "https://api.github.com/users/bs/following{/other_user}",
        "gists_url": "https://api.github.com/users/bs/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/bs/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/bs/subscriptions",
        "organizations_url": "https://api.github.com/users/bs/orgs",
        "repos_url": "https://api.github.com/users/bs/repos",
        "events_url": "https://api.github.com/users/bs/events{/privacy}",
        "received_events_url": "https://api.github.com/users/bs/received_events",
        "type": "User",
        "site_admin": false
    },
    ....
  */
  static getUsersSince(since) {
    return fetch(apiPath+'/users?since='+since)
      .then( result => result.json());
  }
}

export default GithubServices;
