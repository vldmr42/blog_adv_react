import { Link } from 'react-router-dom';

import './styles/index.scss';

import { AppRouter } from './providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames('app', { hovered: true, selected: false }, [theme])}
    >
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;
