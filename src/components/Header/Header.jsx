import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";

import Util from "../../utils/utils";
import axios from "../../axios/axios"

import "./Header.scss";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillMount() {
		this.setState({
			userName: "李鲸落"
		});
		setInterval(() => {
			let sysTime = Util.formateDate(new Date().getTime());
			this.setState({
				sysTime
			})
		}, 1000);
		this.getWeatherAPIData();
	}
	getWeatherAPIData() {
		// let city = "北京";

		axios.jsonp({
			url: "http://v.juhe.cn/weather/index?format=2&cityname=%E6%B5%8E%E5%8D%97&key=00d358af5f1e45e14d8366b131fffd3b"
			// type: "post",
			// dataType: "jsonp",
			// data: {
			// 	location: encodeURIComponent(city),
			// 	output: "json",
			// 	ak: "G0rGW5rIj7HRy95Dl2zidqDGBVe68GAV"
			// }
		}).then((res) => {
			if(res.status === "success") {
				let data = res.result[1];
				this.setState({
					// dayPictureUrl: data.dayPictureUrl,
					weather: data.weather
				});
			}
		}).catch(() => {});
	}
	render() {
		const { menuName, menuType } = this.props;
		return (
			<div className="header">
				<Row className="header-top">
					{
						menuType ? <Col span={6} className="logo">
							<img src="/assets/logo-ant.svg" alt=""/>
							<span>IMMOOC通用管理系统</span>
						</Col> : ""
					}
					<Col span={menuType ? 18 : 24}>
						<span>欢迎, {this.state.userName}</span>
						<a href="#">退出</a>
					</Col>
				</Row>
				{
					menuType ? "" : 
					<Row className="breadcrumb">
						<Col className="breadcrumb-title" span={4}>{menuName || "首页"}</Col>
						<Col className="weather" span={20}>
							<span className="date">{this.state.sysTime}</span>
							<span className="weather-img">
								{/*<img src={this.state.dayPictureUrl} alt=""/>*/}
							</span>
							<span className="weather-detail">{this.state.weather}</span>
						</Col>
					</Row>
				}
			</div>
			);
	}
}

const mapStateToProps = state => {
	return {menuName: state.menuName}
}
export default connect(mapStateToProps)(Header);
