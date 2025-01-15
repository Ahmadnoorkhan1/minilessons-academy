import { useState } from "react";
import Table from "./Table";

const Tabs = () => {
  const courses = [
    {
      Name: "React for Beginners",
      Description: "An introductory course on React.js.",
      "Created At": "2023-01-15",
      "Updated At": "2023-05-20",
    },
    {
      Name: "Advanced JavaScript",
      Description: "A deep dive into JavaScript concepts and patterns.",
      "Created At": "2023-02-10",
      "Updated At": "2023-06-12",
    },
    {
      Name: "Python for Data Science",
      Description: "Learn Python programming with a focus on data science.",
      "Created At": "2023-03-05",
      "Updated At": "2023-07-10",
    },
    {
      Name: "Full Stack Web Development",
      Description: "Learn to build full-stack web applications.",
      "Created At": "2023-04-25",
      "Updated At": "2023-08-01",
    },
  ];

  const books = [
    {
      Name: "The Pragmatic Programmer",
      Description: "A must-read book for all developers.",
      "Created At": "2020-05-15",
      "Updated At": "2021-07-01",
    },
    {
      Name: "Clean Code",
      Description: "A guide to writing clean and maintainable code.",
      "Created At": "2018-10-10",
      "Updated At": "2019-05-25",
    },
    {
      Name: "Design Patterns",
      Description: "Learn common software design patterns.",
      "Created At": "2021-02-12",
      "Updated At": "2022-06-18",
    },
    {
      Name: "JavaScript: The Good Parts",
      Description:
        "A deep dive into the most important features of JavaScript.",
      "Created At": "2019-08-30",
      "Updated At": "2020-04-17",
    },
  ];

  const [showBook, setShowBook] = useState(false);
  return (
    <>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 pt-6 ">
        <li className="me-2">
          <a
            onClick={() => setShowBook(false)}
            aria-current="page"
            className={
              !showBook
                ? "inline-block p-4 rounded-t-lg text-blue-600 bg-gray-100 cursor-pointer  "
                : "inline-block p-4 rounded-t-lg text-gray-500 bg-gray-50 cursor-pointer "
            }
          >
            Course
          </a>
        </li>
        <li className="me-2">
          <a
            onClick={() => setShowBook(true)}
            className={
              showBook
                ? "inline-block p-4 rounded-t-lg cursor-pointer text-blue-600 bg-gray-100  "
                : " inline-block p-4 rounded-t-lg cursor-pointer text-gray-500 bg-gray-50  "
            }
          >
            Books
          </a>
        </li>
      </ul>
      {!showBook ? (
        <>
          <Table
            headers={["Name", "Description", "Created At", "Updated At"]}
            data={courses}
          />
        </>
      ) : (
        <>
          {" "}
          <Table
            headers={["Name", "Description", "Created At", "Updated At"]}
            data={books}
          />
        </>
      )}
    </>
  );
};

export default Tabs;
