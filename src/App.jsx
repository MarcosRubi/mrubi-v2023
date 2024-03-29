import Header from './sections/Header'
import Footer from './sections/Footer'
import { Route, Routes } from 'react-router-dom'

import Home from './views/Home'
import Project from './views/Project'
import Error from './views/Error'

import ModalProject from './components/projects/ModalProject'
import ModalCertificate from './components/certificates/ModalCertificate'

function App () {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='' element={<Home />}>
            <Route path='certificado/:name' element={<ModalCertificate />} />
          </Route>
          <Route path='/proyecto/:title' element={<Project />}>
            <Route path='imagenes' element={<ModalProject />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
