
let menu=document.createElement('div');
    menu.setAttribute('id','menu')

    const menuArray = [
        ['Burgers', 'Classic Cheeseburger', 'Bacon BBQ Burger', 'Spicy Jalapeno Burger', 'Mushroom Swiss Burger', 'Veggie Burger'],
        ['Chicken', 'Crispy Chicken Sandwich', 'Spicy Buffalo Chicken Wrap', 'Grilled Chicken Caesar Salad', 'BBQ Chicken Tenders', 'Chicken Nuggets'],
        ['Fries', 'Classic French Fries', 'Seasoned Curly Fries', 'Sweet Potato Fries', 'Loaded Cheese Fries', 'Chili Cheese Fries'],
        ['Sandwiches', 'BLT Sandwich', 'Turkey Club Sandwich', 'Philly Cheesesteak', 'Grilled Veggie Wrap', 'Tuna Salad Sandwich'],
        ['Salads', 'Garden Salad', 'Caesar Salad', 'Greek Salad', 'Cobb Salad', 'Southwest Chicken Salad'],
        ['Drinks', 'Soft Drinks (various flavors)', 'Iced Tea (sweetened/unsweetened)', 'Lemonade', 'Milkshakes (vanilla, chocolate, strawberry)', 'Bottled Water'],
        ['Desserts', 'Classic Vanilla Sundae', 'Chocolate Brownie Delight', 'Apple Pie', 'Soft-Serve Ice Cream Cone', 'Oreo Milkshake']
      ];
      

function loadMenu(){
    content.appendChild(menu);
    menu.insertAdjacentHTML('afterbegin',"<h1>MENU<h1>")

 for(let i=0;i<7;i++)
 {
    let  dish=document.createElement('div');
    let  dish_image=document.createElement('img') ;
    let  dish_text=document.createElement('div');
  
    dish_text.insertAdjacentHTML('beforeend',`
            <h2>${menuArray[i][0]}:</h2>
                <ul>
                    <li>${menuArray[i][1]}</li>
                    <li>${menuArray[i][2]}</li>
                    <li>${menuArray[i][3]}</li>
                    <li>${menuArray[i][4]}</li>
                    <li>${menuArray[i][5]}</li>
                </ul>
                <h3 class="price">Rs:100 Each</h3>  
    `);
    dish_image.src=`../images/${menuArray[i][0]}.jpg`
    menu.appendChild(dish);
   
    if (i%2===0){ 
        dish.setAttribute('class','Left_dish_list')
        dish.appendChild(dish_image)
        dish.appendChild(dish_text)
    }
    else {
        dish.setAttribute('class','right_dish_list')
        dish.appendChild(dish_text)
        dish.appendChild(dish_image)
    }
  }
}

export{
    loadMenu,
    menu
}



    
