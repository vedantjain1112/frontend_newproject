// import React, { useEffect, useState } from "react";
// import "./Admin.scss";
// import axios from "axios";
// import { showErrorToast, showSuccessToast } from "../../utils/toastUtils";

// function AdminPage() {
//   const [animationStarted, setAnimationStarted] = useState(false);

//   useEffect(() => {
//     if (!animationStarted) {
//       const box = document.querySelector(".boxof");
//       const textarea = document.querySelector(".inputTypetextarea");

//       function animateBox(element, properties, duration, callback) {
//         const initial = {};
//         for (const prop in properties) {
//           initial[prop] = parseFloat(getComputedStyle(element)[prop]);
//         }

//         const start = performance.now();

//         function update(time) {
//           let progress = (time - start) / duration;

//           if (progress > 1) {
//             progress = 1;
//           }

//           for (const prop in properties) {
//             const value =
//               initial[prop] + (properties[prop] - initial[prop]) * progress;
//             element.style[prop] = value + (prop === "opacity" ? "" : "px");
//           }

//           if (progress < 1) {
//             requestAnimationFrame(update);
//           } else {
//             if (callback) {
//               callback();
//             }
//           }
//         }

//         requestAnimationFrame(update);
//       }

//       animateBox(box, { top: 50 }, 700, () => {
//         animateBox(box, { width: 600 }, 700, () => {
//           animateBox(box, { height: 650, padding: "10px 0 70px" }, 700, () => {
//             animateBox(box, { borderRadius: 10 }, 700, () => {
//               const h1 = document.querySelector("h1");
//               animateBox(h1, { top: 0 }, 700, () => {
//                 const inputTextElements =
//                   document.querySelectorAll("input[type='text']");
//                 const fileinputElement =
//                   document.querySelectorAll("input[type='file']");

//                 fileinputElement.forEach((inputfile) => {
//                   animateBox(inputfile, { left: 0 }, 700);
//                 });

//                 inputTextElements.forEach((inputText) => {
//                   animateBox(inputText, { left: 0 }, 700);
//                 });

//                 const button = document.querySelector("button");
//                 animateBox(button, { bottom: 0 }, 700, () => {
//                   setAnimationStarted(true);
//                 });
//                 const textarea = document.querySelector("textarea");
//                 animateBox(textarea, { left: 0 }, 700);
//               });
//             });
//           });
//         });
//       });

//       setAnimationStarted(true);
//     }
//   }, [animationStarted]);

//   const [data, setData] = useState({
//     name: "",
//     image: "",
//     paragraph: "",
//     sthal: "",
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("image", data.image);
//     formData.append("paragraph", data.paragraph);
//     formData.append("sthal", data.sthal);

//     // console.log("Sending data:", formData);

//     axios
//       .post("http://localhost:4000/info/add", formData)
//       .then((response) => {
//         console.log("Response:", response.data);
//         showSuccessToast("Data submitted successfully");
//       })
//       .catch((error) => {
//         console.error("Error submitting data:", error);
//         showErrorToast("Error submitting data");
//       });
//   };

//   const handleInputChange = (event) => {
//     const { name, value, files } = event.target;

//     if (name === "image") {
//       setData((prevData) => ({
//         ...prevData,
//         [name]: files[0],
//       }));
//     } else {
//       setData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   return (
//     <div
//       style={{
//         padding: " 10px",
//         fontamily: "Arial",
//         background: "#fff",
//       }}
//     >
//       <div
//         className="boxof"
//         style={{
//           margin: "auto",
//           background: "#000",
//           color: "#fff",
//           width: "200px",
//           height: "10px",
//           textAlign: "center",
//           overflow: "hidden",
//           position: "relative",
//           top: "-100px",
//           transitionDuration: "1s",
//           WebkitTransitionDuration: "1s",
//           MozTransitionDuration: "1s",
//         }}
//       >
//         <div
//           style={{
//             width: "500px",
//             margin: "auto",
//           }}
//         >
//           <h1
//             style={{
//               color: "#fff",
//               letterSpacing: "-4px",
//               fontSize: "40px",
//               fontWeight: "normal",
//               position: "relative",
//               top: "-150px",
//             }}
//           >
//             Admin Page
//           </h1>
//           <form onSubmit={handleSubmit} encType="multipart/form-data">
//             <input
//               type="text"
//               name="name"
//               placeholder=" महाराज साहेब का नाम"
//               onChange={handleInputChange}
//               style={{
//                 display: "block",
//                 width: "478px",
//                 height: "25px",
//                 padding: "20px",
//                 margin: "30px 0 30px 0",
//                 border: "1px solid #fff",
//                 borderRadius: "4px",
//                 fontSize: "16px",
//                 fontFamily: "Arial",
//                 position: "relative",
//                 left: "-550px",
//               }}
//               required
//             />
//             <input
//               className="inputTypetext"
//               type="file"
//               name="image"
//               placeholder="Image"
//               required
//               onChange={handleInputChange}
//               style={{
//                 display: "block",
//                 width: "478px",
//                 height: "25px",
//                 margin: "30px 0 30px 0",
//                 borderRadius: "4px",
//                 fontSize: "16px",
//                 fontFamily: "Arial",
//                 position: "relative",
//                 left: "-550px",
//               }}
//               accept="image/*"
//             />
//             <textarea
//               className="inputTypetextarea"
//               name="paragraph"
//               cols={55}
//               rows={10}
//               placeholder="अधिक जानकारी"
//               onChange={handleInputChange}
//               style={{ resize: "none" }}
//               required
//             />
//             <input
//               className="inputTypetext"
//               type="text"
//               name="sthal"
//               placeholder="चातुर्मास स्थल"
//               onChange={handleInputChange}
//               style={{
//                 display: "block",
//                 width: "478px",
//                 height: "25px",
//                 padding: "20px",
//                 margin: "30px 0 30px 0",
//                 border: "1px solid #fff",
//                 borderRadius: "4px",
//                 fontSize: "16px",
//                 fontFamily: "Arial",
//                 position: "relative",
//                 left: "-550px",
//               }}
//               required
//             />
//             <button id="iamButton" type="submit">
//               {" "}
//               Submit{" "}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminPage;
