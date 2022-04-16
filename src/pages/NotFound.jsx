import {Link} from 'react-router-dom'

const NotFound = () => {
    
  return (
    <div className='profile'>
        <h1>Page Not Found...</h1>
        <Link to='/Sign-in'>&larr; Back to Sign In</Link>
    </div>
  )
}

export default NotFound