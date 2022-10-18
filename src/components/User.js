function User({name, age, occupation}) {
    return (
        <section className="user">
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Occupation: {occupation}</p>
        </section>
    )
}
export default User

//Destructuring function parameters