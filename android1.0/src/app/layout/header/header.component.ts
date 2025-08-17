import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


interface SubMenuItem {
  name: string;
  link: string;
  icon?: string; // Optional icon class
  otherLink?: boolean; // Optional section icon
}

interface Section {
  name: string;
  subMenuItems: SubMenuItem[];
  iconClass?: string; // Optional section icon
}

interface Module {
  name: string;
  sections: Section[];
}



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit{
  activeModule: number|string | null = null;
 
   /* for mobile view */
   isMenuOpen = true;
   activeSection: string | null = null;
   activeSubmenu: string | null = null;
   isHomeMenu:boolean = false;
 
   constructor(private route:Router){}
 
   ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
     if(val.url){
       if(val.url.includes('clg-details')){
         this.isHomeMenu = false;
       }else{
         this.isHomeMenu = true;
       }
     }
    })
   }
 
   modules: Module[] = [
     {
       name: 'About',
       sections: [
         {
           name: 'University',
           iconClass: 'fa-building',
           subMenuItems: [
             { name: 'Overview', link: '/about/overview', icon: 'fa-user-tie' },
             { name: 'Chancellor', link: '/about/chancellor', icon: 'fa-chart-line' },
             { name: 'Desk of Vice-Chancellor', link: '/about/vice-chancellor', icon: 'fa-chart-line' },
             { name: 'Board of Management', link: `/about/administrative/${1}`, icon: 'fa-chart-line' },
             { name: 'Administrative Council', link: `/about/administrative/${3}`, icon: 'fa-chart-line' },
             { name: 'Academic Council', link: `/about/administrative/${2}`, icon: 'fa-chart-line' },
             { name: 'Who is Who', link: '/about/who-is-who', icon: 'fa-chart-line' },
             { name: 'Directory Search', link: '/about/staff', icon: 'fa-chart-line' },
           ]
         },
         {
           name: 'Organization',
           iconClass: 'fa-building',
           subMenuItems: [
             { name: 'VC Secretariat ', link: `/about/office/${1}`, icon: 'fa-user-tie' },
             { name: 'Registrar Office', link: `/about/office/${2}`, icon: 'fa-chart-line' },
             { name: 'Comptroller Office', link: `/about/office/${3}`, icon: 'fa-chart-line' },
           ]
         },
         {
           name: 'Activities',
           iconClass: 'fa-clock',
           subMenuItems: [
             { name: 'All Activities', link: '/about/activities', icon: 'fa-monument' },
             { name: 'Events', link: '/about/event', icon: 'fa-history' },
             {name: 'News On Media', link:'/about/news-on-media', icon: 'fa-newspaper'}
           ]
         },
         {
           name: 'Others',
           iconClass: 'fa-users',
           subMenuItems: [
             { name: 'MGUVV Profile', link: `/about/document/${1}`, icon: 'fa-user-friends' },
             { name: 'MGUVV At a glance', link: `/about/document/${2}`, icon: 'fa-user-friends' },
             { name: 'University Act & Statutes', link: `/about/document/${3}`, icon: 'fa-user-shield' },
             { name: 'University Service Regulations', link: `/about/document/${4}`, icon: 'fa-user-shield' }
           ]
         }
       ]
     },
     {
       name: 'Academic',
       sections: [
         {
           name: 'Overview',
           iconClass: 'fa-graduation-cap',
           subMenuItems: [
             { name: 'Directorate of Instruction', link: `/academic/directorate/${111}`, icon: 'fa-user-graduate' },
             { name: 'Colleges', link: '/academic/college', icon: 'fa-award' },
             { name: 'Departments', link: '/academic/department', icon: 'fa-award' }
           ]
         },
         {
           name: 'Faculty',
           iconClass: 'fa-university',
           subMenuItems: [
             { name: 'Horticulture', link: `/academic/faculty/${3}`, icon: 'fa-flask' },
             { name: 'Forestry', link: `/academic/faculty/${4}`, icon: 'fa-cogs' },
           ]
         },
         {
           name: 'Degree',
           iconClass: 'fa-bookmark',
           subMenuItems: [
             { name: 'UG', link: `/academic/deg-prog/${1}`, icon: 'fa-book-open' },
             { name: 'PG', link: `/academic/deg-prog/${2}`, icon: 'fa-microscope' },
             { name: 'Ph.D', link: `/academic/deg-prog/${3}`, icon: 'fa-microscope' }
           ]
         },
         {
           name: 'Admission',
           iconClass: 'fa-bookmark',
           subMenuItems: [
             { name: 'Apply', link: '/academic/apply', icon: 'fa-book-open' },
             { name: 'Fee Structure', link: '/academic/fee-stucture', icon: 'fa-microscope' },
             { name: 'FAQs', link: '/academic/faqs', icon: 'fa-microscope' }
           ]
         }
       ]
     },
     {
       name: 'Research',
       sections: [
         {
           name: 'Overview',
           iconClass: 'fa-running',
           subMenuItems: [
             { name: 'Directorate of Research Services', link: `/academic/directorate/${100}`, icon: 'fa-users' },
             // { name: 'Research Stations', link: '/research/station', icon: 'fa-dumbbell' }
           ]
         },
         {
           name: 'Technology',
           iconClass: 'fa-handshake',
           subMenuItems: [
             // { name: 'Patents', link: '/research/patents', icon: 'fa-brain' },
             { name: 'Technologies Developed', link: '/research/technology', icon: 'fa-laptop' },
             { name: 'Variety released', link: '/research/variety', icon: 'fa-glass-cheers' }
           ]
         },
         {
           name: 'Publication',
           iconClass: 'fa-calendar',
           subMenuItems: [
             { name: 'Publication', link: '/research/publication', icon: 'fa-calendar-alt' },
           ]
         }
       ]
     },
     {
       name: 'Student Welfare',
       sections: [
         {
           name: 'Overview',
           iconClass: 'fa-running',
           subMenuItems: [
             { name: 'Dean Student Walfare', link: `/student-welfare/studentwelfare`, icon: 'fa-users' },
             { name: 'Sports', link: '/student-welfare/sports', icon: 'fa-dumbbell' },
             //{ name: 'Facilities & Infrastructures', link: '/activities/sports/facilities', icon: 'fa-dumbbell' }
           ]
         },
         {
           name: 'Activities',
           iconClass: 'fa-handshake',
           subMenuItems: [
             { name: 'Art-Culture', link: `student-welfare/art-culture`, icon: 'fa-brain' },
             { name: 'NCC', link: `student-welfare/ncc-nss/${1}`, icon: 'fa-brain' },
             { name: 'NSS', link: `student-welfare/ncc-nss/${2}`, icon: 'fa-glass-cheers' }
           ]
         },
         {
           name: 'Housing & Residental',
           iconClass: 'fa-calendar',
           subMenuItems: [
             { name: 'Accommodation', link: '/student-welfare/accommodation', icon: 'fa-calendar-alt' },
           ]
         }
       ]
     },
     {
       name: 'Extension',
       sections: [
        /*  {
           name: 'Overview',
           iconClass: 'fa-running',
           subMenuItems: [
             { name: 'Directorate of Research Services', link: `/academic/directorate/${3}`, icon: 'fa-users' },
             // { name: 'Research Stations', link: '/research/station', icon: 'fa-dumbbell' }
           ]
         },
         {
           name: 'FLD',
           iconClass: 'fa-handshake',
           subMenuItems: [
             // { name: 'Patents', link: '/research/patents', icon: 'fa-brain' },
             { name: 'FLD', link: '#', icon: 'fa-laptop' },
           ]
         }, */
       ]
     },
   
     {
       name: 'FARM',
       sections: [
         /* {
           name: 'Overview',
           iconClass: 'fa-running',
           subMenuItems: [
             { name: 'Directorate of Extension Services', link: `#`, icon: 'fa-users' },
             // { name: 'Research Stations', link: '/research/station', icon: 'fa-dumbbell' }
           ]
         },
         {
           name: 'Farm',
           iconClass: 'fa-handshake',
           subMenuItems: [
             // { name: 'Patents', link: '/research/patents', icon: 'fa-brain' },
             // { name: 'FLD', link: '#', icon: 'fa-laptop' },
           ]
         }, */
       ]
     }, 
     /* {
       name: 'Recruitment',
       sections: [
       ]
     }, */
     {
       name: 'Admission',
       sections: [
         {
           name: 'Apply',
           subMenuItems: [
             { name: 'Apply', link: `https://mguvv.ac.in/CounselingHomeNew.aspx`, icon: 'fa-users' , otherLink:true },
           ]
         },
       ]
     }
   ];
  
   
   showModule(index: number): void {
     this.activeModule = index;
   }
   
   hideModule(): void {
     this.activeModule = null;
   }
 
   /* for mobile view start */
 
   toggleMenu() {
     this.isMenuOpen = !this.isMenuOpen;
 
     if (this.isMenuOpen) {
       document.body.classList.add('menu-open');
     } else {
       document.body.classList.remove('menu-open');
     }
   }
 
  
   toggleSubmenu(submenu: string) {
     if (this.activeSubmenu === submenu) {
       this.activeSubmenu = null;
     } else {
       this.activeSubmenu = submenu;
     }
   }
 
   isSubmenuActive(submenu: string): boolean {
     return this.activeSubmenu === submenu;
   }
 
   toggleModule(index: number |string): void {
     if (this.activeModule === index) {
       this.activeModule = null;
     } else {
       this.activeModule = index;
       this.activeSection = null; // Close any open sections when changing modules
     }
   }
 
   toggleSection(moduleName: string, sectionName: string) {
     const fullName = `${moduleName}-${sectionName}`;
     
     if (this.activeSection === fullName) {
       this.activeSection = null;
     } else {
       this.activeSection = fullName;
     }
   }
 
   isModuleActive(moduleName: string): boolean {
     return this.activeModule === moduleName;
   }
 
   isSectionActive(moduleName: string, sectionName: string): boolean {
     return this.activeSection === `${moduleName}-${sectionName}`;
   }
   
   ngOnDestroy() {
     document.body.classList.remove('menu-open');
   }
 
     /* for mobile view end */
 
 }
   
 
 