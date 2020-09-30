import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  availableColors: ChipColor[] = [
    {name: 'Angular', color: 'warn'},
    {name: 'ReactJS', color: 'primary'},
    {name: 'NextJS', color: 'accent'},
    {name: 'Firebase', color: 'warn'},
    {name: 'SQL', color: 'primary'},
    {name: 'NodeJS', color: 'accent'},
    {name: 'Express', color: 'warn'},
    {name: 'Material Desing', color: 'primary'},
    {name: 'Bootstrap', color: 'accent'},
    {name: 'Tailwind', color: 'warn'},
    {name: 'No-SQL Databases', color: 'primary'},
  ];
  year = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
