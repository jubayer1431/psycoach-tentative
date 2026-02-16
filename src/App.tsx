import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import GADPage from '@/pages/GADPage';
import SelfHelpPage from '@/pages/SelfHelpPage';
import DBTPage from '@/pages/DBTPage';
import TherapistsPage from '@/pages/TherapistsPage';
import AssessmentPage from '@/pages/AssessmentPage';
import CareCohortPage from '@/pages/CareCohortPage';
import CorporatePage from '@/pages/CorporatePage';
import SummerChallengePage from '@/pages/SummerChallengePage';
import AboutPage from '@/pages/AboutPage';
import PackagesPage from '@/pages/PackagesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gad" element={<GADPage />} />
        <Route path="/self-help" element={<SelfHelpPage />} />
        <Route path="/dbt" element={<DBTPage />} />
        <Route path="/therapists" element={<TherapistsPage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/care-cohort" element={<CareCohortPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/summer-challenge" element={<SummerChallengePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/packages" element={<PackagesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
