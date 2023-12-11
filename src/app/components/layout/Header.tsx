import { ShoppingBag } from "react-feather";
import { Container, Navbar, NavbarBrand } from "reactstrap";

export default function Header() {
  return (
    <Navbar className="my-2 py-4" color="dark" dark>
      <Container>
        <NavbarBrand href="/">
          <ShoppingBag />
          <span className="ml-2">Your Shop</span>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
}
