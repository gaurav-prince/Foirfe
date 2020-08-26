import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  resourcesPosts: any;
  latestPost: any;
  showBusy: boolean = true;

  categoryData: any = [
    {
      categoryName: "Product",
      categoryKey: "product",
      firstResourceTitle: "",
      firstResourceContent: "",
      resourceCount: 2,
      resourceIcon: "product_new.png",
      firstResourceTimestamp: ""
    },
    {
      categoryName: "Process",
      categoryKey: "process",
      firstResourceTitle: "",
      firstResourceContent: "",
      resourceCount: 2,
      resourceIcon: "process_new.png",
      firstResourceTimestamp: ""
    },
    {
      categoryName: "Training",
      categoryKey: "training",
      firstResourceTitle: "",
      firstResourceContent: "",
      resourceCount: 2,
      resourceIcon: "training_new.png",
      firstResourceTimestamp: ""
    },
    {
      categoryName: "Support",
      categoryKey: "support",
      firstResourceTitle: "",
      firstResourceContent: "",
      resourceCount: 2,
      resourceIcon: "support_new.png",
      firstResourceTimestamp: "",
    }
  ]

  constructor(public db: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.getResourcesPosts();
  }

  getResourcesPosts(): void {
    this.db.list('postContents').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() as {} })
        )
      )
    ).subscribe(resources => {
      this.showBusy = false;
      resources.sort(function (a: any, b: any) {
        if (a.timestamp < b.timestamp)
          return 1;
        else if (a.timestamp > b.timestamp)
          return -1;
        else
          return 0;
      });
      this.setCategoryResources(resources);
      // this.latestPost = resources.pop();
      // this.resourcesPosts = resources;
    });
  }

  setCategoryResources(resouces: any): void {
    this.categoryData.forEach(category => {
      let resFound = resouces.find((res) => {
        return res.category === category.categoryKey;
      });
      if(resFound){
        category.firstResourceContent=resFound.text.substring(0,100);
        category.firstResourceTitle=resFound.title;
        category.firstResourceTimestamp=resFound.timestamp;
      }
    });
  }
}
