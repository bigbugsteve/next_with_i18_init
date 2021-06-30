import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";
import Image from 'next/image'

const Dashboard = (props) => {
    
    const { t } = useTranslation("common");

    return (
        <div className="d-flex flex-column w-100">
            <Container className="hero__main-wrapper mt-md-3">
                <Row className="mb-4">
                    <Col lg={12} md={12} sm={12} className="hero__container">
                        <div className="hero__container-title text-center mb-3">
                            <h2 className="hero__title">
                                {t("dashboard.hero_title")}
                            </h2>
                        </div>
                        <Row className="hero__buttons">
                            <Link href="/claims/add">
                                <a>
                                    <Button className="btn__primary button__fixl my-2">
                                        {t("dashboard.new_claim")}
                                    </Button>
                                </a>
                            </Link>
                            <Link href="/claims">
                                <a>
                                <Button className="btn__primary button__fixl my-2">
                                    {t("dashboard.claim_history")}
                                </Button>
                                </a>
                            </Link>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="services__main-wrapper mb-5">
                <Container>
                    <Row>
                        <Col lg={12} className="mb-4">
                            <h2 className="services__title text-center">
                                {t("dashboard.covered")}
                            </h2>
                        </Col>
                    </Row>
                    <Row className="services__container">
                        <Col xs={12} md={4} className="service-container">
                            <div
                                className={/*this.state.isAdCovered?"service__icon-active":"service__icon-inactive"*/ "service__icon-active"}
                            >
                                <Image
                                    src="/adamage.svg"
                                    // src="https://example.com/test"
                                    alt="Landscape picture"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div
                                className={/*this.state.isAdCovered?"service__name":"service__name service__name-inactive"*/ "service__name"}
                            >
                                <p>{t("dashboard.ad")}</p>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="service-container">
                            <div
                                className={/*this.state.isTheftCovered?"service__icon-active":"service__icon-inactive"*/ "service__icon-active"}
                            >
                                <img src="/theft.svg" alt="theft" />
                            </div>
                            <div
                                className={/*this.state.isTheftCovered?"service__name":"service__name service__name-inactive"*/ "service__name"}
                            >
                                <p>{t("dashboard.theft")}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Dashboard;
