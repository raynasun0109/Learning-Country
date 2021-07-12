import React, {Component} from 'react';
import styles from "./Heading.less";


class Heading extends Component {
    render() {
        const {title} = this.props;
        return (
            <div className={styles.titleContainer}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.line}/>
            </div>
        );
    }
}

export default Heading;
