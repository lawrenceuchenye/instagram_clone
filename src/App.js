import logo from './logo.svg';
import {useState} from "react";

import Header from "./components/Header";
import Post from "./components/Post";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
function App() {
  const [showForm,setShowForm]=useState(false);
  const [showLoginForm,setShowLoginForm]=useState(false);

  const authFormToggle=(isLoginForm)=>{
    setShowForm(!showForm);
    setShowLoginForm(isLoginForm);
  }

  return (
    <div className="App">
     <div className="">
     {showForm &&
       (<div className="w-full h-full absolute" style={{background:"rgba(0,0,0,0.3)"}}>
          {showLoginForm ?
            (<LoginForm />)
          :
           (<SignupForm />)
          }
        </div>)
     }
     </div>

      <Header authFormToggle={authFormToggle}/>
      <div style={{overflowY:"scroll",height:"77vh"}}>
         <Post body="#React is a very cool front-end framework"  imgUrl="https://cdn-contents.anymindgroup.com/corporate/wp-uploads/2021/09/28211251/logo-og.png" userName="LawUche" />
         <Post imgUrl="https://cdn-contents.anymindgroup.com/corporate/wp-uploads/2021/09/28211251/logo-og.png" userName="LawUche" />
         <Post imgUrl="https://cdn-contents.anymindgroup.com/corporate/wp-uploads/2021/09/28211251/logo-og.png" userName="LawUche" />
       </div>
    </div>
  );
}

export default App;
