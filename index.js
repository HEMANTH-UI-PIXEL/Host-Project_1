import {city} from "./modproj.js";

let localitiesContainerE1 = document.querySelector(".localities_container")

let htmlLocalitiesList = city.map((el)=> {
    return  `
        <div class="localities_list">
            <div class="localities_card">
                <h3>{el.name}</h3>
                <p>${el.place}</p>
            </div>
            <i class="fa-solid fa-angle-right"></i>
       </div>
       `
        
    
})
localitiesContainerE1.innerHTML = htmlLocalitiesList

