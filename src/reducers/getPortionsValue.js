
const initialState = ({ "amountfinal": 888, "adult": 3, "childrens": 1 });
const ChangeTheNumber = (state = initialState, action) => {

	switch (action.type) {
		case "INCREMENT": return action.payload;
		default: return state;
	}
}
let hussan;
var urloc = window.location.pathname;
var parts = urloc.split("/");
var last_part = parts[parts.length - 1];
let value = last_part;
//alert(value);
let da=[];
console.log(value)

let url = 'https://www.vacationsaga.com/api/single_portions/' + value;
let res = fetch(url).then(response => {
	return response.json()
  })
  .then(data => {
	da.push({'val':data})
  }).catch(e => { console.log(e) })
if(hussan!='')
{
console.log('after loop if ', da)
}
else{
	console.log('after loop else ', da)
}
//console.log('ram singh ho kya', da.pricefranc);


export default ChangeTheNumber;