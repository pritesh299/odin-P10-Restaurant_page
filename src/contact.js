import { content } from "./Header-footer";

let conatct=document.createElement('div');
  conatct.setAttribute('id','contact');

  function loadContact(){
      let contact_info=document.createElement('div')
      let Location=document.createElement('div')
      let Phone=document.createElement('div')
      let Email=document.createElement('div')
      let contact_form=document.createElement('div')
      
      content.appendChild(conatct)
      conatct.appendChild(contact_info)
      conatct.appendChild(contact_form)
      contact_info.appendChild(Location)
      contact_info.appendChild(Phone)
      contact_info.appendChild(Email)



      contact_form.setAttribute('id','contact_form')
      contact_form.setAttribute('id','contact_form')


      contact_info.insertAdjacentHTML('beforebegin',`
                 <h2>Contact Us</h2>
                 <p>Have a question or feedback? We'd love to hear from you!</p>
      `)
      Location.insertAdjacentHTML('beforeend',`
                  <h4>Location</h4>
                  <p>123 Fast Street, City, State, ZIP</p>
      `)

      Phone.insertAdjacentHTML('beforeend',`
                 <h4>Phone</h4>
                  <p>(123) 456_7890</p>
     `)

     Email.insertAdjacentHTML('beforeend',`
                 <h4>Email</h4>
                 <p>info@fastbites.com</p>
     `)

      contact_form.insertAdjacentHTML('beforeend', `
      <h4>Send us a message</h4>
      <form  method="POST">
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Your Email" required>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="button" >Send Message</button>
      </form>
      `)

  }

  export{
    loadContact,
    conatct
  }