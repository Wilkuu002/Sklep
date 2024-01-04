import {useEffect, useState} from "react";
import './StronyCSS/StronaBlogCss.css'
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
        <div>
            {blogs.length > 0 && (
                <div>
                    <div className="Blog">
                        <p className="BlogText">{blogs[currentBlogIndex].text}</p>
                    </div>
                    <button onClick={handlePrevBlog}>Poprzedni</button>
                    <button onClick={handleNextBlog}>Następny</button>
                </div>
            )}
        </div>
    );
}
export default StronaBlog