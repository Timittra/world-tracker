import {SEARCH_COUNTRY,  FETCH_COUNTRIES, FETCH_COUNTRY, LOADING} from '../actions/types'; 

const initialState = {
    text:"", 
    countries: [], 
    loading: false, 
    country:[]
}

export const searchReducer =(state = initialState,action) => {
    switch(action.type){
        case SEARCH_COUNTRY: 
        return{
            ...state, 
            text: action.payload, 
            loading: false
        };
        case FETCH_COUNTRIES: 
        return{
            ...state, 
            countries: action.payload,
            loading: false
        };
        case FETCH_COUNTRY: 
        return{
            ...state, 
            country: action.payload,
            loading: false
        };
        case LOADING:
      return {
        ...state,
        loading: true
      };
        default: 
         return state; 
       
    }
}

export default searchReducer;