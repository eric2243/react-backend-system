import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

import { switchMenu } from "../../redux/actions/ebikeAction";
import MenuConfig from "../../config/menuConfig";

import "./NavLeft.scss";

// const  SubMenu  = Menu.SubMenu;
const { SubMenu } = Menu;
class NavLeft extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		currentKey: ""
	// 	}
	// }
	state = {
		currentKey: ""	
	}
	//菜单点击
	handleClick = ({item, key}) => {
		if(key === this.state.currentKey) {
			return false;
		}
		//事件派发，自动调用reducer，通过reducer保存到store对象中
		const { dispatch } = this.props;

		dispatch(switchMenu(item.props.title));

		this.setState({
			currentKey: key
		});
	}
	componentWillMount() {
		const menuTreeNode = this.renderMenu(MenuConfig);

		this.setState({
			menuTreeNode
		});
	}
	//菜单渲染
	renderMenu = (data) => {
		return data.map((item) => {
			if(item.children) {
				return (
					<SubMenu title={item.title} key={item.key}>
						{this.renderMenu(item.children)}
					</SubMenu>
					);
			}
			return <Menu.Item title={item.title} key={item.key}>
				<NavLink to={item.key}>{item.title}</NavLink>
			</Menu.Item>
		});
	}
	homeHandleClick = () => {
		const { dispatch } = this.props;

		dispatch(switchMenu("首页"));
		this.setState({
			currentKey: ""
		});
	}
	render() {
		return (
			<div>
				<NavLink to="/home" onClick={this.homeHandleClick}>
					<div className="logo">
						<img src="/assets/logo.ant.svg" alt=""/>
						<h1>Imooc Ms</h1>
					</div>
				</NavLink>
				<Menu onClick={this.handleClick} theme="dark">
					{this.state.menuTreeNode}
				</Menu>
			</div>		
			);
	}
}

export default connect()(NavLeft);