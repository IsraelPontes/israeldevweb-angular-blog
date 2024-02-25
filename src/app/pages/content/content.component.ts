import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{dataFake} from '../data/datafake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string="https://proxy.olhardigital.com.br/wp-content/uploads/2021/06/155994-tv-news-feature-what-order-should-you-watch-all-the-superman-movies-and-tv-shows-image19-lngfsear7m.jpg"
  contentTitle:string="VERSÕES DO SUPER-MAN"
  contentDescripition:string="Olá mundo!"
  private id:string | null="0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(
      article => article.id.toString() == id )[0]

      this.contentTitle = result.title
      this.contentDescripition = result.descripition
     this.photoCover = result.photoCover
    }

}
