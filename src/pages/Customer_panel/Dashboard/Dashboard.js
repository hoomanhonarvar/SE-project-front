import React, { Component } from 'react'

export default class Dashboard extends Component {
  
    render() {
     
        return (
            <div>
              <div className="content-wrapper" style={{backgroundColor:"#0d1225"}}  >
                  {/* Content Header (Page header) */}
                   <div className="content-header">
                      <div className="container-fluid">
                        <div className="row mb-2">
                          <div className="col-sm-6">
                            <h1 className="m-0 " style={{color:"white"}}>داشبورد</h1>
                          </div>{/* /.col */}
                            {/* /.col */}
                        </div>{/* /.row */}
                      </div>{/* /.container-fluid */}
                    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-6 col-6">
            {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>
                <p>میزان خرید</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag" />
              </div>
              <a href="#" className="small-box-footer">اطلاعات بیشتر<i className="fas fa-arrow-circle-right" /></a>
            </div>
            
          </div>
          {/* ./col */}
          <div className="col-lg-6 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
                <p>فاکتورها</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars" />
              </div>
              <a href="#" className="small-box-footer">اطلاعات بیشتر <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
        </div>
        {/* /.row */}
        {/* Main row */}
        {/* /.row (main row) */}
      </div>{/* /.container-fluid */}
    </section>
    
            <section className="content" style={{textAlign:"center"}}>
                <div className="container-fluid">
                    <div className="row">
                      <section className="col-lg-12 connectedSortable">
                        
                <div className="card" >
                 <div className="card-header" style={{display:"grid"}}>
                  <h3 className="card-title">
                    <i className="ion ion-clipboard mr-1" />
                      اطلاعات کاربر
                   </h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <ul className="todo-list" data-widget="todo-list">
                  <li>
                    {/* drag handle */}
                    {/* checkbox */}
                    {/* todo text */}
                    <span className="text">نام کاربر : علی رنجبران</span>
                    <span className="handle">
                    <img style={{width:'32px'}} src='./user.png'/>
                    </span>
                    {/* Emphasis label */}
                     {/* General tools such as edit or delete*/}
                  </li>
                  <li>
                    {/* drag handle */}
                   
                    {/* checkbox */}
                    {/* todo text */}
                    <span className="text"   >شماره تماس  :  0910000000   </span>
                    <span className="handle">
                    <img style={{width:'32px'}} src="./phone-call.png"/>
                    </span>
                    {/* Emphasis label */}
                     {/* General tools such as edit or delete*/}
                  </li>
                  <li>
                    {/* drag handle */}
                   
                    {/* checkbox */}
                    {/* todo text */}
                    <span className="text"> a@a.com</span>
                    <span className="text"> : ایمیل </span>
                    
                    <span className="handle">
                    <img style={{width:'32px'}} src='./email.png'/>
                    </span>
                    {/* Emphasis label */}
                     {/* General tools such as edit or delete*/}
                  </li>
                </ul>
              </div>
              {/* /.card-body */}
            </div>
                     </section>
                    </div>
                </div>
                
            </section>
        
        
    {/* /.content */}
  </div>
</div>

        )
    }
}
