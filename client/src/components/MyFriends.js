import React from 'react';
import axios from 'axios';
import { Card, Divider} from 'semantic-ui-react';

class MyFriends extends React.Component {
  state = { patrons: [], };

  componentDidMount() {
    axios.get('/api/my_friends')
      .then( res => this.setState({ patrons: res.data, }) );
  }

  render () {
    const { patrons, } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { patrons.map( patron =>
          <Card key={patron.id}>
            <Card.Content>
              <Divider />
              <Card.Header>{ patron.name }</Card.Header>
            </Card.Content>
          </Card>
          )}
      </Card.Group>
    )
  }
}

export default MyFriends;