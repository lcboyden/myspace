import React from "react";
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Card, Button, Icon,} from 'semantic-ui-react';

class Home extends React.Component {
  state = { patrons: [], }; 

  componentDidMount() {
    axios.get("/api/patrons")
    .then( res => this.setState({ patrons: res.data, }))
  }

  sample = () => {
    const { patrons, } = this.state; 
    if (!patrons.length) return null;
    const index = Math.floor(Math.random() * patrons.length);
    return patrons[index];
  }

  downVote = (id) => {
    const { patrons, } = this.state; 
    this.setState({ patrons: patrons.filter( p => p.id !== id), });
  }

  upVote = (id) => {
    const { patrons, } = this.state; 
    axios.put(`/api/patrons/${id}`)
    .then( () => this.setState({ patrons: patrons.filter( p => p.id !== id), }))
  }

  render() {
    const patron = this.sample();
    if (patron) {
      return (
        <div>
          <br />
          <Header as='h1'>Choose Your Friends</Header>
          <br />
          <Card key={patron.id}>
            <Card.Content>
              <Card.Header>{ patron.name }</Card.Header>
              <Card.Description>
                "{ patron.quote }"
              </Card.Description>
              <Card.Description >
                House { patron.house }
              </Card.Description>
              <Card.Meta> Lives in: {patron.city} </Card.Meta>
            </Card.Content>

            <Card.Content extra>
              <Button 
                color="red" 
                icon 
                basic 
                onClick={() => this.downVote(patron.id)}>
                <Icon name="thumbs down" />
              </Button>
              <Button
                color="green"
                icon
                basic
                onClick={() => this.upVote(patron.id)}>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
          <Link to="/friends">
            <Button color="blue">
              My Friends
            </Button>
          </Link>
        </div>
      );
    } else {
        return <Header textAlign="center">Sorry, you've exhausted the Seven Kingdoms. Try Essos?</Header>
    }
  }


}

export default Home;
