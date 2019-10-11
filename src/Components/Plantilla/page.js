import React from 'react';
import './styles.css';
import './sb-admin-2.css';


function Page(props) {

    return (
        <div id="wrapper">
            {renderSidebar()}
        </div>
    );
}
function renderSidebar(){
	return(
		<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
			<a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
				<div class="sidebar-brand-icon rotate-n-15">
					<i class="fas fa-laugh-wink"></i>
				</div>
				<div class="sidebar-brand-text mx-3">Hidropónica<sup>v0.1</sup></div>
		    </a>
		    <hr class="sidebar-divider my-0"/>
		    <li class="nav-item active">
		    	<a class="nav-link" href="/">
					<i class="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span>
		    	</a>
		    </li>
		    
		    <hr class="sidebar-divider"/>
			
			<div class="sidebar-heading">
				Infraestructura
			</div>
		</ul>
	);
}

export default Page;
