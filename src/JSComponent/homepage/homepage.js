import React, { Component } from 'react';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
// import "./css/homepage.css";
import { Helmet } from 'react-helmet';
import { BackTop } from 'antd';
import Nav from "./js/nav.js";
import AppContent from "./js/AppContent";
import Catalog from "./js/Catalog"
import { fileIp } from "../../routes/index"
export default class HomePage extends Component {
    state = {
        tagName: ""
    }
    componentDidMount() {
        this.setState({
            tagName: window.location.pathname.split("/")[2] ?
                window.location.pathname.split("/")[2] : 'all'
        })
    }
    componentDidUpdate() {
        this.setState({
            tagName: window.location.pathname.split("/")[2] ?
                window.location.pathname.split("/")[2] : 'all'
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.tagName !== this.state.tagName
    }
    render() {
        const { tagName } = this.state

        console.log(this.state.tagName)
        return (
            <div className="appMain">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>首页 | ModestFun的个人博客</title>
                    <link rel="icon" href={fileIp.defaultIp + "/img/?name=logo"} />
                </Helmet>
                <div className="fixcontainer"></div>
                <Nav></Nav>
                <a href="#" id='screens4'>&nbsp;</a>
                <div className="container" >
                    <Row className="Row" style={{ backgroundColor: "rgba(255,255,255,0)", minHeight: "1000px", marginTop: "50px" }}>
                        <Col style={{ backgroundColor: "rgba(255,255,255,0)" }} xl={17} lg={16} md={23} xs={23} sm={22}>
                            <AppContent tagName={tagName}></AppContent>
                        </Col>
                        <Col style={{ backgroundColor: "rgba(255,255,255,0)" }} offset={1} xl={6} lg={7} md={0} xs={0} sm={0}>
                            <Catalog></Catalog>
                        </Col>
                    </Row>
                    <BackTop />
                </div>
            </div>
        )
    }
}

