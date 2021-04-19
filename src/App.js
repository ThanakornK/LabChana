import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './component/Menu';


import Manage_main from "./pages/Manage_main";
import Manage_lab from "./pages/Manage_lab";
import Add_lab from "./pages/Add_lab";
import Add_prob from './pages/Add_prob';
import Do_prob from './pages/Do_prob';
import Edit_prob from './pages/Edit_prob';
import Prob_student from './pages/Prob_student';
import ListLab from './pages/ListLab';
import ListProblem from './pages/ListProblem';
import Detail_case from './pages/Detail_case';
import Manage_prob_case from './pages/Manage_prob_case';
import User_do_prob from './pages/User_do_prob';
import Manage_student from './pages/Manage_student';
import Manage_student_lab from './pages/Manage_student_lab';
import Manage_student_prob from './pages/Manage_student_prob';
import Login from './pages/Login';
import './style/Table.css';

function App() {
  return (
    <BrowserRouter>
      <Menu />
        <div style={{ width: "100%", height: "100vh"}}>
          <Switch>
            <Route exact path="/" component={Login} />

            {/* Teacher flow */}
            <Route exact path="/manage" component={Manage_main} />
            <Route exact path="/manage/student" component={Manage_student} />
            <Route exact path="/manage/userID/ls_lab" component={Manage_student_lab} />
            <Route exact path="/manage/userID/labN" component={Manage_student_prob} />
            <Route exact path="/manage/labN" component={Manage_lab} />
            <Route exact path="/add_lab" component={Add_lab} />
            <Route path='/labN/add_p' component={Add_prob} />
            <Route path='/labN/edit/pM' component={Edit_prob} />
            <Route exact path="/labN/pM/ls_nisit" component={Prob_student} />
            <Route path='/manage/labN/pM/case' component={Manage_prob_case} />
            <Route path='/labN/userID/do/pM' component={User_do_prob} />

            {/* Student flow */}
            <Route exact path="/student" component={ListLab} />
            <Route exact path="/labN" component={ListProblem} />
            <Route exact path='/labN/do/pM' component={Do_prob} />
            <Route path='/labN/do/pM/case' component={Detail_case} />

          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
