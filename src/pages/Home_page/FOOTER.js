import {Link} from 'react-router-dom'
import "./FOOTER.css"
function FOOTER(){
  const Footer_items=['ارتباط با ما'];
  const Footer_items1=['خدمات مشتریان']
  const Footer_item2=['درباره ما']
  return(<>
  <div className="FOOTER">
{Footer_items.map((item,index)=> <Link to ="/ContactUss"><button className="footercols">{item}</button></Link>)}
{Footer_item2.map((item,index)=> <Link to ="/AboutUs"><button className="footercols">{item}</button></Link>)}

{Footer_items1.map((item,index)=><div className="footercols">{item}</div>)}



</div>
  </>)
}

export default FOOTER;