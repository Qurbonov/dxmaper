import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';

function About() {
    const [coop, setCoop] = useState(false);
    const [uzex, setUzex] = useState(false);
    const [qurilish, setQurilish] = useState(false);
    const [xtxarid, setXtxarid] = useState(false);

    return (
        <>
            <div className='container shadow-sm px-5 py-4 rounded-5'>
                <h2 className='my-4 border-bottom'>
                    Davlat xaridlari bo‘yicha markaziy axborot portali
                </h2>
                <p style={{textAlign: "justify"}}>
                    Portal O‘zbekiston Respublikasining “Davlat xaridlari to‘g‘risida”gi
                    Qonuni va O‘zbekiston Respublikasi Vazirlar Mahkamasining “Davlat
                    xaridlarini amalga oshirishda xarid qilish tartib-taomillarini tashkil
                    etish jarayonlarini axborot-kommunikatsiya texnologiyalaridan
                    foydalangan holda yanada takomillashtirish choralari to‘g‘risida”gi
                    qaroriga muvofiq ishlab chiqilgan. Davlat xaridlari markaziy axborot
                    portali - O‘zbekiston Respublikasi Moliya vazirligining davlat
                    xaridlari to‘g‘risidagi axborot elektron shaklda yuritilishini, shu
                    jumladan, maxsus axborot portali operatorining (keyingi o‘rinlarda —
                    operator) axborot tizimlari bilan o‘zaro ma’lumot almashinuvi orqali
                    davlat xaridlarining reja-jadvallari, davlat xaridlari to‘g‘risidagi
                    e’lonlar, davlat xaridlarining yakunlari to‘g‘risidagi axborot, davlat
                    xaridlari bo‘yicha statistik axborot va boshqa ma’lumotlarni o‘zining
                    ma’lumotlar bazasida jamlanishini va ulardan barcha jismoniy va
                    yuridik shaxslarning erkin foydalanishini ta’minlovchi maxsus elektron
                    platformasi hisoblanadi.
                </p>
                <h2 className='my-4 border-bottom'>Qo'llanmalar <span className='text-secondary' style={{fontSize: 18}}> (pdf shaklda)</span></h2>

                <Container className='mt-4 shadow-sm border border-1 rounded-3 p-3'>
                    <Row className="justify-content-md-center mt-3">
                        <Col xs lg="3" className='text-center' onClick={() => {
                            setCoop(!coop)
                            uzex ? setUzex(!uzex) : setUzex(uzex)
                            xtxarid ? setXtxarid(!xtxarid) : setXtxarid(xtxarid)
                            qurilish ? setQurilish(!qurilish) : setQurilish(qurilish)
                        }}
                             aria-controls="example-collapse-text"
                             aria-expanded={coop}>
                            <img src="/coop_logo.jpg" width="70" height="70" alt=""/>
                            <p className='pt-2 text-secondary'> Elektron kooperatsiya portali</p>
                        </Col>
                        <Col xs lg="3" className='text-center' onClick={() => {
                            setUzex(!uzex)
                            coop ? setCoop(!coop) : setCoop(coop)
                            xtxarid ? setXtxarid(!xtxarid) : setXtxarid(xtxarid)
                            qurilish ? setQurilish(!qurilish) : setQurilish(qurilish)
                        }
                        }
                             aria-controls="example-collapse-text"
                             aria-expanded={uzex}>
                            <img src="/uzex_logo.png" width="55" height="70" alt=""/>
                            <p className='pt-2 text-secondary'> Tovat-xom ashyo birjasi</p>
                        </Col>
                        <Col xs lg="3" className='text-center' onClick={() => {
                            setXtxarid(!xtxarid)
                            coop ? setCoop(!coop) : setCoop(coop)
                            qurilish ? setQurilish(!qurilish) : setQurilish(qurilish)
                            uzex ? setUzex(!uzex) : setUzex(uzex)
                        }
                        }
                             aria-controls="example-collapse-text"
                             aria-expanded={uzex}>
                            <img src="/xtxarid_logo.png" width="65" height="70" alt=""/>
                            <p className='pt-2 text-secondary'> XT-Xarid texnologiyalari</p>
                        </Col>
                        <Col xs lg="3" className='text-center' onClick={() => {
                            setQurilish(!qurilish)
                            uzex ? setUzex(!uzex) : setUzex(uzex)
                            coop ? setCoop(!coop) : setCoop(coop)
                            xtxarid ? setXtxarid(!xtxarid) : setXtxarid(xtxarid)
                        }
                        }
                             aria-controls="example-collapse-text"
                             aria-expanded={uzex}>
                            <img src="/qurilish_logo.png" width="70" height="70" alt=""/>
                            <p className='pt-2 text-secondary'> Shaffof qurilish platformasi</p>
                        </Col>
                    </Row>
                    <Row>
                        <Collapse in={coop} className='pt-2'>
                            <div id="example-collapse-text">
                                <Container>
                                    <h5>Elektron kooperatsiya portali</h5>
                                    <Row>
                                        <Col>
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/cooperation/register_uz.pdf" className='text-lowercase text-decoration-none'>
                                                        RO'XATDAN O'TISH TARTIBI
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/cooperation/products_uz.pdf" className='text-lowercase text-decoration-none'>
                                                        MAHSULOT JOYLASHTIRISH YO'RIQNOMASI
                                                    </a>
                                                </ListGroup.Item>

                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/cooperation/trade_budjet_uz.pdf" className='text-lowercase text-decoration-none'>
                                                        BYUDJET TASHKILOTLAR UCHUN BUYURTMA BERISH VA SHARTNOMA TUZISH
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/cooperation/trade_uz.pdf" className='text-lowercase text-decoration-none'>
                                                        BUYURTMA BERISH va SHARTNOMA TUZISH
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/cooperation/imports_uz.pdf" className='text-lowercase text-decoration-none'>
                                                        IMPORT O‘RNINI BOSUVCHI MAHSULOTLARGA SO‘ROV BERISH TARTIBI
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/cooperation/demping_uz.pdf" className='text-lowercase text-decoration-none'>
                                                        DEMPING
                                                    </a>
                                                </ListGroup.Item>
                                            </ListGroup>

                                        </Col>
                                        <Col>
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/cooperation/register.pdf" className='text-lowercase text-decoration-none'>
                                                        ИНСТРУКЦИЯ ПО РЕГИСТРАЦИИ
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/cooperation/products.pdf" className='text-lowercase text-decoration-none'>
                                                        ИНСТРУКЦИЯ ПО ВЫСТАВЛЕНИЮ ТОВАРОВ
                                                    </a>
                                                </ListGroup.Item>

                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/cooperation/trade_budjet.pdf" className='text-lowercase text-decoration-none'>
                                                        ЗАКАЗ И ЗАКЛЮЧЕНИЕ ДОГОВОРОВ ДЛЯ БЮДЖЕТНЫХ ОРГАНИЗАЦИЙ
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/cooperation/trade.pdf" className='text-lowercase text-decoration-none'>
                                                        ИНСТРУКЦИЯ ПО ВЫСТАВЛЕНИЮ ТОВАРОВ
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/cooperation/imports.pdf" className='text-lowercase text-decoration-none'>
                                                        ИНСТРУКЦИЯ ПО ВЫСТАВЛЕНИЮ ЗАПРОСОВ НА ПРОДУКТЫ, АЛЬТЕРНАТИВНЫЕ ИМПОРТУ
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/cooperation/demping_ru.pdf" className='text-lowercase text-decoration-none'>
                                                        ДЕМПИНГ
                                                    </a>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Collapse>
                        <Collapse in={uzex} className='pt-2'>
                            <div id="example-collapse-text">
                                <Container>
                                    <h5>Tovat-xom ashyo birjasi</h5>
                                    <Row>
                                        <Col>
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/uzex/buyurtmachi(elektron-magazin)-lotin.pdf" className='text-lowercase text-decoration-none'>
                                                        Davlat (byudjet va korporativ) buyurtmachilari uchun yo‘riqnoma (elektron do‘kon) </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/uzex/postavshik(elektron-magazin)-lotin.pdf" className='text-lowercase text-decoration-none'>
                                                        Ishtirokchilar uchun elektron do‘kon (milliy do‘kon)da qatnashish uchun yo‘riqnoma </a>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                        <Col>
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/uzex/e-tender-postavshik.pdf" className='text-lowercase text-decoration-none'>
                                                        Инструкция для поставщика (etender.uzex.uz)
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/uzex/e-tender-zakazchik.pdf" className='text-lowercase text-decoration-none'>
                                                        Инструкция для заказчика (etender.uzex.uz)
                                                    </a>
                                                </ListGroup.Item>

                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/uzex/postavshik(auksion).pdf" className='text-lowercase text-decoration-none'>
                                                        Инструкция для поставщика для участия в аукционе
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/uzex/postavshik(elektron-magazin).pdf" className='text-lowercase text-decoration-none'>
                                                        Инструкция для участника для участия в электронном магазине(национальный магазин)
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/uzex/zakazchik(auksion).pdf" className='text-lowercase text-decoration-none'>
                                                        Инструкция для государственного (бюджетного и корпоративного) заказчика Аукцион
                                                    </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/uzex/zakazchik(elektron-magazin).pdf" className='text-lowercase text-decoration-none'>
                                                        Инструкция для государственного
                                                        (бюджетного и корпоративного)
                                                        заказчика (электронный магазин )
                                                    </a>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Collapse>
                        <Collapse in={qurilish} className='pt-2'>
                            <div id="example-collapse-text">
                                <Container>
                                    <h5>Shaffof qurilish platformasi</h5>
                                    <Row>
                                        <Col>
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/qurilish/Buyurtmachi.pdf" className='text-lowercase text-decoration-none'>
                                                        BUYURTMACHI UCHUN USLUBIY QO’LLANMA </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/qurilish/ishtirokchi_instruksiya.pdf" className='text-lowercase text-decoration-none'>
                                                        ISHTIROKCHI UCHUN USLUBIY QO’LLANMA +WALLET (KOSHELEK) </a>
                                                </ListGroup.Item>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/qurilish/Tashkilotchi.pdf" className='text-lowercase text-decoration-none'>
                                                        TASHKILOTCHI UCHUN USLUBIY QO’LLANMA</a>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                        <Col>
                                            {/*<ListGroup as="ol" numbered>*/}
                                            {/*    <ListGroup.Item variant="light" as="li">*/}
                                            {/*    </ListGroup.Item>*/}
                                            {/*</ListGroup>*/}
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Collapse>
                        <Collapse in={xtxarid} className='pt-2'>
                            <div id="example-collapse-text">
                                <Container>
                                    <h5>XT-Xarid texnologiyalari</h5>
                                    <Row>
                                        <Col>
                                            <ListGroup as="ol" numbered>
                                                <ListGroup.Item variant="light" as="li">
                                                    <a href="/docs/xtxarid/xt_xarid.pptx" className='text-lowercase text-decoration-none'>
                                                        Ro‘yxatdan o‘tish tartibi (O'zbek, Рус)
                                                    </a>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                        <Col>
                                            {/*<ListGroup as="ol" numbered>*/}
                                            {/*    <ListGroup.Item variant="light" as="li">*/}
                                            {/*    </ListGroup.Item>*/}
                                            {/*</ListGroup>*/}
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Collapse>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default About;
