import React, { Component} from 'react';
import { Button,
         Grid,
         Row,
         Col,
         Thumbnail,
         Image
       } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import GithubServices from './../../services/GithubService';

class Users extends Component {

  constructor(props) {

    super(props);

    this.state = {
      users : [],
      since: 0
    };

  }

  componentWillMount() {
    GithubServices.getUsersSince(this.state.since)
      .then( usersFromServer => {
        let sizeUsers = usersFromServer.length - 1;
        let nextBunch = sizeUsers > 0 ? usersFromServer[sizeUsers].id : this.state.since;
        this.setState({ users : usersFromServer, since : nextBunch});
      });
  }

  /*
   * Function to load more users from github, unfortunately there is not a option
     to handle pagination, but using a pointer that handle the last id from user
     we can load the next bunch of users, by default is thirty. see more in
     https://developer.github.com/v3/users/#get-all-users
   */
  loadMoreUsers = () => {
    GithubServices.getUsersSince(this.state.since)
      .then(usersFromServer => {
        let sizeUsers = usersFromServer.length - 1;
        let nextBunch = sizeUsers > 0 ? usersFromServer[sizeUsers].id : this.state.since;
        this.setState({ users : this.state.users.concat(usersFromServer), since : nextBunch});
      });
  }

  renderUserGrid = () => {
    return this.state.users.map( (user, index) => {
      return (
        <Col xs={6} md={3} key={index}>
           <Thumbnail>
             <Image src={user.avatar_url}  circle height="150" width="150" />
             <h3>{user.login}</h3>
             <a href={user.html_url} target="_blank">github repository</a>
             <p>
               <Link to={`/user/${user.login}`}>See repositories</Link>
             </p>
          </Thumbnail>
        </Col>
      );
    });
  }

  render() {
    const renderUser = this.renderUserGrid();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <p>You can see all active github users</p>
        </header>
        <div>
          <Grid>
            <Row>
              {renderUser}
            </Row>
          </Grid>
        </div>
        <Button onClick={this.loadMoreUsers}>Load more</Button>
      </div>
    );
  }
}

export default Users;
