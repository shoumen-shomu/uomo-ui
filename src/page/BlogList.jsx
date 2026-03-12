import Blog from "@/component/common/Blog";
import Container from "@/component/common/Container";
import React from "react";
import { Link } from "react-router-dom";
import blogImg from "@/assets/images/blogImg.png";

const BlogList = () => {
  return (
    <section>
      <Container>
        <h2 className="head_35_bold text-head pb-2.75">The Blog</h2>
        <div className="flex gap-10">
          <Link>
            <p
              data-filter=".all"
              className="texts_16_medium text-head hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
            >
              ALL
            </p>
          </Link>
          <Link>
            <p
              data-filter=".company"
              className="texts_16_medium text-head hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
            >
              COMPANY
            </p>
          </Link>
          <Link>
            <p
              data-filter=".fashion"
              className="texts_16_medium text-head hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
            >
              FASHION
            </p>
          </Link>
          <Link>
            <p
              data-filter=".style"
              className="texts_16_medium text-head hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
            >
              STYLE
            </p>
          </Link>
          <Link>
            <p
              data-filter=".trends"
              className="texts_16_medium text-head hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
            >
              TRENDS
            </p>
          </Link>
          <Link>
            <p
              data-filter=".beauty"
              className="texts_16_medium text-head hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]"
            >
              BEAUTY
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-7.5">
          <Blog
            imgSrc={blogImg}
            imgAlt={blogImg}
            author={"BY ADMIN"}
            date={"APRIL 05, 2020"}
            blogname={"Woman with good shoes is never be ugly place"}
            blogdescription={
              "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."
            }
          />
          <Blog
            imgSrc={blogImg}
            imgAlt={blogImg}
            author={"BY ADMIN"}
            date={"APRIL 05, 2020"}
            blogname={"Woman with good shoes is never be ugly place"}
            blogdescription={
              "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."
            }
          />
          <Blog
            imgSrc={blogImg}
            imgAlt={blogImg}
            author={"BY ADMIN"}
            date={"APRIL 05, 2020"}
            blogname={"Woman with good shoes is never be ugly place"}
            blogdescription={
              "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."
            }
          />
          <Blog
            imgSrc={blogImg}
            imgAlt={blogImg}
            author={"BY ADMIN"}
            date={"APRIL 05, 2020"}
            blogname={"Woman with good shoes is never be ugly place"}
            blogdescription={
              "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default BlogList;
