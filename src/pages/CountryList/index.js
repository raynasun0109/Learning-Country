import React, {Component} from 'react';
import styles from "./index.less";
import {getAllCountry,searchCountryByName,searchCountryByCallingCode,
    searchCountryByCapital,searchCountryByRegion} from "../../services/CountryService";
import {connect} from "react-redux";
import {addCountry} from "../../redux/action";
import Heading from "../../components/Heading/Heading";
// import {Toast} from "../../components/Notification/Notification";
class Index extends Component {
    state={
        countryList:[],
        totalPage:1
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

    reset=()=>{
        this.fetchCountryList()
    }
    // getTotal=()=>{
    //     const {countryList}= this.state;
    //
    //     console.log(countryList.length/10)
    //
    //     this.setState({totalPage:countryList.length%10===0?countryList.length/10:Math.floor(countryList.length/10)+1},()=>{
    //         this.renderPag()
    //     })
    // }

    fetchCountryList=async ()=>{
        const countryListRawData=await getAllCountry();
        this.setState({countryList:countryListRawData.data},()=>{
            // this.getTotal();
        })
    }

    // renderPag=()=>{
    //    const {totalPage} = this.state;
    //    const array=[];
    //    for (let i =1;i<totalPage+1;i++){
    //        array.push(i)
    //    }
    //
    //    this.setState({})
    // }

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
        }
    }

    inputNameChange =async(e)=>{
        const countryListRawData=await searchCountryByName(e.target.value);
        this.setState({countryList:countryListRawData.data})
    }
    inputRegionChange =async(e)=>{
        const countryListRawData=await searchCountryByRegion(e.target.value);
        this.setState({countryList:countryListRawData.data})
    }

    inputCallingCodeChange=async(e)=>{
        const inputCallingCode=e.target.value
        //if user input "+" before the calling code
        if (inputCallingCode[0]==="+") {
            const countryListRawData=await searchCountryByCallingCode(inputCallingCode.substring(1));
            this.setState({countryList:countryListRawData.data})
        } else {
            const countryListRawData=await searchCountryByCallingCode(inputCallingCode);
            this.setState({countryList:countryListRawData.data})
        }

    }

    inputCapitalCityChange=async(e)=>{
        const countryListRawData=await searchCountryByCapital(e.target.value);
        this.setState({countryList:countryListRawData.data})
    }


    render() {
        const {countryList,totalPage}= this.state;
        console.log(countryList,totalPage)
        return (
            <div className={styles.container}>
                <Heading title="Country List"/>
                <div className={styles.filterArea}>
                    <div className={styles.filterCell}>
                        <div className={styles.filterTitle}>
                    Country Name:
                        </div>
                        <div className={styles.filterContent}>
                            <input className={styles.inputName} onChange={(e)=>this.inputNameChange(e)} placeholder="Please input the country's name"/>
                        </div>
                    </div>
                    <div className={styles.filterCell}>
                        <div className={styles.filterTitle}>
                            Region:
                        </div>
                        <div className={styles.filterContent}>
                            <input className={styles.inputName} onChange={(e)=>this.inputRegionChange(e)} placeholder="Please input the region"/>
                        </div>
                    </div>
                    <div className={styles.filterCell}>
                        <div className={styles.filterTitle}>
                            Calling Code:
                        </div>
                        <div className={styles.filterContent}>
                            <input className={styles.inputName} onChange={(e)=>this.inputCallingCodeChange(e)} placeholder="Please input the calling code"/>
                        </div>
                    </div>
                    <div className={styles.filterCell}>
                        <div className={styles.filterTitle}>
                            Capital City:
                        </div>
                        <div className={styles.filterContent}>
                            <input className={styles.inputName} onChange={(e)=>this.inputCapitalCityChange(e)} placeholder="Please input the capital city"/>
                        </div>
                    </div>
                   <div className={styles.btnContainer}>
                    <button onClick={this.reset}>Reset</button>
                   </div>
                </div>
                <div className={styles.countryListContainer}>
                    <div className={styles.countryListContent}>
                        {
                            countryList&&
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
                <div className={styles.paginationContainer}>

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
