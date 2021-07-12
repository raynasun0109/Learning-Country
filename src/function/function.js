
export function FilterOneCountryDetail(countryName,data) {
    const filteredContent= data.filter(function (value, index, array) {

        return value.name === countryName;
    });

    return filteredContent[0]


}
