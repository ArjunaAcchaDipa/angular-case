import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit{
  persons: Person[] = []

  constructor(
    private personService: PersonService
  ) {

  }

  ngOnInit(): void {
    this.getDataPerson()
  }

  getDataPerson() {
    this.personService.getAll().subscribe((result) => {
      console.log("Success get data", result)
      this.persons = result;
    })
  }
}
