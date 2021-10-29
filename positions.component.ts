import { Component, OnInit } from '@angular/core';
import { PositionService } from '.././data/position.service';
import { Position } from '../data/position';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  //Data members
  private positions: Position[];

  private getPositionSub;

  private loadingError: boolean = false;
  constructor(private p: PositionService) { }

  ngOnInit() {
    try {
      this.getPositionSub = this.p.getPositions()
      .subscribe(
        employees => {this.positions = employees}
      );
      } catch (err) {
        this.loadingError = true;
      }
  }

  ngOnDestroy() {
    if (this.getPositionSub == null) {
      this.getPositionSub.unsubscribe();
    }
  }
}
