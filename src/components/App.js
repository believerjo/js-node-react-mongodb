import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview'

class App extends React.Component {
  state = {
    pageHeader : 'Naming Contests'
  };
  componentDidMount(){
  }
  componentWillUnmount() {
  }
  render(props) {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.contents.map(contest => (
            <ContestPreview {...contest} />
          )}                  
        </div>
      </div>
    );
  }
}

export default App;