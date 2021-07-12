// import React, {Component} from 'react';
// import styles from "./Notification.less";
//
// class Notification extends Component {
//     render() {
//         const {content}= this.props
//         return (
//             <div className={styles.notifyContainer}>
//                 <div className={styles.notifyContent}>
//                     ssssss
//                 </div>
//
//             </div>
//         );
//     }
// }
//
// export default Notification;

// import React, { Component } from 'react'
// // import PropTypes from 'prop-types';
//
// // toast 弹框组件
// class Toast extends Component {
//     static defaultProps = {
//         msg: '操作成功', // 默认提示语
//         time: 2000, // 默认弹框出现到消失的时间
//     }
//
//     // static propTypes = {
//     //     msg: PropTypes.string,
//     //     time: PropTypes.number,
//     // }
//
//     num = 1;
//     componentDidMount() {
//         const { msg, time } = this.props;
//         this.showToast(msg, time);
//     }
//
//     showToast = (msg, duration) => {
//         duration = isNaN(duration) ? 2000 : duration;
//         var m = document.createElement('div');
//         m.innerHTML = msg;
//         m.style.cssText = "width:50%; min-width: 180px; background:red; opacity: 0.6; height: auto; min-height: 30px; color: #fff; line-height: 30px; text-align: center; border-radius: 4px; position: fixed; top: 60%; left: 20%; z-index: 9999;"
//         document.body.appendChild(m);
//         setTimeout(function() {
//             var d = 0.5;
//             m.style.webkitTransition = 'opacity ' + d + 's ease-in';
//             m.style.opacity = '0';
//             setTimeout(function() {
//                 document.body.removeChild(m)
//             }, d * 1000);
//         }, duration);
//     }
//
//     render() {
//         return [];
//     }
// }
// export default Toast;


import React, {Component} from 'react';
import ReactDom from 'react-dom'
import success from "./../../assets/logo.png"
let timer = null
let _scrollTop = 0
export default class Toast extends Component {
    constructor(props){
        super(props)
    }
    static success(mes='success', duration = 2500){
        init()
        setTime(duration)
        ReactDOM.render(
            <>
                <div className="toast">
                    <div className="toast-box">
                        <img className="toast-icon" src={success} alt=""/>
                        <span>{mes}</span>
                    </div>
                </div>
            </>,
            document.getElementById('toast')
        )
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}
//弹层出现时设置body类名，防止页面滚动
function popupOpen(){
    _scrollTop = document.scrollingElement.scrollTop
    document.body.classList.add('body-popup')
    document.body.style.top = - _scrollTop + 'px'
}
//弹层隐藏时恢复滚动
function popupClose(){
    document.body.classList.remove('body-popup')
    document.scrollingElement.scrollTop = _scrollTop
}
//设置loading
function setLoading(status){
    let toast = document.getElementById('toast')
    if(status){
        toast.style.display = 'block'
        popupOpen()
    }else{
        toast.style.display = 'none'
        popupClose()
    }
}

function init(){
    clearTimeout(timer)
    let toast = document.getElementById('toast')
    if(toast){
        toast.style.display = 'block'
    }else{
        let div = document.createElement('div')
        div.setAttribute('id', 'toast')
        document.body.appendChild(div)
    }
    popupOpen()
}
//设置定时器
function setTime(duration){
    timer = setTimeout(()=>{
        let toast = document.getElementById('toast')
        if(toast){
            toast.style.display = 'none'
            popupClose()
        }
    }, duration)
}


// export default Toast;
