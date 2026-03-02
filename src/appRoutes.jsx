import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./student/dashboar";
import AdminDashboard from "./admin/adminDashboard";
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import Courses from "./pages/courses";
import Scholarship from "./pages/scholarship";
import VissionMission from "./pages/vissionMission";
import Testimonial from "./pages/testimonial";
import TermsAndConditions from "./pages/termsandConditions";
import ReturnRefund from "./pages/returnRefund";
import PaymentForm from "./component/paymentForm";
import Signup from "./pages/registration";

import SubjectCards from "./pages/subjectCards";

function AppRoutes() {
  return (
    <Routes>
       {/* This is home page routes  */}


        <Route path="/" element={<Home />} />
<Route path="/privacy" element={<Privacy />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/scholarships" element={<Scholarship />} />
      <Route path="/vission" element={<VissionMission />} />
      <Route path="/testimonial" element={<Testimonial/>}/>
      <Route path="/terms-conditions" element={<TermsAndConditions/>}/>
      <Route path="/return-refund" element={<ReturnRefund/>}/>
      <Route path="/ieeo-payment" element={<PaymentForm/>}/>
      <Route path ="/ieeo-registration" element={<Signup/>}/>
      {/* <Route path ="/login" element={<Login/>}/> */}
      <Route path ="/olympiad" element={<SubjectCards/>}/>




   
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />


    </Routes>
  
   
  );
}

export default AppRoutes;