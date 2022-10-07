 const currencyFormat = (num)=>{
    return "$" + Number(num.toFixed(1)).toLocaleString() + ""

}
export default currencyFormat