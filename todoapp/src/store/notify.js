import {toast} from 'react-toastify';

export const actionNotify = (message)=>{
      
    let notify = () => toast.info(message, {
        //position: toast.POSITION.TOP_CENTER
        autoClose: 2500
    });

    notify();
};