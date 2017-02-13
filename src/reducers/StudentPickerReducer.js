var studentsPicker = function(state = null, action){		
	if(action.type=="PICK_STUDENT"){
		return action.payload.name;
	}else{
		return state;
	}
}
export default studentsPicker;