import localStorage from "localStorage";

const initState={
    countryList:JSON.parse(localStorage.getItem("learningList"))?JSON.parse(localStorage.getItem("learningList")).countryList:[],
    totalNumber:JSON.parse(localStorage.getItem("learningList"))?JSON.parse(localStorage.getItem("learningList")).countryList.length:0,
}

const reducer=(state=initState,action)=>{
    switch (action.type) {
        case "removeCountry":
            const list=state.countryList;
            const filteredList=list.filter(function (value, index, array) {
                return value.name !== action.country.name;
            });

            let data={
                countryList:filteredList,
                totalNumber:filteredList.length,
            }

            const serializedState1 = JSON.stringify(data);
            localStorage.setItem("learningList", serializedState1)

            return Object.assign({},state,{
                countryList:filteredList,
                totalNumber:filteredList.length,
            })

        case "addCountry":
            const {countryList}=state;
            countryList.push(action.country)
            let data1={
                countryList:state.countryList,
                totalNumber:state.countryList.length,
            }

            const serializedState = JSON.stringify(data1);
            localStorage.setItem("learningList", serializedState)
            return Object.assign({},state,{
                countryList:state.countryList,
                totalNumber:state.countryList.length,
            })

        default:
            return state;
    }
}

export default reducer;
