import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title, onAdd, showAdd }) => {
 
  return (
    <header className ="header">
      <h6>{title}</h6>
      
      <Button 
        color = { showAdd ? 'red':'green'}
        text= { showAdd ? 'Close': 'Add' }
         onClick = { onAdd }/>
      {/* <Button color='red' text='cancel' /> */}
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
