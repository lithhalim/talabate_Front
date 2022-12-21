import axios from "axios"

export const FetchCount=(Filtration:any,setResultNumber:any)=>{
    axios.post(`http://192.168.8.101:5000/getcount`,
    {WHEREDATA:Filtration.WhereData,
        FilterData:`${Filtration.checkBoxData.join("")}`})
        .then((data)=>{
        setResultNumber(data?.data[0]?.count)
    })

}