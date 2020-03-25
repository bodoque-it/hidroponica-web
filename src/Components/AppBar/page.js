import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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

                    <AppBarAutocomplete 
                        title={title}
                        text={text}
                        suggestions={suggestions}
                        onChangeText={onChangeText}
                        onChangeSelection={onChangeSelection}
                    />
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
                
                <div width="10%" style={{ float:'right' }} >
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
