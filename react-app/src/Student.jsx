import PropTypes from 'prop-types'   

function Student(props) {
  return (
    <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.Age}</p>
        <p>Student: {props.isStudent? "Yes": "No"}</p>
      
    </div>
  );
}
Student.propTypes = {   
    name: PropTypes.string.isRequired,
    Age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,    

}
export default Student