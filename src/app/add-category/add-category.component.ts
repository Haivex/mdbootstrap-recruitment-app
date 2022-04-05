import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HardwareListService } from '../hardware-list.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  category = new FormControl('', Validators.required)
  service: HardwareListService;

  constructor(service: HardwareListService) { this.service = service }

  ngOnInit(): void {
  }

  addCategory() {
    this.service.addCategory(this.category.value)
    this.category.reset();
  }

}
