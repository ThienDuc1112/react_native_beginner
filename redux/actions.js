export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const UPDATE_USER_AGE = 'INCREASE_AGE';
export const GET_CITIES = 'GET_CITIES';
const API = 'https://mocki.io/v1/ec8f137e-c8ae-4293-967f-082fafb5598d';

export const getCity = () => {
    try{
        return async dispatch => {
            const result = await fetch(API,
                {method: 'GET',
                headers:{'Content-Type':"application/json"}
            });
            const json = await result.json();
            if(json){
                dispatch({
                    type: GET_CITIES,
                    payload: json
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};

export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: parseInt(age),
    });
};

export const increaseAge = (age) => dispatch => {
    dispatch ({
        type: INCREASE_AGE,
        payload : (parseInt (age)+1),
    })
}