import { Component, OnInit } from '@angular/core';
import { Person } from './models/person.model';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-case';

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
