import React, { Component } from "react";
class Contador extends Component {
  state = {
    cont: 0
  };
  render() {
    return (
      <div>
       <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <h2>Lista de Personas</h2>
          <div class="table-responsive">
            <button> Agregar Nuevo</button>
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th />
                </tr>
              </thead>
            </table>
          </div>{" "}
        </main>
      </div>
    );
  }
}

export default Contador;
