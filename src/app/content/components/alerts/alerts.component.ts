import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  i: number = 0;

  types: { color: string, icon: string}[] = [
    // { color: 'primary', icon: 'info-fill' },
    { color: 'info', icon: 'info-fill' },
    { color: 'success', icon: 'check-circle-fill' },
    // { color: 'warning', icon: 'exclamation-triangle-fill' },
    { color: 'danger', icon: 'exclamation-triangle-fill' },
  ]
  

  constructor() { }

  ngOnInit(): void {
    
    
  }

  showAlert() {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    
    const appendAlert = (message: string, type: string, icon: string) => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
        <div class="alert alert-${type} alert-dismissible d-flex align-items-center" role="alert">
          <svg class="bi flex-shrink-0 me-2" role="img" aria-label="${type}:"><use xlink:href="#${icon}"/></svg>
          <div>
            ${message}
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
      
      alertPlaceholder?.append(wrapper);
      
    }

    if (this.i < this.types.length) {
      appendAlert(`You triggered this ${ this.types[this.i].color} alert message!`, this.types[this.i].color, this.types[this.i].icon);
      this.i++;
    }

  }


  
}
