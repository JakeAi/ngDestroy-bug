import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "cycle-three",
  template: `
    <Button
      text="Go to cycle one"
      [nsRouterLink]="['../cycle1']"
      [clearHistory]="true"
    ></Button>
  `,
  styles: [``],
})
export class CycleThreeComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log("CYCLE_THREE Init");
  }

  ngOnDestroy(): void {
    console.log("CYCLE_THREE Destroyed");
  }
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NativeScriptRouterModule } from "@nativescript/angular";

@NgModule({
  declarations: [CycleThreeComponent],
  imports: [
    CommonModule,
    NativeScriptRouterModule.forChild([
      {
        path: "",
        component: CycleThreeComponent,
      },
    ]),
  ],
})
export class CycleThreeModule {}
