import { Fragment, useState } from "react";
import { ShoppingBag } from "react-feather";
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Navbar, NavbarBrand, Row } from "reactstrap";
import { sortByData } from "../constant/data";

export default function Filter({ loadingCategory, categories, setSelectedCategory, selectedCategory, sortBy, setSortBy }) {

   const [dropdownOpen, setDropdownOpen] = useState(false);
   const [dropdownOpenSortBy, setDropdownOpenSortBy] = useState(false);
   const toggle = () => setDropdownOpen((prevState) => !prevState);
   const toggleSortBy = () => setDropdownOpenSortBy((prevState) => !prevState);

  function onSelectCategory(dataX) {
    setSelectedCategory(dataX)
   }

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
                  <DropdownToggle
                    color="dark"
                    caret
                    className="text-capitalize"
                  >
                    {selectedCategory == ""
                      ? "Choose Category"
                      : selectedCategory.replace("-", " ")}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Category List</DropdownItem>
                    {categories.map((item, index) => (
                      <DropdownItem
                        onClick={() => onSelectCategory(item)}
                        key={index}
                        className="text-capitalize"
                      >
                        {item.replace("-", " ")}
                      </DropdownItem>
                    ))}
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
                    {sortBy == "" ? "Sort By Price" : sortBy.name}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>SORT BY</DropdownItem>
                    {sortByData.map((item, index) => (
                      <DropdownItem
                        onClick={() => setSortBy(item)}
                        key={index}
                      >
                        {item.name}
                      </DropdownItem>
                    ))}
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
