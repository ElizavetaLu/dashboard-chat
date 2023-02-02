import Header from "./Header/Header";
import Main from "./Main/Main";
import { Route, Routes } from 'react-router-dom';
import LogInForm from "./LogInForm/LogInForm"


const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/dashboard-chat/build/main" element={
          <>
            <Header />
            <Main />
          </>
        }>
        </Route>

        <Route path="/dashboard-chat/build/" element={<LogInForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
