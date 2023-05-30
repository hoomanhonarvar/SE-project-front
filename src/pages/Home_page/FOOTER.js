import {Link} from 'react-router-dom'
import "./FOOTER.css"
function FOOTER(){
  const Footer_items=['درباره ما','ارتباط با ما'];
  const Footer_items1=['خدمات مشتریان']
  return(<>
  <div className="FOOTER">
{Footer_items.map((item,index)=> <Link to ="/ContactUss"><button className="footercols">{item}</button></Link>)}
{Footer_items1.map((item,index)=><div className="footercols">{item}</div>)}



</div>
  </>)
}

export default FOOTER;