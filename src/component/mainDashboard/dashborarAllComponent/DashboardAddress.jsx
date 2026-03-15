import { useEffect, useState } from "react";

const DashboardAddress = () => {
  const addresses = [
    {
      id: 1,
      type: "BILLING ADDRESS",
      name: "Daniel Robinson",
      street: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
      country: "United States",
      email: "sale@uomo.com",
      phone: "+1 246-345-0695",
    },
    {
      id: 2,
      type: "SHIPPING ADDRESS",
      name: "Daniel Robinson",
      street: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
      country: "United States",
      email: "sale@uomo.com",
      phone: "+1 246-345-0695",
    },
  ];

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // gap: mobile < 640 → 20px | tablet 640–1023 → 24px | desktop ≥ 1024 → 91px
  const gridGap =
    screenWidth >= 1024 ? "91px" : screenWidth >= 640 ? "24px" : "20px";

  // grid columns: mobile → 1 col | tablet & desktop → 2 cols
  const gridCols = screenWidth >= 640 ? "repeat(2, 1fr)" : "1fr";

  return (
    <>
      <section className="mt-6 lg:mt-25 px-4 sm:px-6 lg:ml-5 lg:px-0 bg-amber-100">
        <div className="w-full lg:w-216.75">
          <div style={{ fontFamily: "sans-serif", padding: "1rem 0" }}>

            {/* Heading */}
            <p
              style={{ fontSize: "14px", color: "#666", marginBottom: "2rem" }}
            >
              The following addresses will be used on the checkout page by
              default.
            </p>

            {/* Responsive Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: gridCols,
                gap: gridGap,
              }}
            >
              {addresses.map((address) => (
                <div
                  key={address.id}
                  style={{ border: "1px solid #4aa8d8", padding: "1.25rem" }}
                >
                  {/* Card Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "700",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {address.type}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        letterSpacing: "0.05em",
                        borderBottom: "1px solid #000",
                        cursor: "pointer",
                      }}
                    >
                      EDIT
                    </span>
                  </div>

                  {/* Card Body */}
                  <p style={{ margin: "0 0 4px", fontSize: "14px" }}>
                    {address.name}
                  </p>
                  <p style={{ margin: "0 0 4px", fontSize: "14px" }}>
                    {address.street}
                  </p>
                  <p style={{ margin: "0 0 1rem", fontSize: "14px" }}>
                    {address.country}
                  </p>
                  <p style={{ margin: "0 0 4px", fontSize: "14px" }}>
                    {address.email}
                  </p>
                  <p style={{ margin: "0", fontSize: "14px" }}>
                    {address.phone}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardAddress;