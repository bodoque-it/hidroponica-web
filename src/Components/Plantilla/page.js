import React from 'react';
import './styles.css';
import './sb-admin-2.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from '../../redux/store';
import Microclime from '../Microclime';
import Dashboard from '../Dashboard';
import Cycle from '../Cycle';
import Rails from '../Rails';
import Container from '../Container';


function Page(props) {

    return (
        <div id="wrapper">
            {renderSidebar()}
            <div id="content-wrapper" class="d-flex flex-column color-gradient" height='100%'>
			    <div id="content">
					<Provider store={store}>
						<BrowserRouter>
							<Switch>		
								<Route path="/dashboard" component={Dashboard} />
								<Route path="/microclimes" component={Microclime} />
								<Route path="/cycles" component={Cycle} />
								<Route path="/rails" component={Rails} />
								<Route path="/containers" component={Container} />
								
							</Switch>
						</BrowserRouter>
					</Provider>
				</div>
			</div>
        </div>
        
    );
}
function renderSidebar(){
	return(
		<ul class="navbar-nav bg-success sidebar sidebar-dark accordion" id="accordionSidebar" >
			<a class="sidebar-brand d-flex align-items-center justify-content-center">
				<div class="sidebar-brand-icon rotate-n-15">
					<i class="fas fa-laugh-wink"></i>
				</div>
				<div class="sidebar-brand-text mx-3">Hidropónica<sup>v0.2</sup></div>
		    </a>
		    <hr class="sidebar-divider my-0"/>
		    <li class="nav-item active">
		    	<a class="nav-link" href="/dashboard">
					<span>Dashboard</span>
		    	</a>
		    </li>
		    
		    <hr class="sidebar-divider"/>
			
			<div class="sidebar-heading">
				Infraestructura
			</div>
			<li class="nav-item active">
		    	<a class="nav-link" href="/rails">
					<span>Rieles</span>
		    	</a>
		    </li>
			<li class="nav-item active">
		    	<a class="nav-link" href="/containers">
					<span>Contenedores</span>
		    	</a>
		    </li>
			<li class="nav-item active">
		    	<a class="nav-link" href="/microclimes">
					<span>Microclimas</span>
		    	</a>
		    </li>
			<li class="nav-item active">
		    	<a class="nav-link" href="/cycles">
					<span>Ciclos</span>
		    	</a>
		    </li>
		</ul>
	);
}

export default Page;
