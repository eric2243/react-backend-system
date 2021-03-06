import React from "react";
import { Select } from "antd";

const Option = Select.Option;
export default {
	formateDate(time) {
		if(!time) return "";
		let date = new Date(time);
		let m = date.getMinutes();
		let s = date.getSeconds();

		if(m < 10) {
			m = "0" + m;
		}
		if(s < 10) {
			s = "0" + s;
		}
		return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + m + ":" + s;
	},
	pagination(data, callback) {
		return {
			onChange: (current) => {
				callback(current);
			},
			current: data.result.page,
			pageSize: data.result.pageSize,
			total: data.result.total_count,
			showTotal: () => {
				return `共${data.result.total_count}条`
			},
			showQuickJumper: true
		}
	},
	//格式化金额,单位(eg:430分=4.30元)
	formatFee(fee, suffix = "") {
		if(!fee) {
			return 0;
		}
		return Number(fee).toFixed(2) + suffix;
	},
	//格式化公里(eg:3000=3公里)
	formatMileage(mileage, text) {
		if(!mileage) {
			return 0;
		}
		if(mileage >= 1000) {
			text = text || " km";
			return mileage + text;
		}else {
			text = text || " m";
			return mileage + text;
		}
	},
	//隐藏手机号中间四位
	formatPhone(phone) {
		phone += "";
		return phone.replace(/(\d{3})\d*(\d{4})/g, "$1***$2");
	},
	//隐藏身份证中间11位
	formatIdentity(number) {
		number += "";
		return number.replace(/(\d{3})\d*(\d{4})/g, "$1***********$2");
	},
	getOptionList(data) {
		if(!data) {
			return [];
		}

		let options = []; //[<Option value="0" key="all_key">全部</Option>];

		data.map((item) => {
			options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
		});
		return options;
	},
	/**
	 * ETable 行点击通用函数
	 * @param {*选中行的索引} selectedRowKeys
	 * @param {*选中行对象} selectedItem
	 */
	updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
		if(selectedIds) {
			this.setState({
				selectedRowKeys,
				selectedItem: selectedRows
			});
		}else {
			this.setState({
				selectedRowKeys,
				selectedItem: selectedRows
			});
		}
	}
}