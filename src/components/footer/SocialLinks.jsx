import { SlSocialLinkedin, SlSocialInstagram, SlSocialFacebook, SlSocialTwitter } from 'react-icons/sl'

function SocialLinks () {
  return (
    <div className='social'>
      <h4>Redes sociales</h4>
      <ul>
        <li>
          <a href='https://www.linkedin.com/in/marcos-rubi/' target='_blank' className='d-flex align-center' rel='noreferrer'>
            <SlSocialLinkedin />
            <span>Linkedin</span>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/mrubi__07/' target='_blank' className='d-flex align-center' rel='noreferrer'>
            <SlSocialInstagram />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/MarcosRubi07' target='_blank' className='d-flex align-center' rel='noreferrer'>
            <SlSocialFacebook />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href='https://twitter.com/Fuhrer_RD' target='_blank' className='d-flex align-center' rel='noreferrer'>
            <SlSocialTwitter />
            <span>Twitter</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks
