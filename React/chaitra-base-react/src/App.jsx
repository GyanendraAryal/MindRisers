


function App() {
  let description =
    "Lorem ipsum dolor sit amet consectsequi quas fugit incidunt.";

  let domain = "https://mindrisers.com.np";
  let blogs = [
    {
      title: "Web Designing Training in Putalisadak, Kathmandu",
      image:
        "/static/Images/blog/single_post/Web_Designing_Training_in_Putalisadak_Kathmandu.jpg",
    },
    {
      title: "Graphic Designing Training in Putalisadak, Kathmandu | Mindrisers",
      image:
        "/static/Images/blog/single_post/Graphic_Designing_Training_in_Putalisadak_Kathmandu__Mindrisers.png",
    },
    {
      title:
        "Data Science with Python Training in Putalisadak, Kathmandu | Mindrisers",
      image:
        "/static/Images/blog/single_post/Data_Science_with_Python_Training_in_Putalisadak_Kathmandu.jpg",
    },
    {
      title: "UI/UX Training in Putalisadak, Kathmandu | Mindrisers",
      image:
        "/static/Images/blog/single_post/UIUX_Training_in_Putalisadak_Kathmandu__Mindrisers.png",
    },
    {
      title: "Flutter Training in Putalisadak, Kathmandu | Mindrisers",
      image:
        "/static/Images/blog/single_post/Flutter_Training_in_Putalisadak_Kathmandu_Mindrisers.png",
    },
    {
      title: "DevOps Training in Putalisadak, Kathmandu | Mindrisers",
      image:
        "/static/Images/blog/single_post/DevOps_Training_in_Putalisadak_Kathmandu__Mindrisers.png",
    },
  ];

  return (
    <>
      {blogs.map((element, index) => (
        <div className="div" key={index}>
          <span>{element.title}</span>
          <span><img height={100} src={domain + element.image} alt="logo" /></span>
        </div>
      ))}
    </>
  )
}

export default App
