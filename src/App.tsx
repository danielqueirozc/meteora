import { CarouselBanner } from "./components/carrousel";
import { Categories } from "./components/categories";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Infos } from "./components/infos";
import { Newsletter } from "./components/newsletter";
import { Products } from "./components/products";
import { SearchMobile } from "./components/searchMobile";

export function App() {
  return (
    <>
      <Header />
      <SearchMobile />
      <CarouselBanner />
      <Categories />
      <Products />
      <Infos />
      <Newsletter />
      <Footer />
    </>
  )
}

