import React, {Component} from 'react';
import styles from "./index.less";
import {getOneCountry} from "../../services/CountryService";
import {connect} from "react-redux";
import {addCountry} from "../../redux/action";
import ScrollToTopOnMount from "../../components/ScrollToTop/ScrollToTop";
class Index extends Component {
    state={
        countryDetail:[]
    }

    componentDidMount(){
        this.fetchOneCountry()
    }

    fetchOneCountry=async ()=>{
        const {id}=this.props.match.params;
        const countryRawData=await getOneCountry(id);
        this.setState({countryDetail:countryRawData})
    }

    toLearningList=()=>{

    }

    goBack=()=>{
        this.props.history.push("/country");
    }

    render() {
        const {countryDetail}= this.state;
        {console.log("countryDetail",countryDetail)}
        return (
            <div className={styles.container}>
                <ScrollToTopOnMount/>
                <div className={styles.backBtnContainer}>
                    <button onClick={this.goBack}>&lt; Back</button>
                </div>

                <div className={styles.basicContent}>
                    <div className={styles.left}>
                        {
                            countryDetail.flag&&
                            <img alt={`${countryDetail.altSpellings[0]} flag`} src={countryDetail.flag}/>

                        }
                    </div>

                    <div className={styles.right}>
                        <div className={styles.titleContainer}>
                            <div className={styles.title}>
                                Basic Information
                            </div>
                            <div className={styles.line}/>
                        </div>

                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Country Name:
                            </div>
                            <div className={styles.detailContent}>
                                {
                                    countryDetail.name&&
                                    countryDetail.name
                                }
                            </div>

                        </div>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Capital:
                            </div>
                            <div className={styles.detailContent}>
                                {countryDetail.capital}
                            </div>
                        </div>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Population:
                            </div>
                            <div className={styles.detailContent}>
                                {countryDetail.population&&countryDetail.population}
                            </div>
                        </div>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Languages:
                            </div>
                            <div className={`${styles.detailContent}`}>

                                {
                                    countryDetail.languages&&
                                    countryDetail.languages.map((language,index)=>{
                                        return (
                                            <div key={index}>
                                                {language.name}
                                                {index!==countryDetail.languages.length-1?",":""}

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Currencies:
                            </div>
                            <div className={`${styles.detailContent}`}>

                                {
                                    countryDetail.currencies&&
                                    countryDetail.currencies.map((currency,index)=>{
                                        return (
                                            <div key={index}>
                                                {currency.code}
                                                {index!==countryDetail.currencies.length-1?",":""}

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                         <div className={styles.actionContainer}>
                            <div className={styles.actionArea}>
                                <div className={styles.btnContainer}>
                                    <button className={styles.addToLearningListBtn} onClick={()=>{this.props.addCountry(countryDetail)}}>Add to Learning List</button>
                                    <button className={styles.checkLearningListBtn} onClick={this.toLearningList}>Check Learning List</button>

                                </div>
                            </div>
                        </div>

            </div>

                </div>


                <div className={styles.additionalContentContainer}>

                    <div className={styles.titleContainer}>
                        <div className={styles.title}>
                            Additional Information
                        </div>
                        <div className={styles.line}/>
                    </div>
                    <div className={styles.additionalContent}>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Borders:
                            </div>
                            <div className={styles.detailContent}>
                                {
                                    countryDetail.borders&&
                                    countryDetail.borders.map((border,index)=>{
                                        return (
                                            <div key={index}>
                                                {border}
                                                {index!==countryDetail.borders.length-1?",":""}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Demonym:
                            </div>
                            <div className={styles.detailContent}>
                                {countryDetail.demonym&&countryDetail.demonym}
                            </div>
                        </div>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Timezones:
                            </div>
                            <div className={styles.detailContent}>
                                {
                                    countryDetail.timezones&&
                                    countryDetail.timezones.map((timezone,index)=>{
                                        return (
                                            <div key={index}>
                                                {timezone}
                                                {index!==countryDetail.timezones.length-1?",":""}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Calling Codes:
                            </div>
                            <div className={styles.detailContent}>
                                {
                                    countryDetail.callingCodes&&
                                    countryDetail.callingCodes.map((callingCode,index)=>{
                                        return (
                                            <div key={index}>
                                                {callingCode}
                                                {index!==countryDetail.callingCodes.length-1?",":""}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.detailCell}>
                            <div className={styles.detailTitle}>
                                Regional Blocs:
                            </div>
                            <div className={styles.detailContent}>
                                {
                                    countryDetail.regionalBlocs&&
                                    countryDetail.regionalBlocs.map((regionalBloc,index)=>{
                                        return (
                                            <>
                                                <div key={index} className={styles.regionalBlocsContainer}>
                                                    Acronym:{regionalBloc.acronym}
                                                </div>
                                                <div key={index} className={styles.regionalBlocsContainer}>
                                                    Name:{regionalBloc.name}
                                                    {index!==countryDetail.regionalBlocs.length-1?",":""}
                                                </div>
                                            </>

                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default Index;
const mapDispatchToProps=(dispatch)=>{
    return {
        addCountry(item){
            // message.success("Added Successfully")
            dispatch(addCountry(item))
        },
    }
}
export default connect(null,mapDispatchToProps)(Index);
