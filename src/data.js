// import house images
import Car0 from './assets/img/cars/0.png';
import Car1 from './assets/img/cars/1.png';
import Car2 from './assets/img/cars/2.png';
import Car3 from './assets/img/cars/3.png';
import Car4 from './assets/img/cars/4.png';
import Car5 from './assets/img/cars/5.png';
import Car11 from './assets/img/cars/11.png';
import Car22 from './assets/img/cars/22.png';
import Car33 from './assets/img/cars/33.png';
import Car44 from './assets/img/cars/44.png';
import Car55 from './assets/img/cars/55.png';

// import apartments images
import Apple from './assets/img/payment/apple-pay.png';
import Card from './assets/img/payment/card.png';
import Cash from './assets/img/payment/cash.png';
import Gpay from './assets/img/payment/google-pay.png';
import Visa from './assets/img/payment/visa.png';



// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const cabData = [
  {
    id: 1,
    type: 'Luxury',
    name: 'Cab 22',
    description:
      'The Economy Cab is a cost-effective and practical choice for individuals seeking affordable transportation solutions. These cabs are designed to cater to budget-conscious passengers, offering a reliable and efficient mode of transportation without compromising on essential comforts. Typically, Economy Cabs are compact and fuel-efficient vehicles, making them a sustainable and eco-friendly option. Passengers can expect a clean and comfortable interior, air conditioning, and a professional driver who ensures a safe and pleasant journey. While these cabs may not offer the same luxury features as premium or luxury cabs, they provide a practical and convenient way to get from point A to point B without breaking the bank.',
    image: Car22,
    imageLg: Car22,
    country: 'United States',
    address: '7240C Argyle St. Lawndale, CA 90260',
 
    year: '2016',
    price: '380',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  
  {
    id: 2,
    type: 'Premium',
    name: 'Cab 55',
    description:
      'Premium Cabs are a step up from Economy Cabs, offering a more comfortable and sophisticated travel experience. These vehicles are often mid-range or high-end sedans, designed to provide passengers with a touch of luxury while maintaining affordability. Premium Cabs come equipped with advanced amenities such as leather seats, climate control systems, in-car entertainment, and spacious interiors. Passengers can expect a higher level of service, including courteous and well-dressed drivers who prioritize customer satisfaction. Whether you are a business traveler or simply looking to enjoy a more comfortable ride, Premium Cabs offer a balance between luxury and cost-effectiveness.',
    image: Car55,
    imageLg: Car55,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
  
    price: '300',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id:3,
    type: 'Luxury',
    name: 'Cab 33',
    description:
      'Luxury Cabs represent the epitome of high-end transportation, providing passengers with an opulent and exclusive experience. These vehicles are often top-of-the-line sedans or SUVs from renowned manufacturers, equipped with the latest technology and luxurious features. Passengers choosing Luxury Cabs can indulge in amenities like plush leather seating, premium sound systems, advanced multimedia options, and ample legroom. The interior is meticulously designed for comfort, and the service is personalized to meet the highest standards. Luxury Cab drivers are typically experienced, knowledgeable, and impeccably attired, offering a seamless and memorable journey. Whether for a special occasion or when you simply want to travel in style, Luxury Cabs cater to those who demand the best in transportation.',
    image: Car33,
    imageLg: Car33,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
   
    year: '2010',
    price: '380',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },

  
  {
    id:5,
    type: 'Economy',
    name: 'Cab 1',
    description:
      'The Economy Cab is a cost-effective and practical choice for individuals seeking affordable transportation solutions. These cabs are designed to cater to budget-conscious passengers, offering a reliable and efficient mode of transportation without compromising on essential comforts. Typically, Economy Cabs are compact and fuel-efficient vehicles, making them a sustainable and eco-friendly option. Passengers can expect a clean and comfortable interior, air conditioning, and a professional driver who ensures a safe and pleasant journey. While these cabs may not offer the same luxury features as premium or luxury cabs, they provide a practical and convenient way to get from point A to point B without breaking the bank.',
    image: Car1,
    imageLg: Car1,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
   
    year: '2010',
    price: '280',
    agent: {
      image: Agent10,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id:6,
    type: 'Premium',
    name: 'Cab 4',
    description:
    'Premium Cabs are a step up from Economy Cabs, offering a more comfortable and sophisticated travel experience. These vehicles are often mid-range or high-end sedans, designed to provide passengers with a touch of luxury while maintaining affordability. Premium Cabs come equipped with advanced amenities such as leather seats, climate control systems, in-car entertainment, and spacious interiors. Passengers can expect a higher level of service, including courteous and well-dressed drivers who prioritize customer satisfaction. Whether you are a business traveler or simply looking to enjoy a more comfortable ride, Premium Cabs offer a balance between luxury and cost-effectiveness.',
    image: Car4,
    imageLg: Car4,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
   
    year: '2010',
    price: '350',
    agent: {
      image: Agent10,
      name: 'Karen Sorensen',
      phone: '0123 476 68910',
    },
  },
  {
    id:4,
    type: 'Economy',
    name: 'Cab 0',
    description:
      'The Economy Cab is a cost-effective and practical choice for individuals seeking affordable transportation solutions. These cabs are designed to cater to budget-conscious passengers, offering a reliable and efficient mode of transportation without compromising on essential comforts. Typically, Economy Cabs are compact and fuel-efficient vehicles, making them a sustainable and eco-friendly option. Passengers can expect a clean and comfortable interior, air conditioning, and a professional driver who ensures a safe and pleasant journey. While these cabs may not offer the same luxury features as premium or luxury cabs, they provide a practical and convenient way to get from point A to point B without breaking the bank.',
    image: Car0,
    imageLg: Car0,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
   
    year: '2010',
    price: '280',
    agent: {
      image: Agent12,
      name: 'Jonny Walker',
      phone: '0123 456 78910',
    },
  },
];
