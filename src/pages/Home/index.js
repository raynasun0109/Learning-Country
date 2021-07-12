import React, {Component} from 'react';
import Banner from "../../components/Banner/Banner";
import BannerImg from "../../assets/Home/banner.jpg";
import styles from "./index.less";
import {getAllCountry} from "../../services/CountryService";
import Heading from "../../components/Heading/Heading";
class Index extends Component {
    state={
        countryList:[],
    }
    componentDidMount(){
        this.fetchCountryList()
    }

    fetchCountryList=async ()=>{
        const countryListRawData=await getAllCountry();
        this.setState({countryList:countryListRawData.data.slice(0,3)})
    }

    jumpToCountryDetail=(pageDetail)=>{
        this.props.history.push( {pathname:`/country/${pageDetail.name}`})
    }

    toCountryListPage=()=>{
        this.props.history.push("/country")
    }

    render() {
        const {countryList}= this.state;
        return (
            <div className={styles.container}>
                <Banner text="Best Website for Learning Countries" img={BannerImg}/>
                <Heading title="Country List"/>
                <div className={styles.countryListContainer}>
                    <div className={styles.countryListContent}>
                        {
                            countryList.length>0&&countryList&&
                            countryList.map((item,index)=>{
                                return (
                                    <div key={index} className={styles.countryCard}>
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
                                                <div className={styles.detailContent}>
                                                    {item.region}
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
                </div>

                <div className={styles.countryMore} onClick={this.toCountryListPage}>
                    <button>
                        More Countries
                    </button>
                </div>

                <Heading title="Who We Are"/>
                <div className={styles.aboutContent}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

            </div>
        );
    }
}

export default Index;
