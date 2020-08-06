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
  latestPost:any;

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
      this.resourcesPosts = resources;
      console.log(this.resourcesPosts);
    });
  }
}
