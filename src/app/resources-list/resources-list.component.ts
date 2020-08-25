import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {

  resourcesPosts: any;
  showBusy: boolean = true;

  constructor(private route: ActivatedRoute, public db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getResourcesPosts(params);
    });
    
  }

  getResourcesPosts(categoryKey): void {
    this.db.list('postContents').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() as {} })
        )
      )
    ).subscribe(res => {
      this.showBusy = false;
      this.resourcesPosts = res.filter((item) => {
        return item['category'] === categoryKey.params.id;
      });
    });
  }

}
