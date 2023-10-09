import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewChecked,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  name: string = 'Angular';
  prefix: string = '';
  userid: string = '';

  constructor() {
    this.name = '';
    console.log('Parent constructor() called');
  }

  onGenerateUserId(uid: string) {
    console.log('Generating UserID');
    this.userid = uid;
  }

  ngOnInit() {
    this.name = 'Jack Smith';
    console.log('Parent ngOnInit() called');
  }

  ngOnChanges() {
    console.log('Parent ngOnChanges() called');
  }

  ngDoCheck() {
    console.log('Parent ngDoCheck() called');
  }

  ngAfterViewChecked() {
    console.log('Parent ngAfterViewChecked() called');
  }

  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit() called');
  }

  ngAfterContentInit() {
    console.log('Parent ngAfterContentInit() called');
  }

  ngAfterContentChecked() {
    console.log('Parent ngAfterContentChecked() called');
  }

  ngOnDestroy() {
    console.log('Parent ngOnDestroy() called');
  }
}
