import FormContact from '../components/footer/FormContact'
import Repositories from '../components/footer/Repositories'
import SocialLinks from '../components/footer/SocialLinks'

function Footer () {
  return (
    <footer>
      <div className='container'>
        <Repositories />
        <SocialLinks />
        <FormContact />
      </div>
    </footer>
  )
}

export default Footer
