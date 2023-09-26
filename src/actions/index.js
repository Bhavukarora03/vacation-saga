export const incNumber = (num,guest,child,portionid) => async(dispatch) =>{
	
	let child1=0;
	if(child=='')
	{
		let child1=-1
	}
	else
	{
		let child1=child
	}
	console.log('amount '+num);
	console.log('adult '+guest);
	console.log('child '+child1);
	dispatch({
		type: "INCREMENT",
		payload:({"amountfinal":num,"adult":guest,"childrens":child1,"portionid":portionid}),
		
	})
}