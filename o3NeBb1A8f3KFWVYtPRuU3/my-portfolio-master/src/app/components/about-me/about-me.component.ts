import { Component, inject,OnInit} from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit {
  info: any;
  httpService = inject(HttpService);
  ngOnInit() {
    this.httpService.getAboutInfo().subscribe((result) => {
      this.info = result;
    });
  }
}
