import React, { useEffect, useState } from "react";
import Helmet from "../component/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import "../style/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../component/UI/ProductsList";
import products from "../assets/data/products";
import { Container, Row, Col } from "reactstrap";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../component/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessproducts, setWirelessProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirlessproducts = products.filter(
      (item) => item.category === "wireless"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirlessproducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="hero_content">
                <p className="hero__subtitle">Trending production in {year}</p>
                <h2>Make your Interior More Minimalistic & Modern</h2>

                <p>
                  A minimalist and modern interior design focuses on clean
                  lines, functional spaces
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">Shop Now</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn "
              >
                <Link to="/shop">Visit store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessproducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Home;
