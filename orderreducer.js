const ordersReducerDefaultState = [];

export default (state = ordersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return [
                ...state,
                action.orders
            ];
        
     case 'REMOVE_ORDER':
            return state.filter(({ id }) => id !== action.id);
        
     case 'EDIT_FIRST_ORDER':
             return state.map((order)=>order.id === action.id ? {...order,editing:!order.editing}:order)
    
    case 'EDIT_ORDER':
            return state.map((order) => {
                alert("hi")
                if (order.id === action.id) {
                    return {
                        ...order,
                        ...action.updates
                    };
                } else {
                    return order;
                }
            });
 
            


        case 'GET_ORDERs':
            return action.orders;
        default:
            return state;
    }
};