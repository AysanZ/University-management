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
import DepartmentAdd from "./pages/DepartmentAdd/DepartmentAdd";
import DepartmentEdit from "./pages/DepartmentEdit/DepartmentEdit";
import SubjectList from "./pages/SubjectList/SubjectList";
import SubjectAdd from "./pages/SubjectAdd/SubjectAdd";
import SubjectEdit from "./pages/SubjectEdit/SubjectEdit";
import Calendar from "./pages/Calendar/Calendar";

const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Student />} />
            <Route path="/view" element={<View />} />
            <Route path="/student-add" element={<StudentAdd />} />
            <Route path="/student-edit" element={<StudentEdit />} />
            <Route path="/teachers" element={<TeacherList />} />
            <Route path="/teacher-add" element={<TeacherAdd />} />
            <Route path="/teacher-edit" element={<TeacherEdit />} />
            <Route path="/faculties" element={<DepartmentList />} />
            <Route path="/faculty-add" element={<DepartmentAdd />} />
            <Route path="/faculty-edit" element={<DepartmentEdit />} />
            <Route path="/subjects" element={<SubjectList />} />
            <Route path="/subject-add" element={<SubjectAdd />} />
            <Route path="/subject-edit" element={<SubjectEdit />} />
            <Route path="/calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
