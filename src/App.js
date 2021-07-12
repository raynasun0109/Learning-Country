import React from 'react';
import styles from "./App.less";
import CountryList from "./pages/CountryList";
import CountryDetail from "./pages/CountryDetail";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home"
import {Switch,BrowserRouter as Router, Route} from 'react-router-dom';
import LearningList from "./pages/LearningList";
import About from "./pages/AboutUs"
class App extends React.Component {

  state={
    routers:[
      {
        exact:true,
        path:"/",
        component:Home
      },
      {
        exact:true,
        path:"/country",
        component:CountryList
      },
      {
        exact:true,
        path:"/country/:id",
        component:CountryDetail
      },
      {
        exact:true,
        path:"/about",
        component:About
      },
      {
        exact:true,
        path:"/learningList",
        component:LearningList
      },
      {
        exact:false,
        path:"*",
        component:NotFound
      }

    ]
  }


  render(){
    const {routers} = this.state

  return (
    <div className={styles.app}>
      <Router>
        <Header/>
        <div className={styles.childContainer}>
        <Switch>
          {
            routers.map((item,index)=>{

              return (
                  <Route key={index} exact={item.exact} path={item.path} component={item.component} />
              )

            })
          }
        </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
  }
}

export default App;
