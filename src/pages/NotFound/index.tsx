import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <h1>404 – Page Not Found</h1>
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
