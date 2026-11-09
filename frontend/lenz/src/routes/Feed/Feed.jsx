import Cardfeed from "../../components/Cardfeed/Cardfeed";
import "./Feed.css";

function Feed() {
    return (
        <div className="feed-container container-fluid">
            <div className="feed-publication container-fluid">
                <Cardfeed img="https://images.unsplash.com/photo-1791777831436-c57713961d33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" nome="TEste" desc="lorem" />
            </div>
        </div>
    );
}

export default Feed;