import PropTypes from "prop-types";

function UserGreeting(props) {   
    if (props.isLoggedIn) { 
        return <h1 className="welcome-meassage">Welcome back, {props.userName}!</h1>;
    }else {
        return <h1 className="signup-message">Please sign up to contineu.</h1>;
    }


}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    userName: PropTypes.string
};
UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest"
};
export default UserGreeting;