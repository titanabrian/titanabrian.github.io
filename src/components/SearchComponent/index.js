import { Heading, Pane, Paragraph, SearchInput } from 'evergreen-ui';
import React from 'react';
import './main.css';

const notFoundSearch = (findString) => <Pane
  display="box"
  alignItems="center"
  justifyContent="center"
>
  <Paragraph>Oops, i can't find <strong>" {findString} "</strong> :( </Paragraph>
</Pane>

const about = <Pane
  display="box"
  alignItems="center"
  justifyContent="center"
>
  <Heading
  size={800}
  align="center"
  >#About</Heading>
  <Paragraph
    size={400}
    align="justify"
    marginTop="2%"
  >An emphatic yet dedicated man is suits features to describe me as a person. I have an
  excellent work ethic, high integrity of what I aim to achieve. My confidence in myself is second
  to none, I believe if I can do it, then I will be. I have strong analytical skills and good at
  teamwork. I am experienced in programming, machine learning, and website development. I
  can easily adapt to new frameworks and technologies </Paragraph>
</Pane>

class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInputValue: null
    };
  }

  onChangeSearchHandle (event) {
    this.setState({
      searchInputValue:event.target.value
    });
  }


  render () {
    return <Pane
    display="box"
    alignItems="center"
    justifyContent="center"
  >
    <Pane
      display="flex"
    >
      <img
        className="hello-image"
        alt="hello"
        src="/pixeltrue-support.png"
      ></img>
    </Pane>
   <SearchInput
    marginBottom="4%"
    placeholder="Find something about me"
    width="100%"
    onChange={this.onChangeSearchHandle.bind(this)}
    />
    { this.state.searchInputValue ? notFoundSearch(this.state.searchInputValue) : about }
  </Pane>
  }
}

export default SearchBarComponent
