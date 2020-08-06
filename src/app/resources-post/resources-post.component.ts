import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-resources-post',
  templateUrl: './resources-post.component.html',
  styleUrls: ['./resources-post.component.scss']
})
export class ResourcesPostComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, public db: AngularFireDatabase
  ) { }

  resourcePost: any;
  resourceId: string = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getResourcePost(params);
    });
  }


  getResourcePost(params): void {
    this.db.list('postContents').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() as {} })
        )
      )
    ).subscribe(res => {
      this.resourcePost = res.find((item) => {
        return item.key === params.params.id;
      });
    });
  }

}
