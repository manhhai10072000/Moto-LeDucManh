const initialState={
    card:[]
}

const CardRedux =(state=initialState,action)=>{
    switch(action.type){
        case'ADD':
        const ItemIndex = state.card.findIndex((pr)=>pr.id===action.payload.id)
        if(ItemIndex>=0){
            return{
                ...state,
                card:[...state.card]
            }
        }else{
            return{
                ...state,
                card:[...state.card,action.payload]
            }
        }
        case 'DELETE':
            return{
                ...state,
                card:state.card.filter(item=>item.id!==action.payload)
            }
        default:
            return state;
    }
}

export default CardRedux;