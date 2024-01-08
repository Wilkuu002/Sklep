import {useEffect, useState} from "react";
import './StronyCSS/StronaBlogCss.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap"
const StronaBlog = ()=>{
    const [blogs, setBlogs] = useState([]);
    const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('products.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBlogs(data.blogs);
            } catch (error) {
                console.error('Error fetching blogs:', error.message);
            }
        };

        fetchData();
    }, []);
    const handleNextBlog = () => {
        setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    };

    const handlePrevBlog = () => {
        setCurrentBlogIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
    };
    return (
        <div className="container mt-4">
            {blogs.length > 0 && (
                <div>
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="Blog">
                                <p className="BlogText">{blogs[currentBlogIndex].text}</p>
                            </div>
                            <Button variant="primary" onClick={handlePrevBlog} className="mr-2">Poprzedni</Button>
                            <Button variant="primary" onClick={handleNextBlog}>Następny</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default StronaBlog