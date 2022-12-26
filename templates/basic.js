export default {
  type: "div",
  variant: "section",
  props: {
    style: {
      background: "blue",
      width: "100vh",
      height: "100vh",
      display: "flex",
      flexFlow: "column",
      padding: "20%",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
  },
  children: [
    {
      type: "h1",
      variant: "heading",
      props: {
        style: { fontSize: "98px", color: "white", textAlign: "center" },
      },
      children: "Content",
    },
    {
      type: "h1",
      variant: "subheading",
      props: {
        style: { fontSize: "40px", color: "white", textAlign: "center" },
      },
      children: "Content",
    },
  ],
};

//heading
//subheading
//hero
//background
