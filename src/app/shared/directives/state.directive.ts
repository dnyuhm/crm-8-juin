import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective {
  @Input() public appState!: string;
  @HostBinding('class') public tdClassName!: string;

  constructor() {}

  ngOnChanges(): void {
    console.log(this.appState);
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }
}
