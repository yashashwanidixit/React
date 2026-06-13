import PropTypes from 'prop-types'

function UserGreeting(props){
    const welcomemessage=<h2
    className="welcome-message">Welcome {props.username}</h2>
    
    const errormessage=<h2 className="error-message">please log in to continue</h2>
    
    if(props.isLogged){
        return welcomemessage;
    }
    else {
        return errormessage;
    }
    
}  
UserGreeting.prototypes={
    isLogged:PropTypes.bool,
    username:PropTypes.string,
}
UserGreeting.defaultProps={
    isLogged:false,
    username:"Guest",
}

export default UserGreeting