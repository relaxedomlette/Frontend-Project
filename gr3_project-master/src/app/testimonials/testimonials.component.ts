import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';

export interface Reviews {
  name: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})

export class TestimonialsComponent implements AfterViewInit {

  testimonials: Reviews[] = [
    {
      name: "Jasi S.",
      img: "assets/img/testimonials/testimonials1.jpg",
      description: "Capturing the eerie beauty of forgotten spaces, this photography site is a hauntingly mesmerizing journey into abandoned places. Each frame tells a story of decay and resilience, showcasing the intricate details of crumbling architecture and nature's relentless reclaiming. It's a testament to the photographer's keen eye for the forgotten and the ability to evoke a sense of mystery and nostalgia in every shot.",
    },
    {
      name: "Jin K.",
      img: "assets/img/testimonials/testimonials2.jpg",
      description: "If you have a fascination for the forgotten, this photography site is a treasure trove of captivating imagery. From derelict factories to decaying mansions, each photograph transports you to a bygone era, where time stands still and history whispers through the cracks. The composition and lighting are masterfully executed, capturing the melancholic beauty of abandoned places with an almost poetic grace.",
    },
    {
      name: "Sandra W.",
      img: "assets/img/testimonials/testimonials3.jpg",
      description: "As an urban explorer enthusiast, I've scoured countless photography sites, but none have quite captured the essence of abandonment like this one. The images here transcend mere documentation; they immerse you in the desolate landscapes of forgotten structures, inviting you to ponder the stories they hold. It's more than just photography; it's a visual narrative of decay and desolation, rendered with unparalleled skill and sensitivity.",
    },
    {
      name: "Michael D.",
      img: "assets/img/testimonials/testimonials4.jpg",
      description: "Prepare to be spellbound by the haunting allure of abandoned places showcased on this photography site. Each image is a window into a world frozen in time, where rusted machinery and crumbling facades stand as silent witnesses to the passage of years. The photographer's ability to find beauty in decay is truly remarkable, offering viewers a glimpse into the surreal landscapes of forgotten memories and lost dreams.",
    },
    {
      name: "Max M.",
      img: "assets/img/testimonials/testimonials5.jpg",
      description: "For those who find beauty in the unconventional, this photography site is a revelation. Through the lens of the photographer, abandoned places are transformed into mesmerizing works of art, each frame a hauntingly beautiful tableau of decay and desolation. The attention to detail is astounding, capturing the intricate textures and play of light in these forgotten spaces with an almost ethereal quality.",
    },
    {
      name: "Frank O.",
      img: "assets/img/testimonials/testimonials6.jpg",
      description: "Stepping into the world of abandoned photography through this site is like embarking on a journey through time and neglect. The images here are not merely pictures but poignant reminders of the transient nature of human existence. From dilapidated homes to forsaken factories, every photograph tells a story of abandonment and decay, inviting viewers to reflect on the impermanence of life and the enduring beauty found in the forgotten corners of the world.",
    },
  ];

  constructor(private elementRef: ElementRef) {}

  isInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  addFadeInClass(element: HTMLElement) {
    if (this.isInViewport(element)) {
      element.classList.add('fade-in');
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const cards = document.querySelectorAll<HTMLElement>('.card');
    cards.forEach(card => {
      this.addFadeInClass(card);
    });
  }

  ngAfterViewInit() {
    const cards = document.querySelectorAll<HTMLElement>('.card');
    cards.forEach(card => {
      this.addFadeInClass(card);
    });
  }
}
