import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Product/Product'
import Search from './components/Search/Search'
import Voucher from './components/Voucher/Voucher'
const App = () => {
  return (
    <div style={{ backgroundColor: '#eff0f5' }}>
      <Header />
      <Navbar />
      <Search />
      <Content />
      <Voucher />
      <Product />
      <Footer />
    </div>
  )
}
export default App
