import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailArticle from '../Components/DetailArticle';
import HomePages from '../Pages/HomePages'
import MainLayout from '../Layout/MainLayout'


function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <MainLayout>
              <HomePages />
            </MainLayout>
          } 
        />
        <Route 
          path="/detail/:id" 
          element={
          <>
            <DetailArticle />
          </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default RouterApp;
