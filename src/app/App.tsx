import { Link } from 'react-router-dom';

import './styles/index.scss';

import { AppRouter } from './providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames('app', { hovered: true, selected: false }, [theme])}
    >
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
};

export default App;
