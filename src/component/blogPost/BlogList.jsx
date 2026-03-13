import Blog from "@/component/common/Blog";
import Container from "@/component/common/Container";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import blogImg from "@/assets/images/blogImg.png";
import mixitup from "mixitup";

const BlogList = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      mixitup(containerRef.current, {
        animation: {
          duration: 400,
        },
        selectors: {
          target: ".mix",
        },
      });
    }
  }, []);

  return (
    <section>
      <Container>
        <h2 className="head_35_bold text-head pb-2.75 pt-22.5">The Blog</h2>
        <div className="flex gap-10 pb-12.5">
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
        <div ref={containerRef} className="flex flex-wrap gap-7.5">
          <div className="mix all company beauty">
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
          <div className="mix all company style">
            <Blog
              imgSrc={blogImg}
              imgAlt={blogImg}
              author={"BY ADMIN"}
              date={"APRIL 05, 2020"}
              blogname={"5 Tips to Increase Your Online Sales"}
              blogdescription={
                "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."
              }
            />
          </div>
          <div className="mix all trends fashion">
            <Blog
              imgSrc={blogImg}
              imgAlt={blogImg}
              author={"BY ADMIN"}
              date={"APRIL 05, 2020"}
              blogname={"Tree earth fowl given moveth deep lesser After"}
              blogdescription={
                "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."
              }
            />
          </div>
          <div className="mix all style trends">
            <Blog
              imgSrc={blogImg}
              imgAlt={blogImg}
              author={"BY ADMIN"}
              date={"APRIL 05, 2020"}
              blogname={"Given Set was without from god divide rule Hath"}
              blogdescription={
                "Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under."
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogList;
