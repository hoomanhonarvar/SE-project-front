
import "./FOOTER.css"
function FOOTER(){
  const Footer_items=['درباره ما','ارتباط با ما','خدمات مشتریان'];

  return(<>
  <div className="FOOTER">
      {Footer_items.map((item,index)=> <div className="footercols">{item}</div>)}
  </div>
  </>)
}

export default FOOTER;