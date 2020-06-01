import { HashRouter,Route,Switch} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from '../js/main_page';
class Routers extends React.Component {
    constructor(props){
      super(props);
      this.state={
      
      };
     
    }
    componentDidMount() {
      
    }
    render() {
       return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
            </Switch>
        </HashRouter>
      );
    }
  }
  export default Routers;