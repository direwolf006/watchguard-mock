import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none',
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  whyWatchGuardCards=[
    {
      title:'Simplicity',
      image:'/assets/images/why-wgrd/simplicity.png',
      content:'Easy and straightforward to purchase, configure, deploy, and centrally manage',
      state:'default'
    },
    {
      title:'Innovation',
      image:'/assets/images/why-wgrd/innovation.png',
      content:'The quickest access to new and improved security services',
      state:'default'
    },
    {
      title:'Performance',
      image:'/assets/images/why-wgrd/performance.png',
      content:'Fastest UTM performance at all price points',
      state:'default'
    },
    {
      title:'Visibility',
      image:'/assets/images/why-wgrd/visibility.png',
      content:'Translate oceans of data into actionable information via simple reporting and threat correlation',
      state:'default'
    },
    {
      title:'Support',
      image:'/assets/images/why-wgrd/support.png',
      content:'Industry-leading pre- and post-sales support for maximum customer and partner satisfaction',
      state:'default'
    },
  ]

  keyFeaturesCards=[
    {
      title:'Network Security',
      image:'/assets/images/key-features/network_security.png',
      alt:'Network Security'
    },
    {
      title:'Multi Factor Authentication',
      image:'/assets/images/key-features/multi_factor_authentication.png',
      alt:'Multi Factor Authentication'
    },
    {
      title:'Secure Cloud Wi-Fi',
      image:'/assets/images/key-features/secure_cloud_wifi.png',
      alt:'Secure Cloud Wi-Fi'
    },
    {
      title:'Endpoint Security',
      image:'/assets/images/key-features/endpoint_security.png',
      alt:'EndPoint Security'
    }
  ]

  noOfColumns=5

  matcher: MediaQueryList;
  widthChange;
  viewportSizes = [
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
  ];

  isXSmall: boolean;
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isXLarge: boolean;

  constructor(public breakpointObserver: BreakpointObserver,
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
      if(this.isXSmall){
        this.noOfColumns=1
      }else if(this.isSmall){
        this.noOfColumns=2
      }else if(this.isMedium){
        this.noOfColumns=3
      }else if(this.isLarge||this.isXLarge){
        this.noOfColumns=5
      }
    })

  }

  ngOnInit(): void {
  }

  toggleCard(index:number){
    this.whyWatchGuardCards[index].state=(this.whyWatchGuardCards[index].state==="default")?"flipped":"default";
  }

}
