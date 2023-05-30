import { FaBookReader } from 'react-icons/fa';

import Swal from 'sweetalert2';
const sweet2 = () => {
    const showSwalBtn = document.getElementById("forSweet1");
  
    showSwalBtn.addEventListener('click', function () {
    
        Swal.fire({
          icon: 'error',
          iconbackground:"red",
          showCloseButton: false,
          confirmButtonColor: '#4F8F84',
          cancelButtonColor: '#4F8F84',
          confirmButton: 'btn btn-success',
          title:"پرداخت انجام نشد",
          confirmButtonText: 'تلاش مجدد',
          iconColor:"#4F8F84",
          //iconbackground:"#4F8F84",
          borderradius: "40px",
      })

    });
  };
  
  export {sweet2};
  
  