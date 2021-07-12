import React, {Component} from 'react';
import styles from "./index.less";
import NotFoundImg from "./../../assets/NotFound/404.png"
import ScrollToTopOnMount from "../../components/ScrollToTop/ScrollToTop";
class Index extends Component {
    toHomePage=()=>{
        this.props.history.push("/");
    }
    render() {
        return (
            <div className={styles.container}>
                <ScrollToTopOnMount />
                    <div className={styles.imgContainer}>
                        <img src={NotFoundImg} alt="Not found"/>
                    </div>
                    <div className={styles.btnContainer}>
                        <button className={styles.notFoundBtn} onClick={this.toHomePage}>Back to Home Page</button>

                    </div>
            </div>
        );
    }
}

export default Index;
