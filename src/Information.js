import React, { Component } from 'react'


export default class Information extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
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
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    {/* checkbox */}
                    {/* todo text */}
                    <span className="text">نام کاربر : علی رنجبران</span>
                    {/* Emphasis label */}
                     {/* General tools such as edit or delete*/}
                  </li>
                  <li>
                    {/* drag handle */}
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    {/* checkbox */}
                    {/* todo text */}
                    <span className="text">شماره تماس : 0910000000</span>
                    {/* Emphasis label */}
                     {/* General tools such as edit or delete*/}
                  </li>
                  <li>
                    {/* drag handle */}
                    <span className="handle">
                      <i className="fas fa-ellipsis-v" />
                      <i className="fas fa-ellipsis-v" />
                    </span>
                    {/* checkbox */}
                    {/* todo text */}
                    <span className="text">ایمیل : a@a.com</span>
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
        </div>
      </div>
    )
  }
}


