import Instagram from './Instagram.webp';
import Facebook from './facebook.png';
import Linkedin from './linkedin.webp';
import Github from './github.jpg';
export function Contact(){
    return(
        <div>
            <h1 class="text-primary bg-dark mb-0 p-3">Contact</h1>
            <div class="row g-0">
                <div class="col-sm-6 col-md-3">
                   <a href="https://www.instagram.com/" class="flex-fill">
                    <img src={Instagram} style={{height:"200px",width:"100%"}}></img>
                   </a>
                </div>
                <div class="col-sm-6 col-md-3">
                   <a href="https://www.facebook.com/" class="flex-fill">
                    <img src={Facebook} style={{height:"200px",width:"100%"}}></img>
                   </a>
                </div>
                <div class="col-sm-6 col-md-3">
                   <a href="https://about.linkedin.com/" class="flex-fill">
                    <img src={Linkedin} style={{height:"200px",width:"100%"}}></img>
                   </a>
                </div>
                <div class="col-sm-6 col-md-3">
                   <a href="https://github.com/logos" class="flex-fill">
                    <img src={Github} style={{height:"200px",width:"100%"}}></img>
                   </a>
                </div>
            </div>
        </div>
    )
}