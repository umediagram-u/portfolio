import { useState } from "react";
import img1 from "../../public/assets/img/blog/blog-post-1.jpg";
import img2 from "../../public/assets/img/blog/blog-post-2.jpg";
import img3 from "../../public/assets/img/blog/blog-post-3.jpg";
import img4 from "../../public/assets/img/blog/blog-post-4.jpg";
import img5 from "../../public/assets/img/blog/blog-post-5.jpg";
import img6 from "../../public/assets/img/blog/blog-post-6.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "blogs unavaible",
      commentor: "Usmonjon ",
      date: "26 January 2024",
      tag: `unaviable`,
      description1:
        "blogs unavaible",
      description2:
        "blogs unavaible",
      description3:
        "blogs unavaible",
      description4:
        "blogs unavaible",
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
