import React from 'react'
import {Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap'

class ProfileIcon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false
        }
    }

    onSignout = () => {
        if(window.sessionStorage.getItem('token')) {
            window.sessionStorage.removeItem('token');
        }
        this.props.onRouteChange('signout');
    }

    toggle = () => {
        // console.log(this.state.dropdownOpen)
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));        
    }

    render() {
        return (
            <div className="pa4 tc">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle 
                            tag='span'
                            data-toggle="dropdown"
                            aria-expanded={this.state.dropdownOpen}
                            >
                            
                                <img src="http://tachyons.io/img/logo.jpg" alt="avatar" className="br-100 ba h3 w3 dib" />
                            
                        </DropdownToggle>
                    <DropdownMenu right
                            className='b--transparent shadow-5' 
                            style={{marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                        <DropdownItem onClick={this.props.toggleModal}>View Profile</DropdownItem>
                        <DropdownItem onClick={() => this.onSignout()}>Sign Out</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
               
            </div>
        )
    }

}

export default ProfileIcon;