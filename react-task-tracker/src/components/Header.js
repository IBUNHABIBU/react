<<<<<<< HEAD
import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom'
const Header = ({title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className ="header">
      <h6>{title}</h6>
      
      { location.pathname === '/' && (<Button 
        color = { showAdd ? 'red':'green'}
        text= { showAdd ? 'Close': 'Add' }
         onClick = { onAdd }/>)}
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
=======
import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom'
const Header = ({title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className ="header">
      <h6>{title}</h6>
      
      { location.pathname === '/' && (<Button 
        color = { showAdd ? 'red':'green'}
        text= { showAdd ? 'Close': 'Add' }
         onClick = { onAdd }/>)}
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
>>>>>>> 9c553b61de21c417676afb8a054a76c222dbb73e
