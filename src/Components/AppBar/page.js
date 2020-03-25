import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logOut from '../../redux/rootReducer/logOut';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBarAutocomplete from '../AppBarAutocomplete';

//  <Nav.Link href="/login">Login</Nav.Link> // 

function Page(props) {
    const {
        title,
        text,
        suggestions,
        onChangeText,
        onChangeSelection,
        LogOut
    } = props;
    if(title=="Rieles"){
        return(
            <AppBar position="relative" id="AppBar-general"   >
                <Toolbar>
                    <Typography variant="h4" color="inherit" >
                        Cultivos
                    </Typography>
                    <div width="50%">
                        <AppBarAutocomplete 
                            title={title}
                            text={text}
                            suggestions={suggestions}
                            onChangeText={onChangeText}
                            onChangeSelection={onChangeSelection}
                        />
                    </div>
                    <div width="10%" style={{ float:'right', 
                        marginRight:0,
                        position: 'absolute', 
                        right: '5%',
                        top:'10%'}} >
                        <button onClick={LogOut } class="btn btn-info btn-lg">
                            <span class="glyphicon glyphicon-log-out"></span> Log out
                        </button>
                    </div>
                    <AccountCircle/>
                    
                </Toolbar>
                
            </AppBar>           
        )
    }else{
        return(
        <AppBar position="relative" id="AppBar-general"   >
            <Toolbar>
                <Typography variant="h4" color="inherit" width="30%" >
                    {title}
                </Typography>

                <AppBarAutocomplete 
                    title={title}
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
                    onChangeSelection={onChangeSelection}
                />
                <div width="10%" style={{ float:'right', 
                        marginRight:0,
                        position: 'absolute', 
                        right: '5%',
                        top:'10%'}} >
                        <button onClick={ LogOut } class="btn btn-info btn-lg">
                            <span class="glyphicon glyphicon-log-out"></span> Log out
                        </button>
                    </div>
                <AccountCircle/>
            </Toolbar>
        </AppBar>           
        )
    }
    
}
export default Page;
