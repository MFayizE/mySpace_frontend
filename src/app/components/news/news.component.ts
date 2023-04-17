import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  names: { name: string; code: string; }[];
  currentCountry = 'in'
  newsList:any
  pageLoader:boolean = false

  constructor(private newsservice: NewsService) { }

  ngOnInit(): void {
    this.names = [
      { name: 'India', code: 'in' },
      { name: 'United States of America', code: 'us' },
      { name: 'United Arab Emirates', code: 'ae' },
      { name: 'Argentina', code: 'ar' },
      { name: 'Austria', code: 'at' },
      { name: 'Australia', code: 'au' },
      { name: 'Belgium', code: 'be' },
      { name: 'Bulgaria', code: 'bg' },
      { name: 'Brazil', code: 'br' },
      { name: 'Canada', code: 'ca' },
      { name: 'Switzerland', code: 'ch' }, 

    ]
    this.fetchList(this.currentCountry)
  }

  fetchList(data) {
    this.pageLoader=true
    this.newsservice.getNews(data).subscribe(res => {
      this.newsList = res['articles']
      this.pageLoader=false
      console.log(this.newsList)
      })
  
  
    }

}
