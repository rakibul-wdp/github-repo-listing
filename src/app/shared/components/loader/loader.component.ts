import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  loading: boolean | undefined;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((loader) => {
      this.loading = loader;
    });
  }
  ngOnInit(): void {}
}
