import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Admin from "./Admin";
import Common from "./Common";
import Home from "./pages/home/Main";
import City from "./pages/city/Main";
import Order from "./pages/order/Main";
import BikeMap from "./pages/map/BikeMap";
import User from "./pages/user/Main";
import OrderDetail from "./pages/order/Detail";
import Login from "./pages/login/Main";
import Bar from "./pages/echarts/bar/Main";
import Line from "./pages/echarts/line/Main";
import Pie from "./pages/echarts/pie/Main";
import RichText from "./pages/rich/Main";
import Permission from "./pages/permission/Main";

class ERouter extends Component {
	render() {
		return (
			<HashRouter>
				<App>
					<Switch>
						<Route path="/login" component={Login}></Route>
						<Route path="/common" render={() =>
							<Common>
								<Route path="/common/order/detail/:orderId" component={OrderDetail}/>
							</Common>
						}/>
						<Route path="/" render={() =>
							<Admin>
								<Switch>
									<Route path="/home" component={Home}/>
									<Route path="/city" component={City}/>
									<Route path="/order" component={Order}/>
									<Route path="/bikeMap" component={BikeMap}/>
									<Route path="/user" component={User}/>
                                    <Route path="/charts/bar" component={Bar} />
                                    <Route path="/charts/pie" component={Pie} />
                                    <Route path="/charts/line" component={Line} />
                                    <Route path="/rich" component={RichText} />
                                    <Route path="/permission" component={Permission} />
								</Switch>
							</Admin>
						}>
						</Route>
					</Switch>
				</App>
			</HashRouter>
			)
	}
}

export default ERouter;