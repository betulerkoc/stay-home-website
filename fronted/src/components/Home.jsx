

const Home = (userData) => {
    return (
        <div>
            {userData.firstName ? <h1>Welcome {userData.firstName}</h1>:<h1>Hello World</h1>}
        </div>
    )
}
export default Home;