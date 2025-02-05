import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Daf from './Daf';
import TopCop from './top/TopCop';
import Welcome from './Welcome';
import Mainp from './Mainp';
import CosMain from './CosMain';
import SignIn from './SignIn';
import SignIn2 from './SignIn2';
import GoodSignUp from './GoodSignUp';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>

        <Route path="/" element={<Mainp />} />
        <Route path="/CosMain" element={<CosMain />} />
        <Route path="/Sign" element={<SignIn />} />
        <Route path="/Sign2" element={<SignIn2 />} />
        <Route path="/GoodSign" element={<GoodSignUp />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;