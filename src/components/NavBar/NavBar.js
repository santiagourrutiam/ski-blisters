import React from 'react';
//import Button from '@material-ui/core/Button';
import SearchBar from 'material-ui-search-bar';

//APP MENU - This is a stateless component. Main menu for the app.
//const menuOptions = ['Backcountry Routes', 'Plan Your Trip','Local Shops','Facebook Community','Sign Up', 'Login']

const NavBar = () => {
    return(
    <div className="NavBar">
      <SearchBar
        value="Search Route"
        onChange={() => ""}
        onRequestSearch={() => ""}
      />
    </div>
  )
}
export default NavBar;
/*
<Button variant="contained" color="primary" size="large" onClick= { () => {console.log(menuOptions[0])}}>{menuOptions[0]}</Button>
      <Button variant="contained" color="secondary" size="large" onClick= { () => {console.log(menuOptions[1])}}>{menuOptions[1]}</Button>
      <Button variant="contained" color="primary" size="large" >{menuOptions[2]}</Button>
      <Button variant="contained" color="secondary" size="large" >{menuOptions[3]}</Button>
      <Button variant="contained" color="primary" size="large" >{menuOptions[4]}</Button>
<Button variant="contained" color="secondary" size="large" >{menuOptions[5]}</Button>*/
