import React from "react";

import Container from "@/component/common/Container";

const About = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        color: "#222",
        fontFamily: "sans-serif",
      }}
    >
      {/* Page Title */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "30px 60px 10px",
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "700",
            letterSpacing: "0.06em",
          }}
        >
          ABOUT UOMO
        </h1>
      </div>

      {/* Hero Image */}
      <div
        style={{
          width: "100%",
          height: "480px",
          background: "#d0d0d0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
          alt="About hero"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Decorative shapes */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "130px solid transparent",
            borderRight: "130px solid transparent",
            borderBottom: "220px solid rgba(180,180,180,0.7)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(160,160,160,0.6)",
            top: "120px",
            left: "calc(50% - 60px)",
          }}
        />
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 60px" }}>
        {/* Our Story */}
        <div style={{ padding: "60px 0 40px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              marginBottom: "20px",
            }}
          >
            OUR STORY
          </h2>
          <p
            style={{
              fontSize: "13px",
              lineHeight: "1.8",
              color: "#444",
              marginBottom: "14px",
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p
            style={{
              fontSize: "13px",
              lineHeight: "1.8",
              color: "#444",
              marginBottom: "14px",
            }}
          >
            She whereas fluffy good days image their, mollie, nanny upon, aye.
            Suss light seasons. You'll turn rule. Evening Croupier con leaser
            years staff so used. Milk he gives evening fourth deal you're unto
            that. Past famous superiordi for slitting in awe all area to
            plitting grow you'll oh use it, open restore a before, both. Brought
            second Made da. Under male owls, Cinnamon!, breast had light alley.
            We forth darkness thing both dark role night multiply box life give
            they're good.
          </p>

          {/* Mission & Vision */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              margin: "30px 0",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Our Mission
              </h3>
              <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#555" }}>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Our Vision
              </h3>
              <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#555" }}>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
          </div>
        </div>

        {/* Mid Section - Image + Company Text */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "start",
            padding: "20px 0 50px",
          }}
        >
          {/* Mid Image */}
          <div
            style={{
              width: "100%",
              height: "340px",
              background: "#d0d0d0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=80"
              alt="Fashion"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: "60px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "100px solid transparent",
                borderRight: "100px solid transparent",
                borderBottom: "170px solid rgba(180,180,180,0.7)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                background: "rgba(160,160,160,0.6)",
                top: "90px",
                left: "calc(50% - 50px)",
              }}
            />
          </div>

          {/* Company Text */}
          <div>
            <h3
              style={{
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                marginBottom: "16px",
              }}
            >
              THE COMPANY
            </h3>
            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.8",
                color: "#555",
                marginBottom: "14px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis erath ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus at leo. Amet turpis nunc, nulla
              massa vel viverra interdum.
            </p>
            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.8",
                color: "#555",
                marginBottom: "14px",
              }}
            >
              Praesent auctor nulla morbi quis posuere mattis. Arcu eu id
              maecenas risus. Eget litmes tristique leo, sed risus pretium
              molestie. Non massa, imperdiet nunc ut sapien. Tempor facilisis
              ornare quis mi vel.
            </p>
            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.8",
                color: "#555",
                marginBottom: "14px",
              }}
            >
              Felis euismod donec elit posuere lobortis consequat facilisi dui
              aliquam metus. Ornare consequat, vulputate ullamcorper ornare urna
              sed felis nulla, lacus fermentum lacinia phasellus, maecenas dui
              nullam nullam rhoncus. Facilisis quis vulputate sed gravida lacus,
              justo placerat.
            </p>
          </div>
        </div>

        {/* Features */}
        <div
          style={{
            borderTop: "1px solid #eee",
            padding: "40px 0",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
          }}
        >
          {[
            {
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    width: "36px",
                    height: "36px",
                    stroke: "#333",
                    fill: "none",
                    strokeWidth: "1.5",
                  }}
                >
                  <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
                </svg>
              ),
              title: "FAST AND FREE DELIVERY",
              desc: "Free delivery for all orders over $140",
            },
            {
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    width: "36px",
                    height: "36px",
                    stroke: "#333",
                    fill: "none",
                    strokeWidth: "1.5",
                  }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              ),
              title: "24/7 CUSTOMER SUPPORT",
              desc: "Friendly 24/7 customer support",
            },
            {
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    width: "36px",
                    height: "36px",
                    stroke: "#333",
                    fill: "none",
                    strokeWidth: "1.5",
                  }}
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "MONEY BACK GUARANTEE",
              desc: "We return money within 30 days",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>
              <div>
                <strong
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.06em",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </strong>
                <span style={{ fontSize: "12px", color: "#888" }}>
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Logos */}
        <div
          style={{
            borderTop: "1px solid #eee",
            padding: "24px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {[
            "MANGO",
            "ZARA",
            "Reebok",
            "asos",
            "stradivarius",
            "adidas",
            "Bershka",
          ].map((brand, i) => (
            <span
              key={i}
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#888",
                letterSpacing: "0.04em",
              }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
