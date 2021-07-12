import * as setting from "./../setting";
import {FilterOneCountryDetail} from "./../function/function"
import axios from 'axios';

/**
 * @Author Mingyang Sun
 * @Date 12/07/2021
 * @Description: Get all the countries
 * @Contact: sunmi@tcd.ie
 */

export function getAllCountry() {
    return new Promise((resolve,reject)=>{
        axios.get(`${setting.baseUrl}${setting.getAllApi}`)
            .then(function (response) {
                resolve(response)
            })
            .catch(function (error) {
                reject(error)
            })
    })

}

/**
 * @Author Mingyang Sun
 * @Date 12/07/2021
 * @Description: Get one country detail by country name
 * @Contact: sunmi@tcd.ie
 */
export function getOneCountry(countryName) {
    return new Promise((resolve,reject)=>{
        axios.get(`${setting.baseUrl}${setting.getAllApi}`)
            .then(function (response) {
                resolve(FilterOneCountryDetail(countryName,response.data))
            })
            .catch(function (error) {
                reject(error)
            })
    })

}


