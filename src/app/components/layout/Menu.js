import MenuItem from "./MenuItem";

export default function Menu() {
  const menuItems = [
    {
      image: "/original.png",
      title: "Original Tahu Bulat",
      description: "Fresh and crispy Tahu Bulat with a classic taste.",
      price:"Rp 10.000"
    },
    {
      image: "./cheese.png",
      title: "Cheese Tahu Bulat",
      description: "Cheesy and delicious, a twist on the classic snack.",
      price:"Rp 17.000"
    },
    {
      image: "./spicy.png",
      title: "Spicy Tahu Bulat",
      description: "For those who love a spicy kick in every bite.",
      price:"Rp 15.000"
    },
  ];

  return (
    <section className="text-center">
      <div className="text-center">
        <h3 className="text-gray-600 font-semibold mt-4">CHECK OUR</h3>
        <h2 className="text-primary font-bold text-4xl mb-4">Menu</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
