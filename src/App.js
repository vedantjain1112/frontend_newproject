import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Admin from "./components/pages/admin/Admin";
import Home from "./components/pages/home//Home";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import RequireUser from "./components/RequireUser";
import toast, { Toaster } from "react-hot-toast";
import ForgotPassword from "./components/pages/login/passwordReset/ForgotPassword";
import PasswordReset from "./components/pages/login/passwordReset/PasswordReset";
import EmailVerification from "./components/pages/emailverification/EmailVerification";
import QuizAdmin from "./components/pages/quiz/quizAdmin";
import Stories from "./components/pages/story/Stories";
import StoryPage from "./components/pages/story/StoryPage";
import Alphabets from "./components/pages/alphabets/Alphabets";
import Sallekhna from "./components/pages/sallekhna/Sallekhna";
import Pratikraman from "./components/pages/pratikraman/Pratikraman";
import JainSymbol from "./components/pages/jainsymbol/JainSymbol";
import Sutra from "./components/pages/sutra/Sutra";
import Sects from "./components/pages/sects/JainSects";
import Festivals from "./components/pages/jainfestivals/Festivals";

function App() {
  return (
    <div className="App">
      <div>
        <Toaster />
      </div>
      <Routes>
        <Route element={<RequireUser />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RequireUser />}>
          <Route path="/quiz" element={<QuizAdmin />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/story/:storyId" element={<StoryPage />} />
        <Route path="/facts" element={<Alphabets />} />
        <Route path="/sallekhna" element={<Sallekhna />} />
        <Route path="/pratikraman" element={<Pratikraman />} />
        <Route path="/jainsymbol" element={<JainSymbol />} />
        <Route path="/library" element={<Sutra />} />
        <Route path="/sects" element={<Sects />} />
        <Route path="/festival" element={<Festivals />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}

export default App;

// {
/* <Route element={<RequireUser />}>
  <Route path="/admin" element={<Admin />} />
</Route> */
// }
