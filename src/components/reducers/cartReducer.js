
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actions/action-types/cart-actions'


const initState = {
    items: JSON.parse(localStorage.getItem("names")),
    addedItems:[],
    total: 0
}
const cartReducer= (state = initState,action)=>{

    if(action.type === ADD_TO_CART){

          let addedItem = state.items.find(item=> item.id === action.id)

         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1
             return{
                ...state,
                 total: state.total + addedItem.price
                  }
        }
         else{
            addedItem.quantity = 1;


            return{
                ...state,
                addedItems: [...state.addedItems, addedItem]
            }

        }
    }
    if(action.type === REMOVE_ITEM){
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        return{
            ...state,
            addedItems: new_items
        }
    }

    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1

          return{
              ...state
          }
    }
    if(action.type=== SUB_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)

        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            return{
                ...state,
                addedItems: new_items
            }
        }
        else {
            addedItem.quantity -= 1
            return{
                ...state
            }
        }

    }

  else{
    return state
    }

}

export default cartReducer
