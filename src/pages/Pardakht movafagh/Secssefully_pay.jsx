import { FaBookReader } from 'react-icons/fa';
import '../Pardakht movafagh/CustomSweet.css'
import Swal from 'sweetalert2';
const sweet = () => {
    const showSwalBtn = document.getElementById("forSweet");
  
    showSwalBtn.addEventListener('click', function () {
    
        Swal.fire({
          icon: 'success',
          iconbackground:"red",
          showCloseButton: false,
          confirmButtonColor: '#4F8F84',
          cancelButtonColor: '#4F8F84',
          confirmButton: 'btn btn-success',
          title:"پرداخت با موفقیت انجام شد",
          confirmButtonText: 'ادامه خرید',
          iconColor:"#4F8F84",
          //iconbackground:"#4F8F84",
          borderradius: "40px",
      })

    });
  };
  
  export {sweet};
  
  