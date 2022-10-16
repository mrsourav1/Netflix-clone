import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screen/HomeScreen';
// import Nav from './Nav';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import LoginScreen from './screen/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from './features/userSlice';
import ProfileScreen from './screen/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch =  useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if (userAuth){
        //logged In 
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email: userAuth.email,
        }))
      } else{
        //logged out
        dispatch(logout())
      }
    });
    return unsubscribe;
  },[dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ?(
          <LoginScreen />
        ) : (
          <Routes>
            <Route  path='/profile' element={<ProfileScreen />}/>
            <Route  path="/" element={<HomeScreen />}>
              {/* <HomeScreen /> */}
            </Route>
          </Routes>
          )}
      </Router>
    </div>
  );
}


export default App;
