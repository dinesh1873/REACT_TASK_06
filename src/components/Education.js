import book from './books.jpg';
import mpc from './MPC.jpg';
import cap from './graduate.jpg';

export function Education(){
    return(
        <div>
            <div class="d-flex ">
            <div class="card m-2 w-25 h-50 flex-fill">
                <img class="card-img-top" src={book} alt="Book image" style={{height:"300 px"}}></img>
                <div class="card-body">
                    <h4 class="card-title">BELL AND BENNETT HIGH SCHOOL</h4>
                    <p class="card-text">10th Standard</p>
                    <p class="card-text">Academic Year:2018-2019</p>
                </div>
            </div>
            <div class="card m-2 w-25 h-50 flex-fill">
                <img class="card-img-top" src={mpc} alt="Science image" style={{height:"300px"}}></img>
                <div class="card-body">
                    <h4 class="card-title">SRI CHAITANYA JUNIOR COLLEGE</h4>
                    <p></p>
                    <p class="card-text">Intermediate</p>
                    <p class="card-text">Academic Year:2019-2021</p>
                </div>
            </div>
            <div class="card m-2 w-25 h-50 flex-fill">
                <img class="card-img-top" src={cap} alt="Graduate image" style={{height:"300px"}}></img>
                <div class="card-body">
                    <h4 class="card-title">VELLORE INSTITUTE OF TECHNOLOGY-AP</h4>
                    <p class="card-text">Bachelors in Computer Science</p>
                    <p class="card-text">Academic Year:2021-2025</p>
                </div>
            </div>
            </div>
        </div>
    )
}