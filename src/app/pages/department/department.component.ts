import { Component } from '@angular/core';
import { CardComponent } from '../../units/card/card.component';


@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  department=[
    {
      id:1,
      title:"Healthcare",
      image:"../../../assets/healthcare.jpg",
      description:"In an ever-evolving landscape of medical advancements and compassionate care, our healthcare services stand at the forefront of innovation and patient-centric practices. From preventive medicine to complex treatments, we prioritize your well-being with state-of-the-art facilities and a dedicated team of healthcare professionals. Discover a world where expertise meets empathy, ensuring every step of your journey towards wellness is met with utmost compassion and excellence."
    },
    {
      id:2,
      title:"Banking and Finance",
      image:"../../../assets/banking.jpg",
      description:"Enter a realm of financial empowerment and stability through our comprehensive banking and financial solutions. With a focus on your future, we offer expert guidance and personalized services to help you navigate the complexities of wealth management and investment. Whether you're a seasoned investor or just starting your journey towards financial independence, trust in our commitment to integrity and innovation to propel you towards your financial goals with confidence."
    },
    {
      id:3,
      title:"Aeronotacal",
      image:"../../../assets/Aeronotacal.jpg",
      description:"Embark on a journey through the skies with our pioneering aeronautical solutions. From groundbreaking aircraft designs to cutting-edge aerospace technology, we're at the forefront of innovation. Whether it's advancing air travel, exploring space, or shaping the future of unmanned aerial systems, our dedication to excellence and safety ensures a world where the sky is no longer the limit."
    },
    {
      id:4,
      title:"Mobility",
      image:"../../../assets/mobility.jpg",
      description:"Step into the future of transportation with our cutting-edge mobility solutions. From ground-breaking innovations in automotive technology to sustainable urban mobility initiatives, we're redefining the way people move. Whether it's enhancing accessibility, reducing environmental impact, or improving safety, our commitment to revolutionizing mobility ensures a seamless journey towards a smarter and more connected world."
    },
    {
      id:5,
      title:"GIS",
      image:"../../../assets/gis.jpg",
      description:"Embark on a journey of spatial intelligence and data-driven decision-making with our advanced GIS solutions. From mapping and analysis to visualization and problem-solving, we're redefining how geographical information shapes our world. Whether it's optimizing resource management, enhancing urban planning, or powering environmental sustainability, our GIS expertise empowers organizations to unlock the full potential of location-based insights for a smarter, more connected future.",

    },
    {
      id:6,
      title:"Insurance",
      image:"../../../assets/insurance.jpg",
      description:"Secure your future with our comprehensive insurance solutions. From protecting your assets to safeguarding your loved ones, we offer peace of mind through tailored coverage and personalized service. Whether it's home, auto, health, or life insurance, our commitment to reliability and support ensures that you're prepared for life's uncertainties. Explore a world where protection meets peace of mind, ensuring you're always covered when it matters most."
    },
   
  ]

}
