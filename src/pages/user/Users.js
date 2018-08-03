import React, { Component } from 'react';
import GithubServices from './../../services/GithubService';
import { Button, Grid, Row, Col, Thumbnail, Image } from 'react-bootstrap';

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
             <a href={user.html_url} target="_blank">github repository url</a>
             <p>
               See repositories
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
