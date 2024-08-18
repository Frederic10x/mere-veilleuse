import { Toaster } from 'react-hot-toast'
import Form from './components/form'
import ContactButton from '@/components/contact-button'

const Page = async () => {
  return (
    <main className="contact">
      <h1 className="title">Contact</h1>
      <div className="content">
        <div className="infos">
          <h2>Informations personnelles</h2>
          <div className="address">
            <h3>Adresses</h3>
            <p>
              <span>- Postale :</span>
              <br /> 84 route du stade
              <br /> 38090 Roche
            </p>
            <p>
              <span>- E-mail :</span>
              <br /> cardia.lima.tracy@orange.fr
            </p>
          </div>
          <div className="phone">
            <h3>Téléphone</h3>
            <p>06 43 47 05 00</p>
          </div>
        </div>
        <Form />
      </div>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: 'var(--description-font)',
          },
        }}
      />
      <ContactButton />
    </main>
  )
}

export default Page
