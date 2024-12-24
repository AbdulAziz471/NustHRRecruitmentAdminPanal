import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageService } from '../../Core/Services/PageService/page.service';
import Swal from 'sweetalert2';
import { Page } from '../../Core/Interfaces/Page.interface';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {
  pages: Page[] = [];
  modules: any[] = []; 
  pageForm: FormGroup;
  isEdit: boolean = false;
  isLoading: boolean = false;
  constructor(
    private pageService: PageService,
    private fb: FormBuilder 
  ) {

     this.pageForm = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      pageUrl: [null],
      parentPageId: [null],
      preferenceOrder: ['', Validators.required],
      description: ['', Validators.required],
      
    });
  }
  fetchPages(): void {
    this.pageService.GetAllPages().subscribe(
      (data) => {
        this.pages = data;
        this.filterModules(); 
      },
      (error) => {
        console.error('Error fetching Pages:', error);
      }
    );
  }
  
  filterModules(): void {
    this.modules = this.pages.filter(page => !page.pageUrl || page.pageUrl.trim() === '');
  }
  
  
  ngOnInit(): void {
    this.fetchPages();
  }
  

 
  onSubmit(): void {
    if (!this.pageForm.valid) {
      this.pageForm.markAllAsTouched(); 
      return;
    }

    this.isEdit ? this.updatePage() : this.addPage();
  }

  private addPage(): void {
    this.isLoading =  true;
    const { id, ...formData } = this.pageForm.value;
    this.pageService.AddPage(formData).subscribe({
      next: () => {
        this.isLoading =  false;
        Swal.fire('Success', 'Page has been added.', 'success');
        this.afterSave();
      },
      error: (error) => {
        this.isLoading =  false;
        this.handleError('Error adding Page', error)}
    });
  }

  private updatePage(): void {
    this.isLoading =  true;
    this.pageService.UpdatePage(this.pageForm.value).subscribe({
      next: () => {
        this.isLoading =  false;
        Swal.fire('Success', 'Page has been updated.', 'success');
        this.afterSave();
      },
      error: (error) => {
        this.isLoading =  false;
        this.handleError('Error updating role', error)}
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
    this.pageForm.setValue({ 
      id: page.id, 
      title: page.title,
      pageUrl: page.pageUrl,
      parentPageId: page.parentPageId,
      preferenceOrder: page.preferenceOrder,
      description: page.description
     });
    this.isEdit = true;
  }

  private handleError(message: string, error: any): void {
    console.error(message, error);
    Swal.fire('Error', message, 'error');
  }
  


}
