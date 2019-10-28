import React, { Component } from 'react'
import { Image, ScrollView } from 'react-native'
import { Container, Button, Text, Accordion, Badge, Content, Card, CardItem, Left, Right, Thumbnail, Body, Icon, Footer, FooterTab, Header, Title } from 'native-base'

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 2" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 3" }
];

class App extends Component {
  render(){
    return(
      <Container>
        {/* Membuat Header */}
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>

        <ScrollView style={{marginTop: 10}}>
          <Button>
            <Text>Button Native Base</Text>
          </Button>

          {/* Membuat Accordion */}
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
            icon="add"
              expandedIcon="remove"
              iconStyle={{ color: "green" }}
              expandedIconStyle={{ color: "red" }}
          />

          {/* Membuat Badge */}
          <Badge style={{ backgroundColor: 'blue' }}>
            <Text>2</Text>
          </Badge>

          {/* Membuat Card */}
          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'Image URL'}} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'https://images.pexels.com/photos/2227826/pexels-photo-2227826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{height: 150, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'Image URL'}} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'https://images.pexels.com/photos/2227826/pexels-photo-2227826.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{height: 150, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          </Content>
        </ScrollView>

        {/* Membuat FooterTab */}
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
            <Button style={{backgroundColor: 'red'}}>
              <Icon name="card" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default App