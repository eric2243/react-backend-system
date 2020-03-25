import React, { Component } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavLeft from "./components/NavLeft/NavLeft";

import "./style/common.scss";

class Admin extends Component {
	render() {
		return (
			<Row className="container">
				<Col className="nav-left" span={4}>
					<NavLeft />
				</Col>
				<Col className="main" span={20}>
					<Header />
					<Row className="content">{this.props.children}</Row>
					<Footer />
				</Col>
			</Row>
			);
	}
}

export default connect()(Admin);