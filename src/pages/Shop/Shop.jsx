import FOOTER from '../Home_page/FOOTER';
import { IoHeadsetOutline } from 'react-icons/io5'; 
import { IoCartOutline } from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import './Shop.css'
import Button from "./../../Component/Button/Button"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Shop=()=>{
    document.body.style.backgroundColor = "white";
    return(
        <>
            <div className='Header'>
                <div className='Icons'>
                    <Link to ="/cart">
                    <button style={{background:'transparent'}}>
                    <IoCartOutline className='Icon move-left'/>
                    </button>
                    </Link>
                    <button style={{background:'transparent'}}>
                    <IoNotificationsOutline className='Icon'/>
                    </button>
                    <button style={{background:'transparent'}}>
                    <IoHeadsetOutline className='Icon'/>
                    </button>
                    <button className='search-icon Icon'><IoSearchOutline /></button>
                    <input className="input-field" type="text"></input>
                </div>
            </div>
            <div className='line'>
            <hr className='horizontal-line'/>
            </div>
            <div className='total'>
                <div className='search-result'>
                    <p style={{direction:'rtl'}}>نتیجه جستجو :</p>
                </div>
                <div className="w3-sidebar w3-bar-block Sidebar">
                    <div className='category'>
                    <p className='w3-bar-item'>دسته بندی</p>
                        <input type={'checkbox'} name={'men'}></input>
                        <label for='men' style={{marginRight:'5px'}}>مردانه</label>
                        <br></br>
                        <input type={'checkbox'} name={'men'}></input>
                        <label for='men' style={{marginRight:'5px'}}>فوتسال</label>                        <br></br>
                        <input type={'checkbox'} name={'men'}></input>
                        <label for='men' style={{marginRight:'5px'}}>استوک</label>                        <br></br>
                        <input type={'checkbox'} name={'men'}></input>
                        <label for='men' style={{marginRight:'5px'}}>زنانه</label>                        <br></br>
                    </div>
                    <br></br>
                    <hr className='horizontal-line'/>
                    <div className='gender'>
                        <p className='w3-bar-item'>جنسیت</p>
                        <input type={'checkbox'} name={'men'}></input>
                        <label for='men' style={{marginRight:'5px'}}>مرد</label>
                        <br></br>
                        <input type={'checkbox'} name={'men'}></input>
                        <label for='men' style={{marginRight:'5px'}}>زن</label>                        <br></br>
                    </div>
                    <hr className='horizontal-line'/>
                    <div className='brand'>
                        <p className='w3-bar-item'>برند</p>
                        <input type={'checkbox'} name={'men'}></input>
                        <label for='men' style={{marginRight:'5px'}}>نایکی</label>
                        <input type={'checkbox'} name={'men'}></input>
                        <label for='men' style={{marginRight:'5px'}}>آدیداس</label>                        <br></br>
                        <input type={'checkbox'} name={'men'}></input>
                        <label for='men' style={{marginRight:'5px'}}>سالومون</label>                        <br></br>
                        <input type={'checkbox'} name={'men'}></input>
                        <label for='men' style={{marginRight:'5px'}}>آسیکس</label>                        <br></br>
                        <hr className='horizontal-line'/>
                    </div>
                </div>
            </div>
            <div className='Footer'>
                <FOOTER />
            </div>
        </>
    )}

export default Shop
