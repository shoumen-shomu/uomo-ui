import React, { useState, useCallback } from "react";
import Product from "./Product";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Progress } from "@/components/ui/progress";


const ShopAllProdVirtual = ({ allProductItems }) => {
  const [showItems, setShowItems] = useState(4); 
  const parentRef = React.useRef(null);

 
  const handleScroll = useCallback(() => {
    if (!parentRef.current) return;

    const scrollTop = parentRef.current.scrollTop;
    const scrollHeight = parentRef.current.scrollHeight;
    const clientHeight = parentRef.current.clientHeight;

  

    const itemsPerRow = 4;
    const estimatedRowHeight = 500;
    

    const visibleRows = Math.ceil(clientHeight / estimatedRowHeight) + 1; 
    const calculatedItems = Math.min(
      Math.ceil(scrollTop / estimatedRowHeight) * itemsPerRow + 
      visibleRows * itemsPerRow,
      allProductItems?.length
    );

    setShowItems(calculatedItems);

   
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setShowItems(allProductItems?.length);
    }
  }, [allProductItems?.length]);


  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(allProductItems?.length / 4),
    getScrollElement: () => parentRef.current,
    estimateSize: () => 500,
  });

  return (
    <div>
      <div
        ref={parentRef}
        style={{
          height: `2000px`,
          overflow: "auto",
        }}
        onScroll={handleScroll} 
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem) => {
            const start = virtualItem.index * 4;
            const products = allProductItems.slice(start, start + 4);
            return (
              <div
                key={virtualItem.key}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
                className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7.5"
              >
                {products?.map((items, index) => {
                  return (
                    <Product
                      key={index}
                      imgAlt={items.title}
                      catagory={items.catagory}
                      itemName={items.title}
                      itemPrice={items.price}
                      discountPrice={items.discount}
                      imgSrc={items.thumbnail}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

    
      <div className="mt-[50px] flex flex-col items-center w-full max-w-full sm:max-w-[90%] md:max-w-75 mx-auto uppercase px-4 sm:px-0">
        <p className="texts_14_medium text-black pb-1.25">
          Showing {showItems} of {allProductItems?.length} Items
        </p>
        <Progress
          value={(showItems / allProductItems?.length) * 100} 
          className="h-full w-full bg-[#E4E4E4] [&>div]:bg-black transition-all duration-500 items-center rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default ShopAllProdVirtual;