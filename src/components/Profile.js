import teste from "../assets/images/puppy.jpg";

function Profile() {
    return (
        <div className="card" style={{width: "20rem"}}>
            <img src={teste} className="card-img-top" alt="puppy"/>
            <div className="card-body">
                <h3>Cute puppy</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas bibendum ligula. Suspendisse efficitur turpis dui, ac vehicula purus sodales et. </p>
            </div>
        </div>

    )
}

export default Profile