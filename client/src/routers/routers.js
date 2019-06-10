import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home/home';
import ContactPage from '../pages/contact/contact';
import AboutPage from '../pages/about/about';
import ServicePage from '../pages/service/service';
import ProductPage from '../pages/product/product';
import NailerPage from '../pages/nailer/nailer';
import SupportPage from '../pages/support/support';
import NailerPageNew from '../pages/nailer/nailer-new';
import NailerPageSocial from '../pages/nailer/nailer-social.js';
import SignUp from '../pages/signup/index'
import SignUpNailer from '../pages/SignUpNailer/SignUpNailer';
import Upproducts from '../pages/upproducts/upproducts';
import TronGoiPopUp from '../pages/service/ServicePopUp/TronGoiPopUp';
import BangGiaDichVu from '../pages/banggiadichvu/banggiadichvu';
import policyPage from '../pages/policy/policy';
import policy1Page from '../pages/policy/policy1';
import policy2Page from '../pages/policy/policy2';
import policy3Page from '../pages/policy/policy3';
import policy4Page from '../pages/policy/policy4';
import policy5Page from '../pages/policy/policy5';
import policy6Page from '../pages/policy/policy6';
import policy7Page from '../pages/policy/policy7';
import HeaderNewComponent from '../components/HeaderNew/HeaderNew';
import ProfileNailer from '../pages/ProfileNailer/ProfileNailer'
import ProfileClient from '../pages/profileclient/profileuser'
import ChangePassword from '../components/ChangePassword/ChangePassword';
import HeaderComponentM from '../components/Dropdown/Dropdown';
import HeaderAfterSignIn from '../components/Dropdown/Dropdown';
import HeaderNew from '../components/HeaderNew/HeaderNew';
import Updateprofile from '../pages/nailer/updateprofile';
import menu_datlich from '../pages/support-menu/datlich';
import NotfoundPage from '../pages/notfound/notfound';
const MainRoute = () => (
 <main>
   <Switch>

     <Route exact path='/' component={HomePage}/>
     <Route path='/home' component={HomePage}/>
     <Route path='/about' component={AboutPage}/>
     <Route path='/service' component={ServicePage}/>
     <Route path='/product/:id' component={ProductPage}/>
     <Route path='/nailer' component={NailerPage}/>
     <Route path='/support' component={SupportPage}/> 
     <Route path='/contact' component={ContactPage}/>
     <Route path='/nailer-new' component={NailerPageNew}/>
     <Route path='/nailer-social' component={NailerPageSocial}/>
     <Route path='/SignUp' component={SignUp}/>
     <Route path='/SignUpNailer' component ={SignUpNailer}/>
     <Route path='/upproducts' component ={Upproducts}/>
     <Route path='/TronGoiPopUp' component ={TronGoiPopUp}/>
     <Route path='/BangGiaDichVu' component ={BangGiaDichVu}/>
     <Route path='/policy' component={policyPage}/>
     <Route path='/policy1' component={policy1Page}/>
     <Route path='/policy2' component={policy2Page}/>
     <Route path='/policy3' component={policy3Page}/>
     <Route path='/policy4' component={policy4Page}/>
     <Route path='/policy5' component={policy5Page}/>
     <Route path='/policy6' component={policy6Page}/>
     <Route path='/policy7' component={policy7Page}/>
     <Route path='/ProfileClient' component={ProfileClient}/>
     <Route path='/ChangePassword' component={ChangePassword}/>
     <Route path='/HeaderComponentM' component={HeaderComponentM}/>
     <Route path='/HeaderNewComponent' component={HeaderNewComponent}/>
     <Route path='/ProfileNailer' component={ProfileNailer}/>
     <Route path='/HeaderAfterSignIn' component={HeaderAfterSignIn}/>
     <Route path='/updateProfileNailer' component={Updateprofile}/>
     <Route path='/HeaderNew' component={HeaderNew}/>
     <Route path='/datlich' component={menu_datlich}/>
     <Route path='/pagenotfound' component={NotfoundPage}/>
   </Switch>
 </main>
)

export default MainRoute;
