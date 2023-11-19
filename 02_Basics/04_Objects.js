const course = {
  courseName: "Js Mastery",
  price: 999,
  teacher: "Hitesh",
};
//De-structuring Object
const { teacher: courseInstructor } = course;
console.log(courseInstructor);

//we use de-structuring in react as follows
// const Navbar = ({ title }) => {
//   return (
//       <h1>{title}</h1>
//   );
// };
