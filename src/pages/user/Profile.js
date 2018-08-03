import React, { Component } from 'react';
import { Grid,
         Row,
         Col,
         Panel
       } from 'react-bootstrap';

import GithubServices  from '../../services/GithubService';

class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nickname : '',
      repositories : []
    };
  }

  componentWillMount() {
    let nickname = this.props.match.params.nickname;
    GithubServices.getRepositoriesByNickname(nickname.trim())
      .then( reposFromServer => {
        this.setState({repositories:reposFromServer, nickname:nickname});
      });
  }

  renderRepositoriesGrid = () => {
    return this.state.repositories.map( (repository, index) => {
      return (
        <Col xs={6} md={3} key={index}>
          <Panel>
            <Panel.Heading>{repository.name}</Panel.Heading>
            <Panel.Body>
              <a href={repository.html_url} target="_blank">{repository.full_name}</a>
              <p><strong>Description :</strong> {repository.description}</p>
              <p><strong>Issues :</strong> {repository.open_issues}</p>
              <p><strong>Open Issues :</strong> {repository.open_issues_count} </p>
              <p><strong>Forks :</strong> {repository.forks_count}</p>
            </Panel.Body>
          </Panel>
        </Col>
      );
    });
  }

  render() {
    let renderRepositories = this.renderRepositoriesGrid();
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Repositories created by {this.state.nickname}</h1>
        </header>
        <Grid fluid={true}>
          <Row className="show-grid">
            {renderRepositories}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Profile;
