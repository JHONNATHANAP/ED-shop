import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/manage/category.service';
import { ProductService } from 'src/app/manage/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product={};
  id;

  constructor(
    private categoryService:CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) { 
    this.categories$= categoryService.getCategories();
    this.id=this.route.snapshot.paramMap.get('id')
    if(this.id) this.productService.get(this.id).subscribe(p=>this.product=p)
   
  }

  ngOnInit(): void {
  }
  save (product){
    if(this.id) this.productService.update(this.id,product);
    else this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

}
