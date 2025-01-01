
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrl: './applicants.component.scss'
})
export class ApplicantsComponent {
  public visible = false;

  toggleButton() {
    this.visible = !this.visible;
  }

  handleModal(event: any) {
    this.visible = event;
  }
}
