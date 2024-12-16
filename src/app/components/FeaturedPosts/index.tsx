import React from "react";
import Image from "next/image";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Practice Advice",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: "/f1.png",
      date: "22 April 2021",
      comments: 10,
      tag: "NEW",
    },
    {
      id: 2,
      title: "Practice Advice",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: "/f2.png",
      date: "22 April 2021",
      comments: 10,
      tag: "Trending",
    },
    {
      id: 3,
      title: "Practice Advice",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      img: "/f3.png",
      date: "22 April 2021",
      comments: 10,
      tag: "Hot",
    },
  ];

  return (
    <div className="max-w-[1050px] mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center mb-8">
        <h6 className="text-[14px] leading-[24px] font-bold text-[#23A6F0] font-montserrat mt-2">
          Practice Advice
        </h6>
        <h2 className="text-[28px] sm:text-[40px] leading-[36px] sm:leading-[50px] font-bold text-[#252B42] font-montserrat mt-2">
          Featured Posts
        </h2>
        <p className="text-[14px] leading-[20px] text-[#737373] mt-2 sm:mt-4 font-montserrat max-w-[800px] mx-auto">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative">
              <Image
                src={post.img}
                alt={post.title}
                width={400}
                height={160}
                className="w-full h-40 object-cover"
              />
              <span className="absolute top-2 left-2 bg-[#23A6F0] text-white text-sm font-bold px-2 py-1 rounded">
                {post.tag}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-[16px] sm:text-[18px] leading-[24px] font-bold text-[#23A6F0] text-center font-montserrat">
                {post.title}
              </h3>
              <p className="text-[14px] leading-[20px] text-[#737373] mt-2 text-center font-montserrat">
                {post.description}
              </p>
              <div className="flex justify-between items-center text-[#737373] text-xs mt-4">
                <span>{post.date}</span>
                <span>{post.comments} comments</span>
              </div>
              <a
                href="#"
                className="text-blue-500 text-xs font-medium mt-4 inline-block hover:underline text-center"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
