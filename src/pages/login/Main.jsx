import React, { Component } from "react";
import { Form, Input, Button } from "antd";

import axios from "../../axios/axios";
import Footer from "../../components/Footer/Footer";
import Utils from "../../utils/utils";

import "./Main.scss";

const FormItem = Form.Item;
class Main extends Component {
	state = {};
	componentDidMount() {
		//每次进入登录页清除之前的登录信息
	}
	loginReq = (params) => {
		window.location.href = "/#/";
	}
	render() {
		return (
			<div className="login-page">
				<div className="login-header">
					<div className="logo">
						<img src="/assets/logo-ant.svg" alt="慕课后台管理系统"/>
						后台管理系统
					</div>
				</div>
				<div className="login-content-wrap">
					<div className="login-content">
						<div className="word">共享出行，<br/>引领城市新经济</div>
						<div className="login-box">
							<div className="error-msg-wrap">
								<div className={this.state.errorMsg ? "show" : ""}>{this.state.errorMsg}</div>
							</div>
							<div className="title">慕课欢迎你</div>
							<LoginForm ref="login" loginSubmit={this.loginReq} />
						</div>
					</div>
				</div>
				<Footer />
			</div>
			);
	}
}
export default Main;

class LoginForm extends Component {
	state = {};
	loginSubmit = (e) => {
		e && e.preventDefault();
		const _this = this;

		this.props.form.validateFieldsAndScroll((err, values) => {
			if(!err) {
				let formValue = this.props.form.getFieldDecorator();

				_this.props.loginSubmit({
					username: formValue.username,
					password: formValue.password
				});
			}
		});
	} 
	checkUsername = (rule, value, callback) => {
		var reg = /^\w+$/;

		if(!value) {
			callback("请输入用户名！");
		}else if(!reg.test(value)) {
			callback("用户名只允许英文字母");
		}else {
			callback();
		}
	}
	checkPassword = (rule, value, callback) => {
		if(!value) {
			callback("请输入密码！");
		}else {
			callback();
		}
	}
	render() {
		const { getFieldDecorator } = this.props.from;
		return (
			<Form className="login-form">
				<FormItem>
					{
						getFieldDecorator("username", {
							initialValue: "admin",
							rules: [{validator: this.checkUsername}]
						})(
							<Input placeholder="用户名" />
						)
					}
				</FormItem>
				<FormItem>
					{
						getFieldDecorator("password", {
							initialValue: "admin",
							rules: [{validator: this.checkPassword}]
						})(
							<Input placeholder="密码" />
						)
					}					
				</FormItem>
				<FormItem>
					<Button className="login-form-button" type="primary" onClick={this.loginSubmit}>登录</Button>
				</FormItem>
			</Form>
			)
	}	
}
LoginForm = Form.create({})(LoginForm)

