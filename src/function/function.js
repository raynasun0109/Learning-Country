/**
 * @Author Mingyang Sun
 * @Date 12/07/2021
 * @Description: Filter country based on country's name
 * @Contact: sunmi@tcd.ie
 */
export function FilterOneCountryDetail(countryName,data) {
    const filteredContent= data.filter(function (value, index, array) {

        return value.name === countryName;
    });

    return filteredContent[0]


}
