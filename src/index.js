import {loadHeader,loadFooter,loadInitialPage,content,main} from './Header-footer.js';
import { menu,loadMenu } from './menu.js';
import { loadContact,conatct} from './contact.js';



let currentPage=main;

loadHeader();
loadInitialPage();
loadContact();
loadMenu();
loadFooter();


content.removeChild(menu)
content.removeChild(conatct)

document.getElementById('home_btn').addEventListener('click',()=>{
           content.removeChild(currentPage);
           content.removeChild(document.querySelector("footer"));
           content.appendChild(main);
           loadFooter();
           currentPage=main;
})

document.getElementById('Menu_btn').addEventListener('click',()=>{
          content.removeChild(currentPage);
          content.removeChild(document.querySelector("footer"));
          content.appendChild(menu);
          loadFooter();
          currentPage=menu;

})

document.getElementById('Contact_btn').addEventListener('click',()=>{
          content.removeChild(currentPage);
          content.removeChild(document.querySelector("footer"));
          content.appendChild(conatct);
          loadFooter();
          currentPage=conatct;
})

document.getElementById('home_btn').click();