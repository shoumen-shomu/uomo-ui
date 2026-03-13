import Blog from "@/component/common/Blog";
import Container from "@/component/common/Container";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import blogImg from "@/assets/images/blogImg.png";
import mixitup from "mixitup";
import { Progress } from "@/components/ui/progress";
import Button from "../common/Button";

const BlogList = () => {
  // ১. স্টেট এবং ডেটা (এগুলো আপনার প্রয়োজনমতো পরিবর্তন করবেন)
  const [visibleItems, setVisibleItems] = useState(36);
  const totalItems = 100;

  // ২. ক্যালকুলেশন (এটি অটোমেটিক বারকে আপডেট করবে)
  const percentage = (visibleItems / totalItems) * 100;

  const handleLoadMore = () => {
    // প্রতি ক্লিকে ১২টি করে বাড়বে (উদাহরণস্বরূপ)
    if (visibleItems < totalItems) {
      setVisibleItems((prev) => Math.min(prev + 12, totalItems));
    }
  };

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
    <section className="pb-[98px]">
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
        <div ref={containerRef} className="flex flex-wrap gap-7.5 pb-12.5">
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
        <div className="flex flex-col items-center gap-4 w-full max-w-75 mx-auto uppercase">
          {/* ৩. টেক্সট অংশ */}
          <p className="texts_14_medium text-black">
            Showing {visibleItems} of {totalItems} Items
          </p>

          {/* ৪. Shadcn Progress Bar (ইমেজের মতো হুবহু ডিজাইন করা) */}
          <Progress
            value={percentage}
            className="h-0.5 w-full bg-[#e5e5e5] [&>div]:bg-black transition-all duration-500"
          />

          {visibleItems < totalItems && (
            <Button
              onClick={handleLoadMore}
              className={"texts_14_medium text-black hover:after:w-15 pt-[17px]"}
              btnText={"SHOW MORE"}
            />
          )}
        </div>
      </Container>
    </section>
  );
};

export default BlogList;
