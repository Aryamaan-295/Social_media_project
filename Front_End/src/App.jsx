import React,{ Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import './mediaqueries.css';
import Loading from './pages/Loading/Loading';

const Signup = React.lazy(() => import('./pages/Signup/Signup'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const Error = React.lazy(() => import('./pages/Error/Error'));


function App() {

  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Suspense fallback={ <Loading /> }>
            <Routes>
              <Route path='/' element={ <Signup /> } />
              <Route path='/login' element={ <Login /> } />
              <Route path='/redirect' element={ <Error /> }/>
              <Route path='/loading' element={ <Loading />} />
              <Route path='*' element={ <Navigate to='/redirect' />} />
            </Routes>
          </Suspense>
        </BrowserRouter>      
      </RecoilRoot>
    </>
  )
}

export default App
