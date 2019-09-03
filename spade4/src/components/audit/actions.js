import { AuditActionTypes } from './constants';

export const showAll = () => ({
    type: AuditActionTypes.SHOW_ALL,
    payload:{id: 1}
  })
  // API_URL="http://localhost:58889/api/";
  // API_URL="https://google.com/api/";
  // input:{
  //   id:"",
  //   value:""
  // }
  // export const load = (input) => {
  //   return (dispatch) => {
  //     dispatch(showAll());
  //     axios({
  //       url:`${API_URL}Controller/Getdata`,
  //       method:'POST',
  //       data:input
  //     })
  //     .then((response) =>{
  //       dispatch(onSuccess(response.data));
  //     })
  //     .catch((error)=>{
  //       dispatch(onError(error.response.data));
  //     });
  //   }
  // }

  // export const loadById = (id) => {
  //   return (dispatch) => {
  //     dispatch(showAll());
  //     axios({
  //       url:`${API_URL}Controller/Getdata`,
  //       method:'GET',
  //       params:{id}
  //     })
  //     .then((response) =>{
  //       dispatch(onSuccess(response.data));
  //     })
  //     .catch((error)=>{
  //       dispatch(onError(error.response.data));
  //     });
  //   }
  // }