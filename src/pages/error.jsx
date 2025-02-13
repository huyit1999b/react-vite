import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './error.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'>
        <button className='error-button'>Go Home</button>
      </Link>
    </div>
  );
}
