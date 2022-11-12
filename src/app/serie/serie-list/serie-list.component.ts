import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  average: number = 0;
  sum: number = 36;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  getAverage(): void {
    this.series.forEach(c=> {
      this.average += c.seasons
    });
    this.average = this.sum/(6)
  }

  ngOnInit() {

    this.getSeries();

    this.getAverage();
  }

}
