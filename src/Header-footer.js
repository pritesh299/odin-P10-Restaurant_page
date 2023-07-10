let content=document.createElement('div');
    content.setAttribute('id','content');
    document.body.appendChild(content);
let main = document.createElement('main');


function loadHeader(){

    let header=document.createElement('header');
    let headerHeadline=document.createElement('h1');
    let nav=document.createElement('ul');
    
    headerHeadline.setAttribute('id','headline');


    headerHeadline.innerText="Welcome to Fast-bites"
    nav.insertAdjacentHTML('beforeend',`
     <li><a id='home_btn'> Home </a></li>
     <li><a id='Menu_btn' > Menu</a></li>
     <li><a id='Contact_btn'> Contact </a></li>
    `);
    
    
    content.appendChild(header);
    header.appendChild(headerHeadline);
    header.appendChild(nav);

}

function loadFooter(){

     let footer=document.createElement('footer');
     let Copyright=document.createElement('p');

     Copyright.innerHTML='&copy; 2023 The Fast-bites. All rights reserved.'
     content.appendChild(footer);
     footer.appendChild(Copyright);

}

function loadInitialPage() {
    
    let about_us = document.createElement('div');
    let about_us_image = document.createElement('img');
    let about_us_info = document.createElement('div');
    let featured_dish = document.createElement('div');
    let featured_dish_text = document.createElement('div');
    let featured_dish_image = document.createElement('img');

    about_us.setAttribute('id', 'about_us');
    about_us_info.setAttribute('id', 'about_us_info');
    featured_dish.setAttribute('id', 'featured_dish');
    featured_dish_text.setAttribute('id', 'featured_dish_text');


    about_us_image.src = "../images/about_us.jpg";
    featured_dish_image.src = "../images/featured_dish.jpg";

    about_us_info.insertAdjacentHTML('beforeend', `
        <ul>
            <li>Welcome to FastBites, your go-to fast food destination where deliciousness meets convenience. We are proud to serve you a wide array of mouthwatering dishes prepared with the freshest ingredients and served with a smile.</li>
            <li>At FastBites, we understand the fast-paced lifestyle and strive to deliver quick and flavorful meals without compromising on quality. Whether you're craving our signature juicy burgers, crispy fries, or delectable wraps, we've got something to satisfy every taste bud.</li>
            <li>Our dedicated team is committed to providing exceptional service, ensuring your dining experience is always a delightful one. Join us today and indulge in the flavors of FastBites – where great food meets fast service.</li>
        </ul>
    `);
    featured_dish_text.insertAdjacentHTML('beforeend', `
        <h2>Heavenly burger</h2>
        <p>Get ready to experience burger heaven with our show-stopping creation, The Ultimate FastBites Burger. This towering masterpiece is a true carnivore's delight that will leave you craving for more. Sink your teeth into a juicy, flame-grilled beef patty, topped with melted cheddar cheese, crispy bacon, fresh lettuce, ripe tomatoes, and our secret sauce, all sandwiched between two toasted artisanal buns.</p>
        <p>Every bite is a harmonious blend of smoky flavors, tantalizing textures, and the perfect balance of savory and tangy. Accompanied by a generous serving of golden, crispy fries, this is the ultimate fast food indulgence that will satisfy your cravings and leave you completely satisfied.</p>
        <p>Join us at FastBites and treat yourself to The Ultimate FastBites Burger, the epitome of fast food perfection. Your taste buds will thank you for it!</p>
    `);


    content.appendChild(main);
    main.appendChild(about_us);
    about_us.appendChild(about_us_image);
    about_us.appendChild(about_us_info);
    main.appendChild(featured_dish);
    featured_dish.appendChild(featured_dish_text);
    featured_dish.appendChild(featured_dish_image);
    about_us.insertAdjacentHTML('beforebegin', ' <h1>About us</h1>');
    featured_dish.insertAdjacentHTML('beforebegin', ' <h1>Featured Dish</h1>');
}

export{
    content,
    main,
    loadFooter,
    loadHeader,
    loadInitialPage
}