import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit-tags',
  templateUrl: './product-edit-tags.component.html',
  styles: []
})
export class ProductEditTagsComponent implements OnInit {
  errorMessage: string;
  newTags = '';
  product: IProduct;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.data.subscribe(data => {
      this.product = data['product'];
    })
  }

  addTags(){
    let tagArray = this.newTags.split(',');
    this.product.tags = this.product.tags ? this.product.tags.concat(tagArray) : tagArray;
    this.newTags = '';
  }

  removeTag(idx: number){
    this.product.tags.split(idx,1);
  }

}
