import Contact from './Contact/Contact'
import { lazadaBankData, contactUs, lazadaVietNam } from './data'
import Payment from './Payment/Payment'

const Footer = () => {
  return (
    <div>
      <Contact
        lazadaBankData={lazadaBankData}
        contactUs={contactUs}
        lazadaVietNam={lazadaVietNam}
      />
      <Payment />
    </div>
  )
}
export default Footer
