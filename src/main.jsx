import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import { Hooksapp } from './hooksapp.jsx';
import { Counterapp } from './01-usestate/counterapp.jsx';
import { Countercustom } from './01-usestate/countercustom.jsx';
import { Simpleform } from './02-useeffect/simpleform.jsx';
import { Formcustom } from './02-useeffect/formcustom.jsx';
import { Multiplecustomhook } from './03-examples/multiplecustomhook.jsx';
import { Focusscreen } from './04-useRef/focusscreen.jsx';
import { Layout } from './05-uselayouteffect/layout.jsx';
import { Memorize } from './06-memo/memorize.jsx';
import { Memohook } from './06-memo/memohook.jsx';
import { Callbackhook } from './06-memo/callbackhook.jsx';
import { Padre } from './07-tarea memo/padre.jsx';
import './08-reducer/into-defucer.js'
import { Todoapp } from './08-reducer/todoapp.jsx';





  createRoot(document.getElementById('root')).render(
    // <StrictMode>
      <Todoapp />
    // </StrictMode>
  )
