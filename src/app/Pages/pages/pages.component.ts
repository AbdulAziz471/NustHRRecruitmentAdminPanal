import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageService } from '../../Core/Services/PageService/page.service';
import Swal from 'sweetalert2';
interface Page {
  id?: string; 
  name: string;
}
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {
  pages: Page[] = [];
  pageForm: FormGroup;
  isEdit: boolean = false;
  constructor(
    private pageService: PageService,
    private fb: FormBuilder 
  ) {

     // Initialize the form in the constructor
     this.pageForm = this.fb.group({
      id: [null],
      name: ['', Validators.required]
    });
  }
  fetchPages(): void {
    this.pageService.GetAllPages().subscribe(
      (data) => {
        this.pages = data;
      },
      (error) => {
        console.error('Error fetching Roles:', error);
      }
    );
  }
  ngOnInit(): void {
    this.fetchPages();
  }


  
  onSubmit(): void {
    if (!this.pageForm.valid) {
      Swal.fire('Error', 'Please fill in all required fields.', 'error');
      return;
    }

    this.isEdit ? this.updatePage() : this.addPage();
  }

  private addPage(): void {
    this.pageService.AddPage(this.pageForm.value).subscribe({
      next: () => {
        Swal.fire('Success', 'Page has been added.', 'success');
        this.afterSave();
      },
      error: (error) => this.handleError('Error adding Page', error)
    });
  }

  private updatePage(): void {
    this.pageService.UpdatePage(this.pageForm.value).subscribe({
      next: () => {
        Swal.fire('Success', 'Page has been updated.', 'success');
        this.afterSave();
      },
      error: (error) => this.handleError('Error updating role', error)
    });
  }

  private afterSave(): void {
    this.fetchPages();
    this.clearForm();
  }

  clearForm(): void {
    this.pageForm.reset();
    this.isEdit = false;
  }

  onEditPage(page: Page): void {
    this.pageForm.setValue({ id: page.id, name: page.name });
    this.isEdit = true;
  }

  private handleError(message: string, error: any): void {
    console.error(message, error);
    Swal.fire('Error', message, 'error');
  }
  


}
