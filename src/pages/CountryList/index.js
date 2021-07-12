import React, {Component} from 'react';
import styles from "./index.less";
import {getAllCountry} from "../../services/CountryService";
import {connect} from "react-redux";
import {addCountry} from "../../redux/action";
import Heading from "../../components/Heading/Heading";
// import {Toast} from "../../components/Notification/Notification";
class Index extends Component {
    state={
        countryList:[],
        // productType:["Standard","Other"],
        // chosenProductType:"",
        // subCategory:["Highly Recommended","Most Popular"],
        // chosenSubCategory:"",
        // sortBy:"",
        // sortByChoice:[
        //     {
        //         name:"Price",
        //         content:['From Low to High',"From High to Low"]
        //     },
        //     {
        //         name:"ETA",
        //         content:['From Low to High',"From High to Low"]
        //     }
        // ]
    }

    componentDidMount(){
        this.fetchCountryList()
    }

    fetchCountryList=async ()=>{
        const countryListRawData=await getAllCountry();
        this.setState({countryList:countryListRawData.data})
    }

    jumpToCountryDetail=(pageDetail)=>{
        this.props.history.push( {pathname:`/country/${pageDetail.name}`})
    }

    addToLearningList=(item)=>{
        const {countryList}=this.props.state;
        //check whether this item already exist in the learning list
        const itemIndex=countryList.map(obj => obj.name).indexOf(item.name);
        //if exist, show notification
        //else, add to the learning list
        if (itemIndex===-1){
            this.props.addCountry(item)
        } else {

            // return <Toast  msg="操作成功"
            //                time={2000}/>
            console.log("exist")
            // Toast.success('成功‘)
        }
    }

    render() {
        const {countryList}= this.state;
        return (
            <div className={styles.container}>
                <Heading title="Country List"/>
                <div className={styles.countryListContainer}>
                    <div className={styles.countryListContent}>
                        {
                            countryList.length>0&&countryList&&
                            countryList.map((item,index)=>{
                                return (
                                    <div key={index} className={styles.countryCard}>
                                        <div className={styles.left}>
                                            <div className={styles.imgContainer}>
                                                <img alt={`${item.altSpellings[0]} flag`} src={item.flag}/>
                                            </div>
                                        </div>
                                        <div className={styles.right}>
                                            <div className={styles.detailCell}>
                                                <div className={styles.detailTitle}>
                                                    Country Name:
                                                </div>
                                                <div className={styles.detailContent}>
                                                    {item.name}
                                                </div>
                                            </div>
                                            <div className={styles.detailCell}>
                                                <div className={styles.detailTitle}>
                                                    Country Capital:
                                                </div>
                                                <div className={styles.detailContent}>
                                                    {item.capital}
                                                </div>
                                            </div>
                                            <div className={`${styles.detailCell}`}>
                                                <div className={`${styles.detailTitle}`}>
                                                    Population:
                                                </div>
                                                <div className={styles.detailContent}>

                                                    {item.population}

                                                </div>
                                            </div>
                                            <div className={styles.detailCell}>
                                                <div className={styles.detailTitle}>
                                                    Region:
                                                </div>
                                                <div className={styles.detailContent}>
                                                    {item.region}
                                                </div>
                                            </div>
                                            <div className={styles.detailCell}>
                                                <div className={styles.detailTitle}>
                                                    Languages:
                                                </div>
                                                <div className={styles.detailContent}>
                                                    {
                                                        item.languages&&
                                                        item.languages.map((language,index)=>{
                                                            return (
                                                                <div key={index}>
                                                                    {language.name}
                                                                    {index!==item.languages.length-1?",":""}

                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>

                                            <div className={styles.detailPageBtn}>
                                                <button className={styles.detailBtn} onClick={()=>{this.jumpToCountryDetail(item)}}>
                                                    Details
                                                </button>
                                                <button className={styles.addToLearningListBtn} onClick={()=>{this.addToLearningList(item)}}>
                                                    Add To Learning list
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        addCountry(item){
            // message.success("Added Successfully")
            dispatch(addCountry(item))
        },
    }
}
const mapStateToProps=(state)=>{
    return {
        state,

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);
