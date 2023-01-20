import { SlSocialLinkedin, SlSocialInstagram, SlSocialFacebook, SlSocialTwitter } from 'react-icons/sl'

function SocialLinks () {
  return (
    <div className='social'>
      <h4>Redes sociales</h4>
      <ul>
        <li>
          <a href='#' className='d-flex align-center'>
            <SlSocialLinkedin />
            <span>Linkedin</span>
          </a>
        </li>
        <li>
          <a href='#' className='d-flex align-center'>
            <SlSocialInstagram />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href='#' className='d-flex align-center'>
            <SlSocialFacebook />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href='#' className='d-flex align-center'>
            <SlSocialTwitter />
            <span>Twitter</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks
