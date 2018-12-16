import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacesPipe } from '../../shared/convert-to-space.pipe';
import { RouterModule } from '@angular/router';
import { ProductEditGuard } from '../../core/product-guard.service';
import { ProductService } from '../../core/product.service';
import { SharedModule } from '../../shared/shared.module';
import { VNDPipe } from '../../shared/convertvnd.pipe';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditTagsComponent } from './product-edit-tags/product-edit-tags.component';
import { ProductEditInfoComponent } from './product-edit-info/product-edit-info.component';
import { ProductResolver } from '../../core/product-resolver.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    SharedModule,
    NgxPaginationModule,
    RouterModule.forChild([
      { path: '', component: ProductListComponent },
      {
        path: ':productId',
        component: ProductDetailComponent,
        resolve: { product: ProductResolver },
      },
      { 
        path: ':productId/edit',
        component: ProductEditComponent,
        resolve: { product: ProductResolver},
        canDeactivate: [ProductEditGuard],
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: ProductEditInfoComponent
          },
          {
            path: 'tags',
            component: ProductEditTagsComponent
          }
        ]
      }
    ])

  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    VNDPipe,
    ProductEditComponent,
    ProductEditTagsComponent,
    ProductEditInfoComponent
  ],
  providers: [
    ProductService,
    ProductEditGuard,
    ProductResolver
  ]
})
export class ProductModule { }
