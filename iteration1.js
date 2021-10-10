const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let pintar=document.querySelector('[data-function="printHere"]');

let paisesHTML=countries.map((pais)=>
    `<ul>
        <li>${pais}</li>
    </ul>
    `
).join("");
pintar.innerHTML=paisesHTML;