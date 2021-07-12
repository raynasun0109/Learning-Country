import React, {Component} from 'react';
import styles from "./header.less";
import Logo from "../../assets/logo.png";
// import {Badge} from "antd";
import CollapseIcon from "../../assets/Header/collapse.png";
import {connect} from "react-redux";
import collectionIcon from "../../assets/Header/collectionIcon.png"
import {withRouter} from "react-router-dom"
class Header extends Component {
    state={
        collapse: false,
        isOpenSideMenu:false,
        menu:[
            {
                name: 'Home',
                path: '/',

            },
            {
                name: 'Country List',
                path: '/country',

            },
            {
                name: 'About Us',
                path: '/about',

            },
        ]

    }


    componentDidMount() {
        this.checkRouter()
        window.addEventListener('reseize', this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({ collapse: window.innerWidth < 1024 });
    }
    checkRouter = () => {
        let {pathname} = window.location;
        this.setState({ pathname: pathname })
    }

    jumpToPage=(pathName)=>{
        this.props.history.push(pathName);
        this.checkRouter()
    }

    toHomePage=()=>{
        this.props.history.push("/");
        this.checkRouter()
    }
    toLearningList=()=>{
        this.props.history.push("/learningList");
        this.checkRouter()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize.bind(this));
    }

    openSideMenu=()=>{
        const { isOpenSideMenu } = this.state;
        this.setState({ isOpenSideMenu: !isOpenSideMenu });
    }

    render() {
        const {menu,pathname,collapse,isOpenSideMenu}= this.state;
        const {totalNumber}=this.props.state;
        console.log("totalNumber",totalNumber)
        console.log(this.props)
        return (
            <div className={styles.header}>
                {
                    collapse
                    ?
                        <>
                            <div className={styles.logoArea} onClick={this.toHomePage}>
                                <img src={Logo} alt="img"/>
                            </div>
                            <div className={styles.collapseBtn} onClick={this.openSideMenu}>
                                <img src={CollapseIcon} alt="img"/>
                            </div>
                            <div className={`${isOpenSideMenu?styles.sideBarArea : styles.closeSideBarArea} ${styles.sideBarContainer}`}>
                                <div className={styles.menuArea}>
                                    {
                                        menu.map((item,index)=>{
                                            return (
                                                <div className={styles.menuCell} key={index} onClick={()=>{this.jumpToPage(item.path)}}>
                                                    {item.name}
                                                    <div className={pathname===item.path?styles.activeCell:styles.inActiveCell}/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={styles.collectionContainer}>

                                    <div className={styles.collectionArea}>
                                        {totalNumber!==0&&
                                        <div className={styles.numberContainer}>
                                            <div className={styles.number}>
                                                {totalNumber}
                                            </div>

                                        </div>}
                                        <img alt="img" src={collectionIcon} onClick={this.toLearningList}/>
                                    </div>
                                </div>
                            </div>

                        </>
                        :<>
                            <div className={styles.logoArea} onClick={this.toHomePage}>
                                <img src={Logo} alt="img"/>
                            </div>
                            <div className={styles.menuArea}>
                                {
                                    menu.map((item,index)=>{
                                        return (
                                            <div className={styles.menuCell} key={index} onClick={()=>{this.jumpToPage(item.path)}}>
                                                {item.name}
                                                <div className={pathname===item.path?styles.activeCell:styles.inActiveCell}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={styles.collectionContainer}>

                                <div className={styles.collectionArea}>
                                    {totalNumber!==0&&
                                    <div className={styles.numberContainer}>
                                        <div className={styles.number}>
                                        {totalNumber}
                                        </div>

                                    </div>}
                                    <img alt="img" src={collectionIcon} onClick={this.toLearningList}/>
                                </div>
                            </div>
                        </>
                }


            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        state,
    }
}
export default connect(mapStateToProps)(withRouter(Header));
// export default withRouter(Header);
