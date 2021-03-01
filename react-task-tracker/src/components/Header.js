import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title }) => {
  const onAdd = () => {
    console.log("hello")
  }
  return (
    <header className ="header">
      <h6>{title}</h6>
      
      <Button   color='green' text='Add' onClick = { onAdd }/>
      <Button color='red' text='cancel' />
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
