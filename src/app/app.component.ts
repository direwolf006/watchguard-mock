import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  matcher: MediaQueryList;
  widthChange;
  /**
   * Breakpoints and Orientation provided 
   * via the 'layout' cdk.
   */
  viewportSizes = [
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
  ];

  /**
   * Our local boolean variables to
   * declare is we are within certain
   * breakpoints.
   */
  isXSmall: boolean;
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isXLarge: boolean;

  constructor(
    public breakpointObserver: BreakpointObserver,
    public mediaMatcher: MediaMatcher
  ) {


  this.widthChange = breakpointObserver.observe([
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
  ])
  .subscribe((state: BreakpointState) => {
    this.isXSmall = breakpointObserver.isMatched(Breakpoints.XSmall);
    this.isSmall = breakpointObserver.isMatched(Breakpoints.Small);
    this.isMedium = breakpointObserver.isMatched(Breakpoints.Medium);
    this.isLarge = breakpointObserver.isMatched(Breakpoints.Large);
    this.isXLarge = breakpointObserver.isMatched(Breakpoints.XLarge);
  })
  }

}
