import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getABlog } from '../features/blogs/blogSlice';
import { useLocation } from 'react-router-dom';


const removeHTMLTags = (htmlString) => {
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    const paragraphs = Array.from(div.getElementsByTagName("p"));
    const textWithoutTags = paragraphs.map((p) => p.textContent || p.innerText).join("\n\n");
    return textWithoutTags;
  };

const BlogPage = () => {
    const blogState = useSelector((state) => state?.blog?.singleblog);
    const location = useLocation();
    const getBlogId = location.pathname.split("/")[2];
    const dispatch = useDispatch();
    useEffect(() => {
        getBlog();
    }, []);
    const getBlog = () => {
        dispatch(getABlog(getBlogId));
    }
    console.log("blogState")
    console.log(blogState)
    

    if (!blogState.updatedViews) {
        return (
            <div>
                Loading....
            </div>
        )
    }


    console.log(blogState.updatedViews)
    const data = blogState.updatedViews;
   
    const newDate = new Date(data.createdAt);

// Get the day, month, and year from the date object
const day = newDate.getDate();
const month = newDate.getMonth() + 1; // Months are zero-based, so add 1
const year = newDate.getFullYear().toString().slice(-2); // Extract last two digits

// console.log(description)
// Create formatted date string in "dd-mm-yy" format
const formattedDate = `${day.toString().padStart(2, "0")}-${month
  .toString()
  .padStart(2, "0")}-${year}`;

  const final=removeHTMLTags(data.description);

    return (
        <div>
            <section className='blog-page'>
                <div className="container ">

                    <div className='h-full w-[80vw] mx-auto'>
                        <div className="title">
                            {data.title}
                        </div>
                        <div className="flex gap-8">
                            <span className='author'>
                                {data.author}
                            </span>
                            <span className='created'>
                                {formattedDate}
                            </span>
                        </div>
                        <div className='flex '>
                            <div className='content w-[75%]'>
                                    {data.description
                                    .replace(/<\/p>/g, "") // Remove closing </p> tags
                                    .replace(/<p>/g, "\n\n") // Replace opening <p> tags with double line breaks
                                    .replace(/\d+\./g, "\n$&")
                                    .replace(/<br>/g, "\n\n\n") 
                                    }
                                    {/* {final} */}
                                    {/* dangerouslySetInnerHTML={{ __html: data.description }} */}
                            </div>
                           
                            <div className=' mx-auto h-[30vh] text-center flex items-center justify-center'>
                    <img src={data.images[0].url} alt="blog-image" className=' h-full' />
            </div>
                            
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default BlogPage
