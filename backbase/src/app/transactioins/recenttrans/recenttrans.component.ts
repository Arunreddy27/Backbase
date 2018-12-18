import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../transfer/data-service.service';


@Component({
  selector: 'app-recenttrans',
  templateUrl: './recenttrans.component.html',
  styleUrls: ['./recenttrans.component.css'],
  providers: [DataServiceService]
})
export class RecenttransComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  transaction: any; 
  
  ngOnInit() {
      this.transaction=this.dataService.getData;
  }

}
