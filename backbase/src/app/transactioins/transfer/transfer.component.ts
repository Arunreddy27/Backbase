import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    
  }
  submit(){
    alert("Data was not provided to add funtionality")
  }

}
