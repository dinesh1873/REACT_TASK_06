import computer from './system.jpg';
export function Skills(){
    return(
        <div class="m-4">
            <div class="row "  style={{backgroundColor:"teal",boxSizing:"border-box"}}>
                <div class="col-4 ps-0 ">
                    <img src={computer} style={{height:"200px"}} ></img>
                </div>
                <div class="col-md-6 mx-auto d-flex align-items-center">
                    <div class="text-center">
                        <h1 style={{fontSize:"100px",color:"lavender"}}>S K I L L S</h1>
                    </div>
                </div>
            </div>
            <div class="row mt-3" style={{boxSizing:"border-box"}}>
                <div class="col-4 bg-success p-5">
                    <h2 class="text-white">LANGUAGE SKILLS</h2>
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div class="col-4 bg-warning p-5">
                    <h2 class="text-white">WEB DEVELOPMENT </h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Java Script</li>
                        <li>Bootstrap Framework</li>
                        <li>React Framework</li>
                    </ul>
                </div>
                <div class="col-4 bg-success p-5">
                    <h2 class="text-white">TOOLS</h2>
                    <ul>
                        <li>VS CODE</li>
                        <li>ORACLE</li>
                        <li>MAT LAB</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}