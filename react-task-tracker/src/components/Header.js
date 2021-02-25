import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title}) => {
  
  return (
    <header className ="header">
      <h6>{title}</h6>
      <Button color='green' text='submit' />
      <Button   color='blue' text='Add' />
      <Button color='red' text='cancel' />
      <Button color='black' text='register' />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task  tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Header
