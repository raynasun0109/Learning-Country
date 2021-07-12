import React, {Component} from 'react';
import {connect} from "react-redux";
import {removeCountry,addCountry} from "../../redux/action";
import styles from "./index.less";
import EmptyImg from "../../assets/LearningList/Empty.png";
import Heading from "../../components/Heading/Heading";
class Index extends Component {

    toCountryList=()=>{
        this.props.history.push("/country")
    }

    jumpToCountryDetail=(pageDetail)=>{
        this.props.history.push( {pathname:`/country/${pageDetail.name}`})
    }


    render() {
        const {countryList}=this.props.state;
        return (
            <div className={styles.container}>
                <Heading title="Learning List"/>
                <div className={styles.listContainer}>
                    {
                        countryList.length===0
                        ?  <div className={styles.emptyContainer}>
                                <img src={EmptyImg} alt="img"/>
                                <div className={styles.content}>
                                    Your Learning List is empty
                                </div>
                                <div className={styles.chooseMore} onClick={this.toCountryList}>
                                    Click here to choose more
                                </div>
                            </div>
                            :
                            <div className={styles.countryListContainer}>
                                <div className={styles.countryListContent}>
                                    {
                                        countryList.length>0&&countryList&&
                                        countryList.map((item,index)=>{
                                            return (
                                                <div key={index} className={styles.countryCard}>
                                                    <div className={styles.removeBtn}>
                                                       <div className={styles.remove} onClick={()=>{this.props.removeCountry(item)}}>
                                                        X
                                                       </div>
                                                    </div>
                                                    <div className={styles.imgContainer}>
                                                        <img alt={`${item.altSpellings[0]} flag`} src={item.flag}/>
                                                    </div>
                                                    <div className={styles.contentContainer}>
                                                        <div className={styles.detailTitle}>
                                                            {item.name}
                                                        </div>
                                                        <div className={styles.detailContent}>
                                                            {item.nativeName}
                                                        </div>
                                                        <div className={styles.detailPageBtn}>
                                                            <button className={styles.detailBtn} onClick={()=>{this.jumpToCountryDetail(item)}}>
                                                                Details
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={styles.btnContainer}>
                                    <button onClick={this.toCountryList}>Add More</button>
                                </div>
                            </div>

                    }

                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        state,

    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addCountry(item){
            dispatch(addCountry(item))
        },
        removeCountry(item){
            dispatch(removeCountry(item))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);
