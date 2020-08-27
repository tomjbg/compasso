import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-cad-audios',
  templateUrl: './cad-audios.component.html',
  styleUrls: ['./cad-audios.component.scss']
})
export class CadAudiosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pause(): void {
    alert('Audio pausado');
  }

  play(): void {
    alert('Play no áudio');
  }

  playing(): void {
    
  }

}
