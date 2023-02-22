/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

let menu = document.querySelector('menu-icon');
let navbar = document.querySelector('navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
     navbar.classList.toggle('active');
}

window.onscroll= () =>{
    menu.classList('bx-x');
      navbar.classList.toggle('active');
}