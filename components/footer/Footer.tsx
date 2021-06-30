import React from 'react'
import { useTranslation } from 'react-i18next'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Footer = () => {

    const { t } = useTranslation('common')

    
    
    return (
        <footer className="footer">
            <Container>
                <Row className="my-4 py-4 border-bottom border-top">
                    <Col>
                        <p className="px-3 m-0">
                            Copyright &copy; 2021 Poland Service
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <ListGroup className="footer__general d-flex flex-row">
                            <ListGroupItem className="border-0">
                                <Link href="">
                                    <a>
                                        {t('footer.general')}
                                    </a>
                                </Link>
                            </ListGroupItem>
                            <ListGroupItem className="border-0">
                                <Link href="">
                                    <a>
                                        {t('footer.privacy')}
                                    </a>
                                </Link>
                            </ListGroupItem>
                            <ListGroupItem className="border-0">
                                <Link href="">
                                    <a>
                                        {t('footer.service')}
                                    </a>
                                </Link>
                            </ListGroupItem>
                            <ListGroupItem className="border-0">
                                <Link href="">
                                    <a>
                                        {t('footer.contact')}
                                    </a>
                                </Link>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col sm={12} md={6}>
                        <ListGroup className="footer__social d-flex flex-row justify-content-end">
                            <ListGroupItem className="border-0">
                                <Link href="https://facebook.com">
                                    <a target="_blank">
                                        <FontAwesomeIcon size="lg" icon={faFacebook} />
                                    </a>
                                </Link>
                            </ListGroupItem>
                            <ListGroupItem className="border-0">
                                <Link href="">
                                    <a target="_blank">
                                        <FontAwesomeIcon size="lg" icon={faTwitter} />
                                    </a>
                                </Link>
                            </ListGroupItem>
                            <ListGroupItem className="border-0">
                                <Link href="">
                                    <a target="_blank">
                                        <FontAwesomeIcon size="lg" icon={faInstagram} />
                                    </a>
                                </Link>
                            </ListGroupItem>
                            <ListGroupItem className="border-0">
                                <Link href="">
                                    <a target="_blank">
                                        <FontAwesomeIcon size="lg" icon={faYoutube} />
                                    </a>
                                </Link>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                
            </Container>
        </footer>
    )
}

export default Footer
