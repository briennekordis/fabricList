// Create a class for the element
class Fabric extends HTMLElement {
    constructor() {
        super();
    }

    set fabric(fabric){

        this.innerHTML = `
            <div class="card">
              <h5 class="card-header">${fabric.fiber}</h5>
              <div class="card-body">
                <h5>${fabric.type}</h5>
                    <p class="card-text">
                    <table class="table">
                        <tr>
                            <td class="text-success font-weight-bold">Fiber:</td>
                            <td>${fabric.fiber}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Type:</td>
                            <td>${fabric.type}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Color:</td>
                            <td>${fabric.color}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Yardage:</td>
                            <td>${fabric.yardage}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Width in Inches:</td>
                            <td>${fabric.widthIn}</td>
                        </tr>
                    </table>
                    </p>
              </div>
            </div>
    `;    

  }
}

// Define the new element
customElements.define('stash-fabrics', Fabric);