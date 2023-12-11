import { Fragment, useState } from "react";
import { ShoppingBag } from "react-feather";
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Navbar, NavbarBrand, Row } from "reactstrap";

export default function Filter() {

   const [dropdownOpen, setDropdownOpen] = useState(false);
   const [dropdownOpenSortBy, setDropdownOpenSortBy] = useState(false);
   const toggle = () => setDropdownOpen((prevState) => !prevState);
   const toggleSortBy = () => setDropdownOpenSortBy((prevState) => !prevState);

  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <strong>Filter : </strong>

            <Row>
              <Col lg={2} md={2}>
                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  direction={"down"}
                >
                  <DropdownToggle color="dark" caret>
                    Choose Category
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Category List</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>

              <Col lg={2} md={2}>
                <Dropdown
                  isOpen={dropdownOpenSortBy}
                  toggle={toggleSortBy}
                  direction={"down"}
                >
                  <DropdownToggle color="dark" caret>
                    Sort By Price
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>SORT BY</DropdownItem>
                    <DropdownItem>Lowest Price</DropdownItem>
                    <DropdownItem>Highest Price</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
