const courses = [
    {
      id: 1,
      name: "Introduction to Programming",
      professor: "Dr. Alice Johnson",
      maxStudents: 30,
      enrolledStudents: 25,
      yearLevel: "Freshmen",
      required: true,
      labRequired: true, // Surprise property!
    },
    {
      id: 2,
      name: "Data Structures",
      professor: "Dr. Alice Johnson",
      maxStudents: 25,
      enrolledStudents: 20,
      yearLevel: "Sophomores",
      required: true,
      labRequired: false, // Surprise property!
    },
    {
      id: 3,
      name: "Data Structures",
      professor: "Dr. Bob Smith",
      maxStudents: 25,
      enrolledStudents: 22,
      yearLevel: "Sophomores",
      required: false,
      labRequired: false,
    },
    {
      id: 4,
      name: "Advanced React",
      professor: "Dr. Emily Davis",
      maxStudents: 20,
      enrolledStudents: 18,
      yearLevel: "Juniors",
      required: false,
      labRequired: false,
    },
    {
      id: 5,
      name: "Introduction to AI",
      professor: "Dr. Emily Davis",
      maxStudents: 30,
      enrolledStudents: 15,
      yearLevel: "Seniors",
      required: true,
      labRequired: true,
    },
    {
      id: 6,
      name: "Quantum Computing Basics",
      professor: "Dr. Carol Nguyen",
      maxStudents: 15,
      enrolledStudents: 10,
      yearLevel: "Seniors",
      required: false,
      labRequired: true,
    },
    {
      id: 7,
      name: "Calculus I",
      professor: "Dr. David Lee",
      maxStudents: 40,
      enrolledStudents: 35,
      yearLevel: "Freshmen",
      required: true,
      labRequired: false,
    },
    {
      id: 8,
      name: "Calculus I",
      professor: "Dr. Carol Nguyen",
      maxStudents: 40,
      enrolledStudents: 38,
      yearLevel: "Freshmen",
      required: true,
      labRequired: false,
    },
    {
      id: 9,
      name: "Ethics in Technology",
      professor: "Dr. Bob Smith",
      maxStudents: 50,
      enrolledStudents: 42,
      yearLevel: "Juniors",
      required: true,
      guestSpeakers: 5, // Surprise property!
    },
    {
      id: 10,
      name: "Blockchain Fundamentals",
      professor: "Dr. Alice Johnson",
      maxStudents: 20,
      enrolledStudents: 18,
      yearLevel: "Seniors",
      required: false,
      handsOnProjects: 3, // Surprise property!
    },
];


//this is already filtered out
let requiredCourses = courses.filter(course => course.required)


//show me all UpperDivision courses (courses for only Jr/Srs)

//find a course with ID of 7

//find a course called data structures

//find a course called data structures taugth by Bob Smith

//figure out the total number of students enrolled in all classes

//true or false, tell me if all classes have at least 10 enrolled

// true or false, tell me if any class has less than half enrolled