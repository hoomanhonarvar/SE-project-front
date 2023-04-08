import App from "./../../Component/App/App.css"

function CAT_BOX(){
  let CATG=['زنانه','مردانه'];
  let CATG2=['استوک','فوتسال']
return(<>

<div className="f-row">
{CATG.map((item,index)=> <div className="CAT-CARD" id={item}><div className="CAT-img">


</div>
<div className="CAT-Details">

<button>
 {item}
</button>
</div>
</div>)}

</div>


<div className="s-row">
{CATG2.map((item,index)=> <div className="CAT-CARD" id={item}><div className="CAT-img">


</div>
<div className="CAT-Details">

<button>
 {item}
</button>
</div>
</div>)}

</div>

</>)


}

export default CAT_BOX;