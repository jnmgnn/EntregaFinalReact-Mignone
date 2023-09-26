export const productos = [
    {
        id: 1,
        nombre: "Hello Kitty",
        precio: "$200",
        categoria: "Hello Kitty",
        stock: 10,
        descripcion: "After all, it's all about the blue overall. This super soft plush features Hello Kitty in her original blue overalls from when she made her initial debut. Finished with embroidery and resin eyes, she's the perfect plush for any Hello Kitty fan. Whether you keep her on the couch, on a shelf, or tucked into bed, Hello Kitty's a friend to all.",
        img: "https://www.sanrio.com/cdn/shop/products/Untitled-1_d1949699-6a20-4837-88f2-6f4aba17478a_800x.png?v=1650038377"
    },
    {
        id: 2,
        nombre: "Cinnamoroll",
        precio: "$200",
        categoria: "Cinnamoroll",
        stock: 10,
        descripcion: "Cinnamoroll is an adorable puppy with a curly tail that looks like a cinnamon roll! He's quite shy, but very friendly, and sometimes takes a nap on people's laps. He can fly through the air by flapping his huge ears.",
        img: "https://www.sanrio.com/cdn/shop/products/618870-Zoom.1_600x.jpg?v=1664384445"
    },
    {
        id: 3,
        nombre: "Kuromi",
        precio: "$290",
        categoria: "Kuromi",
        stock: 10,
        descripcion: "Kuromi is a tomboy, but behind her tough appearance, she is actually very girly. She enjoys writing in her diary and reading romance novels.",
        img: "https://www.sanrio.com/cdn/shop/products/618888-Zoom.1_600x.jpg?v=1664384458"
    },
    {
        id: 4,
        nombre: "My Melody",
        precio: "$190",
        categoria: "My Melody",
        stock: 10,
        descripcion: "My Melody was born in the forest of Mariland. Her favorite hobby is baking cookies with her mother, and her favorite food is almond pound cake. She enjoys eating cake with her best friend, a mouse named Flat.",
        img: "https://www.sanrio.com/cdn/shop/products/618764-Zoom.1_600x.jpg?v=1664384402"
    },
    {
        id: 5,
        nombre: "Pompompurin",
        precio: "$85",
        categoria: "Pompompurin",
        stock: 10,
        descripcion: "This boy golden retriever is unmistakable in his trademark brown beret. He has a laidback demeanor and loves the phrase, «Let's go out!» He loves milk, anything soft, and his mamas cream caramel puddings.",
        img: "https://www.sanrio.com/cdn/shop/products/618811-Zoom.1_600x.jpg?v=1664384414"
    },
    {
        id: 6,
        nombre: "Pochacco",
        precio: "$95",
        categoria: "Pochacco",
        stock: 10,
        descripcion: "Pochacco is a curious little guy who loves going for walks and eating banana ice cream. This sports-minded pup is a great basketball player and a not too shabby soccer goalie too!",
        img: "https://www.sanrio.com/cdn/shop/products/zz-2205853500_PC_--1_600x.jpg?v=1671667901"
    },
    {
        id: 7,
        nombre: "Keroppi",
        precio: "$150",
        categoria: "Keroppi",
        stock: 10,
        descripcion: "Keroppi is full of energy! He loves adventure and is good at singing and swimming. He lives with his friends and family at Donut Pond. His friends include Denden, an easygoing snail who enjoys daydreaming in his own little world, and Teruteru, an enchanting little girl who can predict the weather.",
        img: "https://www.sanrio.com/cdn/shop/products/618853-Zoom.1_600x.jpg?v=1664384425"
    },
    {
        id: 8,
        nombre: "Badtz-maru",
        precio: "$170",
        categoria: "Badtz-maru",
        stock: 10,
        descripcion: "Badtz-maru is one mischievous little penguin. He lives with his mother and pinball playing father in Gorgeoustown. Badtz-maru attracts lots of attention as he walks his pet alligator, Pochi. Badtz-maru has dreams of greatness when he grows up, but for now he rolls his eyes at his humorous life in Gorgeoustown.",
        img: "https://www.sanrio.com/cdn/shop/products/618861-Zoom.1_600x.jpg?v=1664384434"
    },
    {
        id: 9,
        nombre: "Gudetama",
        precio: "$185",
        categoria: "Gudetama",
        stock: 10,
        descripcion: "Only the laziest egg should take napping this seriously! Soft, textured plush detailing shows off Gudetama's best sides and favorite place to sleep the day away.",
        img: "https://www.sanrio.com/cdn/shop/products/881503-Zoom.1_800x.jpg?v=1677718820"
    },
    {
        id: 10,
        nombre: "Tuxedo Sam",
        precio: "$85",
        categoria: "Tuxedo Sam",
        stock: 10,
        descripcion: "Tuxedosam is a little stubborn, but he has a great fashion sense and a collection of 365 bow ties. He has studied abroad in England likes cleanliness. His brothers, Pam and Tam, also look just like him!",
        img: "https://www.sanrio.com/cdn/shop/products/618934-Zoom.1_800x.jpg?v=1664384476"
    },
    {
        id: 11,
        nombre: "Pekkle",
        precio: "$895",
        categoria: "Pekkle",
        stock: 10,
        descripcion: "The Little Pekkle series sees Pekkle as a baby with a soft, powder blue color palette. He looks adorable with scarf tied around his neck. Collect all the pieces for a complete set.",
        img: "https://www.sanrio.com/cdn/shop/products/840009-Zoom.1_800x.jpg?v=1654127523"
    },
]

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}