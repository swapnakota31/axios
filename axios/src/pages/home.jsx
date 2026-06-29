import axios from "axios";
import {useState} from "react";

function Home() {
    const [data, setData] = useState(null);

    async function fetchData() {
        try {
            const response = await axios.get(
            "http://localhost:3000/posts"
            );

            setData(response.data);

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <h1>Home Page</h1>

            <button onClick={fetchData}>
                Fetch Data
            </button>
            {
                data && data.map((post)=>{

                    return (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    )
                })
                }
        </div>
    );
}

export default Home;