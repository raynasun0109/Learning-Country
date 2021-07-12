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
        axios.get(`${setting.baseUrl}${setting.getOneCountry}/${countryName}`)
            .then(function (response) {
                resolve(response.data[0])
            })
            .catch(function (error) {
                reject(error)
            })
    })

}

/**
 * @Author Mingyang Sun
 * @Date 12/07/2021
 * @Description: Search country by name
 * @Contact: sunmi@tcd.ie
 */
export function searchCountryByName(countryName) {
    return new Promise((resolve,reject)=>{
        axios.get(`${setting.baseUrl}${setting.searchCountryByNameApi}/${countryName}`)
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
 * @Description: Search country by region
 * @Contact: sunmi@tcd.ie
 */
export function searchCountryByRegion(region) {
    return new Promise((resolve,reject)=>{
        axios.get(`${setting.baseUrl}${setting.searchCountryByRegionApi}/${region}`)
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
 * @Description: Search country by capital
 * @Contact: sunmi@tcd.ie
 */
export function searchCountryByCapital(capital) {
    return new Promise((resolve,reject)=>{
        axios.get(`${setting.baseUrl}${setting.searchCountryByCapitalCityApi}/${capital}`)
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
 * @Description: Search country by callingcode
 * @Contact: sunmi@tcd.ie
 */
export function searchCountryByCallingCode(callingcode) {
    return new Promise((resolve,reject)=>{
        axios.get(`${setting.baseUrl}${setting.searchCountryByCallingCodeApi}/${callingcode}`)
            .then(function (response) {
                resolve(response)
            })
            .catch(function (error) {
                reject(error)
            })
    })
}
