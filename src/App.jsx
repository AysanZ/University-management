import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Student from "./pages/StudentList/Student";
import View from "./pages/View/View";
import StudentAdd from "./pages/StudentAdd/StudentAdd";
import StudentEdit from "./pages/StudentEdit/StudentEdit";
import TeacherList from "./pages/TeacherList/TeacherList";
import TeacherAdd from "./pages/TeacherAdd/TeacherAdd";
import TeacherEdit from "./pages/TeacherEdit/TeacherEdit";
import DepartmentList from "./pages/DepartmentList/DepartmentList";

const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="student-list" element={<Student />} />
            <Route path="view" element={<View />} />
            <Route path="student-add" element={<StudentAdd />} />
            <Route path="student-edit" element={<StudentEdit />} />
            <Route path="teacher-list" element={<TeacherList />} />
            <Route path="teacher-add" element={<TeacherAdd />} />
            <Route path="teacher-edit" element={<TeacherEdit />} />
            <Route path="department-list" element={<DepartmentList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
