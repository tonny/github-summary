const apiPath = 'https://api.github.com';

class GithubServices {
  /**
   * Get users from github api
   * @param {number} since - The parameter represent from which user id will be
   * requested to github api.
   * @return {[Object]} To see details of object that response the server see the url below
   * https://developer.github.com/v3/users/#get-all-users
   */
  static getUsersSince(since) {
    return fetch(apiPath+'/users?since='+since)
      .then( result => result.json());
  }

  /**
   * Get repositories by a specific user from github api
   * @param {string} nickname
   * @return {[Object]} To see details of object that response the server see the url below
   * https://developer.github.com/v3/repos/#list-user-repositories
   */
  static getRepositoriesByNickname(nickname) {
    return fetch(apiPath+'/users/'+nickname+'/repos?type=all')
      .then( result => result.json());
  }
}

export default GithubServices;
