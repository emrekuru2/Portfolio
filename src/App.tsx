import { useEffect } from 'react';
import { SunIcon, MoonIcon } from './assets';
import viteLogo from '/vite.svg'

function App() {
  const html = document.documentElement;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      html.setAttribute("data-theme", savedTheme);
    }

  }, [html]);

  const handleThemeChange = () => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
      html.setAttribute("data-theme", 'dark');
      localStorage.setItem("theme", 'dark');
    } else {
      html.setAttribute("data-theme", 'light');
      localStorage.setItem("theme", 'light');
    }

  };

  return (
    <>
      <label className="swap swap-rotate">
        <input onClick={() => handleThemeChange()} type="checkbox" />
        <img className="swap-on w-10 h-10" src={SunIcon} />
        <img className="swap-off w-10 h-10" src={MoonIcon} />
      </label>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>


      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <button className='btn btn-primary' data-set-theme="dark" data-act-class="ACTIVECLASS">Test</button>
        <select data-choose-theme>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
