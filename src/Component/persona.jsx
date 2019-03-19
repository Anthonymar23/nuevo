import React, { Component } from 'react';
import {Listadopersonas} from "./../services/personaservice";

class Personas extends  Component{
state={
datos: Listadopersonas(),
 cont:6
};


handlerEliminar = persona =>{
        const datos=this.state.datos.filter(p=>p.id!==persona.id);
        this.setState({datos});
          /* console.log(persona);*/
          this.setState({cont:this.state.cont - 1});
};
handlerAgregar=()=>{
  const nuevo={id:Math.random()*1000, Nombre:'Maria',Estado:true,Apellido:'Cerda',Deporte:'Football',Departamento:'Leon',Opciones:''}
  const datos=this.state.datos;
  datos.push(nuevo);
  this.setState({datos});
 this.setState({cont:this.state.cont + 1});
}

valores(){ 
  const{cont:valor}=this.state;
  return valor=== 0 ? "cero" :valor;
  
}

render(){
  let clase="badge mr-2 badge-"
  clase=this.state.cont=== 0? "danger":"info";
return(
      
       <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <span data-feather="home"></span>
                    Inicio <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file"></span>
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="users"></span>
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="layers"></span>
                    Integrations
                  </a>
                </li>
              </ul>
      
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <a className="d-flex align-items-center text-muted" href="#">
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Current month
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Last quarter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Social engagement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file-text"></span>
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* aqui va el main */}
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
  <h1 className="text-info">Lista de Personas:{this.valores()}</h1>
  <button onClick={this.handlerAgregar} className="btn-info">Agrerar Elemeto</button>
<canvas className="my-4 w-100" id="myChart" width="900" height="3"></canvas>


        {/* <div className="conteiner"> */}
         
           {/* para mostrar en un list-group   */}
        {/* <ul className="list-group">
           {this.state.datos.map(persona=>(
           <li key={persona.id} className="list-group-item d-flex justify-content-between" >
                     
            {persona.Nombre}
            {persona.Estado}
            {persona.Apellido}
              <span>
                  <button Onclick={()=>this.handlerEliminar(persona)}className="btn btn-danger btn-sm" >Eliminar</button>
                 
              </span>
           </li>))}
        </ul> */}
       {/* tabla */}
      <div className="conteiner">
            <table className="table table-striped table-sm"> 
           
              <thead>
                <tr>
                  <th>Identificador</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Deporte</th>
                  <th>Departamento</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
              {this.state.datos.map(persona=>(
                <tr>
               
                    <td key={persona.id} > 
                    {persona.id}                  
                        
                    </td>
                  <td> {persona.Nombre}</td>
                  <td>{persona.Apellido}</td>
                  <td>{persona.Deporte}</td>
                  <td>{persona.Departamento}</td>
                  <td > {persona.Opciones}
                 <button onClick={()=>this.handlerEliminar(persona)} className="btn btn-danger btn sm" type="submit">Eliminar</button>
                  {/* <button onClick={()=>this.handlerEliminar(persona)} className="btn btn-danger btn sm">Eliminar</button> */}
                  </td>
                 
                </tr>
                  ))}
              </tbody>
            </table>
            </div>
        {/* </div> */}
        </main>
      
      
      
      
      
      
      
      
      
             {/* <table>
               <thead>
                 <tr>
                   <th>Indicador</th>
                   <th>Nombre</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>
      
                   </td>
                 </tr>
               </tbody>
             </table> */}
           
            {/* <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                  </tr>
                  </tbody>
                  {/*
                  <tr>
                    <td>1,002</td>
                    <td>amet</td>
                    <td>consectetur</td>
                    <td>adipiscing</td>
                    <td>elit</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>Integer</td>
                    <td>nec</td>
                    <td>odio</td>
                    <td>Praesent</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>libero</td>
                    <td>Sed</td>
                    <td>cursus</td>
                    <td>ante</td>
                  </tr>
                  <tr>
                    <td>1,004</td>
                    <td>dapibus</td>
                    <td>diam</td>
                    <td>Sed</td>
                    <td>nisi</td>
                  </tr>
                  <tr>
                    <td>1,005</td>
                    <td>Nulla</td>
                    <td>quis</td>
                    <td>sem</td>
                    <td>at</td>
                  </tr>
                  <tr>
                    <td>1,006</td>
                    <td>nibh</td>
                    <td>elementum</td>
                    <td>imperdiet</td>
                    <td>Duis</td>
                  </tr>
                  <tr>
                    <td>1,007</td>
                    <td>sagittis</td>
                    <td>ipsum</td>
                    <td>Praesent</td>
                    <td>mauris</td>
                  </tr>
                  <tr>
                    <td>1,008</td>
                    <td>Fusce</td>
                    <td>nec</td>
                    <td>tellus</td>
                    <td>sed</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>augue</td>
                    <td>semper</td>
                    <td>porta</td>
                    <td>Mauris</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>massa</td>
                    <td>Vestibulum</td>
                    <td>lacinia</td>
                    <td>arcu</td>
                  </tr>
                  <tr>
                    <td>1,011</td>
                    <td>eget</td>
                    <td>nulla</td>
                    <td>Class</td>
                    <td>aptent</td>
                  </tr>
                  <tr>
                    <td>1,012</td>
                    <td>taciti</td>
                    <td>sociosqu</td>
                    <td>ad</td>
                    <td>litora</td>
                  </tr>
                  <tr>
                    <td>1,013</td>
                    <td>torquent</td>
                    <td>per</td>
                    <td>conubia</td>
                    <td>nostra</td>
                  </tr>
                  <tr>
                    <td>1,014</td>
                    <td>per</td>
                    <td>inceptos</td>
                    <td>himenaeos</td>
                    <td>Curabitur</td>
                  </tr>
                  <tr>
                    <td>1,015</td>
                    <td>sodales</td>
                    <td>ligula</td>
                    <td>in</td>
                    <td>libero</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
         
        </div>
      </div>
        );
}

}
export default Personas;