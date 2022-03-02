import React,{Component} from 'react';
import {Table,Menu,Feed,Image,List,Container,Search,Label,Icon,Grid} from 'semantic-ui-react';

class App extends Component{
  render(){
    return(


    <Container>

      <Table celled>
      <Table.Header>
      <Table.Row>
      <Table.HeaderCell colSpan ='2'>
        <Search placeholder ='Search Document...' style={{marginLeft : '900px'}} />
      </Table.HeaderCell>
      </Table.Row>
      <Table.Row textAlign ='center'>
      <Table.HeaderCell>Nama Document</Table.HeaderCell>
      <Table.HeaderCell>Jenis File</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
      <Table.Row>
      <Table.Cell positive>
       <Label ribbon>Panduan Belajar Javascript</Label>
      </Table.Cell>
      <Table.Cell textAlign='center'>PDF</Table.Cell>
      </Table.Row>
      <Table.Row >
      <Table.Cell>Panduan Belajar CSS</Table.Cell>
      <Table.Cell textAlign='center'>PDF</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>Panduan Belajar JS</Table.Cell>
      <Table.Cell textAlign='center'>PDF</Table.Cell>
      </Table.Row>
      </Table.Body>
      <Table.Footer>
      <Table.Row>
      <Table.HeaderCell colSpan='3'>
       <Menu floated='right' pagination>
         <Menu.Item as='a' icon>
           <Icon name='chevron left' />
         </Menu.Item>
         <Menu.Item as='a'>1</Menu.Item>
         <Menu.Item as='a'>2</Menu.Item>
         <Menu.Item as='a'>3</Menu.Item>
         <Menu.Item as='a'>4</Menu.Item>
         <Menu.Item as='a' icon>
          <Icon name='chevron right' />
         </Menu.Item>
       </Menu>
      </Table.HeaderCell>
      </Table.Row>
      </Table.Footer>
      </Table>
        <br />
      <Grid columns ={3}>
        <Grid.Column floated ='left'>
        <Feed size='large'>
                 <Feed.Event>
                   <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                   <Feed.Content>
                     <Feed.Summary>
                       <Feed.User>Anton</Feed.User> added you as a friend
                       <Feed.Date>3 Hour Ago</Feed.Date>
                     </Feed.Summary>
                     <Feed.Meta>
                       <Feed.Like>
                         <Icon name='like' />4 Likes
                       </Feed.Like>
                     </Feed.Meta>
                   </Feed.Content>
                 </Feed.Event>

                 <Feed.Event>
                   <Feed.Label icon='pencil' />
                   <Feed.Content>
                     <Feed.Summary>
                       You submitted a new post to the page
                       <br/>
                       <Feed.Date>3 days ago</Feed.Date>
                     </Feed.Summary>
                     <Feed.Extra text>
                       Saya senang belajar Bahasa Pemograman
                     </Feed.Extra>
                     <Feed.Meta>
                       <Feed.Like>11 Likes</Feed.Like>
                     </Feed.Meta>
                   </Feed.Content>
                 </Feed.Event>

                 <Feed.Event>
                   <Feed.Label image=' https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                   <Feed.Content>
                     <Feed.Date>4 days ago</Feed.Date>
                     <Feed.Summary>
                       David added 2 new Images
                     </Feed.Summary>

                     <Feed.Extra images>
                       <a>
                         <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png ' />
                       </a>
                       <a>
                         <img src=' https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
                       </a>
                     </Feed.Extra>
                       <Icon name='like' />
                     <Feed.Meta like='2 Likes' />
                   </Feed.Content>
                 </Feed.Event>
                </Feed>
        </Grid.Column>
        <Grid.Column floated ='right'>
        <h3> Website yang Terkait</h3>
          <List>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.Google.com'>Google</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.Facebook.com'>Facebook</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.semantic-ui.com'>Semantic UI</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.niomic.com'>Niomic</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.react-bootstrap.netlify.app'>React</a>
              </List.Content>
            </List.Item>
         </List>
         </Grid.Column>
      </Grid>
    </Container>
  )
}
}

export default App;
